import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { checkSession } from "../../config/session.config";
import { fridgeDeleteResponseDTO, fridgeListResponseDTO, fridgeMakingResponseDTO} from "../dtos/fridges.dto";
import { addFridge, getFridgeList, getFridgeOwnerName, deleteFridge } from "../models/fridges.dao";

// 냉장고 생성
export const joinFridge = async (req) => {
    const isSessionExist = await checkSession(req);

    if (isSessionExist){
        const joinFridgeData = await addFridge({
            'id': req.session.user.id,
            'fridgeName': req.body.fridgeName,
        }); 

        // console.log(joinFridgeOwnerData);
        if (joinFridgeData != -1){
            return fridgeMakingResponseDTO(await getFridgeOwnerName(joinFridgeData), req.body.fridgeName);
        }

        throw new BaseError(status.FRIDGE_NOT_CREATED);
    }

    throw new BaseError(status.SESSION_DOES_NOT_EXIST);
}

export const listFridge = async (req) => {
    const isSessionExist = await checkSession(req);

    if (isSessionExist){
        const fridgeList = await getFridgeList(req.session.user.id);
        return fridgeListResponseDTO(fridgeList);
    }

    throw new BaseError(status.SESSION_DOES_NOT_EXIST);
}

//냉장고 삭제
export const removeFridge = async (req) => {
    const isSessionExist = await checkSession(req);

    if (isSessionExist){
        const removedFridgeName = await deleteFridge(req.params.fridgeId);
        return fridgeDeleteResponseDTO(removedFridgeName);
    }

    throw new BaseError(status.SESSION_DOES_NOT_EXIST);
}