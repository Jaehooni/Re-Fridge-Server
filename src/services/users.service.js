import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { fridgeMakingResponseDTO, loginResponseDTO, signinResponseDTO } from "../dtos/users.dto";
import { addUser, getUser, checkUser, addFridge, getFridgeOwnerName } from "../models/users.dao";
import { getUserID } from "../models/users.sql";

//섹션 여부 확인
const checkSection = async (req) => {
    if (req.session.user){
        return true;
    }

    return false;
}

// 회원가입
export const joinUser = async (body) => {
    const birth = new Date(body.birthYear, body.birthMonth - 1, body.birthDay);
    
    const joinUserData = await addUser({
        'email': body.email,
        'password': body.password,
        'name': body.name,
        'gender': body.gender,
        'birth': birth
    });

    if (joinUserData != -1){
        return signinResponseDTO(await getUser(joinUserData));
    }

    throw new BaseError(status.EMAIL_ALREADY_EXIST);

}

// 로그인
export const createSession = async (req) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    // console.log(req.session[userEmail]);

    if (await checkSection(req)){
        return loginResponseDTO(userEmail);
    }

    const accessUserData = await checkUser({
        'email': userEmail,
        'password': userPassword
    })

    if (accessUserData){
        const userId = await getUserID(userEmail);
        req.session.user = {
            id: userId,
            email: userEmail
        }
        console.log(req.session);
        req.session.save();
        return loginResponseDTO(userEmail);
    }

    throw new BaseError(status.USER_DOES_NOT_EXIST);

}

// 로그아웃
export const deleteSession = async (req) => {
    if (await checkSection(req)){
        req.session.destroy();
        return;
    }

    throw new BaseError(status.LOGOUT_FAILED);
}

// 냉장고 생성
export const joinFridge = async (req) => {
    if (await checkSection(req)){
        const joinFridgeData = await addFridge({
            'email': req.body.email,
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

//냉장고 삭제
export const deleteFridge = async (req) => {

}