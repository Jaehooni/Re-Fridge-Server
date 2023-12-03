import { response } from "../../config/response";
import { status } from "../../config/response.status"; 

import { joinUser, createSession, deleteSession, joinFridge } from "../services/users.service";

export const userSignin = async(req, res, next) => {
    console.log("회원가입을 요청하였습니다");
    console.log("body: ", req.body);

    res.send(response(status.SIGNIN_SUCCESS, await joinUser(req.body)));
}

export const userLogin = async(req, res, next) => {
    console.log("로그인을 요청하였습니다");
    console.log("body: ", req.body);
    await createSession(req);

    res.send(response(status.LOGIN_SUCCESS));
} 

export const userLogout = async(req, res, next) => {
    console.log("로그아웃을 요청하였습니다");
    console.log("body: ", req.body);
    await deleteSession(req);
    
    res.send(response(status.LOGOUT_SUCCESS));
}

export const makeFridge = async(req, res, next) => {
    console.log("냉장고 생성을 요청하였습니다");
    console.log("body: ", req.body);
    res.send(response(status.MAKING_FRIDGE_SUCCESS, await joinFridge(req)))
}