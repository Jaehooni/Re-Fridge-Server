import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { checkSession } from "../../config/session.config";
import { foodDeleteResponseDTO, foodListResponseDTO, foodMakingResponseDTO, foodRenameResponseDTO, memoMakingResponseDTO } from "../dtos/foods.dto";
import { addFood, deleteFood, getFoodList, updateFood } from "../models/foods.dao";

export const joinFood = async (req) => {
    const isSessionExist = await checkSession(req);
    if (isSessionExist){
        const expirationDate = new Date(req.body.year, req.body.month - 1, req.body.day);
        const joinFoodData = await addFood({
            'fridge_id': req.body.fridge_id,
            'name': req.body.name,
            'expirationDate': expirationDate,
        });

        if (joinFoodData != -1){
            return foodMakingResponseDTO(req.body.fridgeName, req.body.name)
        }

        throw new BaseError(status.BAD_REQUEST);

    }

    throw new BaseError(status.SESSION_DOES_NOT_EXIST);
}

export const listFoods = async (req) => {
    const isSessionExist = await checkSession(req);

    if (isSessionExist){
        const fridgeList = await getFoodList(req.body.fridge_id);
        return foodListResponseDTO(fridgeList);
    }

    throw new BaseError(status.SESSION_DOES_NOT_EXIST);
}

export const removeFood = async (req) => {
    const isSessionExist = await checkSession(req);

    if (isSessionExist){
        const removeFoodResult = await deleteFood(req.params.foodId);

        if (removeFoodResult != -1){
            return foodDeleteResponseDTO(removeFoodResult);
        }

        throw new BaseError(status.NOT_FOUND);
    }

    throw new BaseError(status.SESSION_DOES_NOT_EXIST);
}

export const patchFood = async (req) => {
    const isSessionExist = await checkSession(req);

    if (isSessionExist){
        const renameFoodResult = await updateFood(req.params.foodId, req.body.name);

        if (renameFoodResult != -1){
            return foodRenameResponseDTO(renameFoodResult);
        }

        throw new BaseError(status.NOT_FOUND);
    }

    throw new BaseError(status.SESSION_DOES_NOT_EXIST);
}

// export const addMemoToFood = async (req) => {
//     const isSessionExist = await checkSession(req);

//     if (isSessionExist){

//         return memoMakingResponseDTO
//     }

//     throw new BaseError(status.SESSION_DOES_NOT_EXIST);
// }

// export const deleteMemofromFood = async (req) => {
//     const isSessionExist = await checkSession(req);

//     if (isSessionExist){

//         return;
//     }

//     throw new BaseError(status.SESSION_DOES_NOT_EXIST);
// }