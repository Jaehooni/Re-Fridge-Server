import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { checkSession } from "../../config/session.config";
import { loginResponseDTO, signinResponseDTO } from "../dtos/users.dto";
import { addUser, getUser, checkUser, getUserIDByEmail } from "../models/users.dao";

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
    const isSessionExist = await checkSession(req);

    if (isSessionExist){
        return loginResponseDTO(userEmail);
    }

    const accessUserData = await checkUser({
        'email': userEmail,
        'password': userPassword
    })

    if (accessUserData){
        const userId = await getUserIDByEmail(req.body.email);
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
    const isSessionExist = await checkSession(req);

    if (isSessionExist){
        console.log(req.session);
        req.session.destroy();
        return;
    }

    throw new BaseError(status.LOGOUT_FAILED);
}