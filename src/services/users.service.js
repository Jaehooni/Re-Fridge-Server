import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { loginResponseDTO, signinResponseDTO } from "../dtos/users.dto";
import { addUser, getUser, checkUser } from "../models/users.dao";

// 회원가입
export const joinUser = async (body) => {
    const birth = new Date(body.birthYear, body.birthMonth - 1, body.birthDay);
    
    const joinUserData = await addUser({
        'name': body.name,
        'email': body.email,
        'password': body.password,
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

    console.log(req.session[userEmail]);

    if (req.session[req.body.email]){
        // console.log("session 유지 중인 유저")
        return loginResponseDTO(userEmail);
    }

    const accessUserData = await checkUser({
        'email': userEmail,
        'password': userPassword
    })

    if (accessUserData){
        req.session[userEmail] = userPassword;
        req.session.save();
        console.log(req.session[userEmail]);
        return loginResponseDTO(userEmail);
    }

    throw new BaseError(status.USER_DOES_NOT_EXIST);

}

// 로그아웃
export const deleteSession = async (req) => {
    if (req.session[req.body.email]){
        req.session.destroy();
        return;
    }

    throw new BaseError(status.LOGOUT_FAILED);
}

// 냉장고 생성
export const joinFridge = async (req) => {
    
}