import { response } from "../../config/response";
import { status } from "../../config/response.status"; 

import { joinFridge, listFridge, patchFridge, removeFridge } from "../services/fridges.service";

export const makeFridge = async(req, res, next) => {
    console.log("냉장고 생성을 요청하였습니다");
    console.log("body: ", req.session.user);
    console.log("body: ", req.body);
    res.send(response(status.MAKING_FRIDGE_SUCCESS, await joinFridge(req)))
}

export const showFridges = async(req, res, next) => {
    console.log("냉장고 조회를 요청하였습니다");
    console.log("body: ", req.body);
    console.log(req.session.user);
    res.send(response(status.SHOWING_FRIDGE_SUCCESS, await listFridge(req)))
}

export const eraseFridge = async(req, res, next) => {
    console.log("냉장고 삭제를 요청하였습니다");
    console.log("body: ", req.params);
    res.send(response(status.REMOVE_FRIDGE_SUCCESS, await removeFridge(req)))
}

export const renameFridge = async(req, res, next) => {
    console.log("냉장고 이름 변경을 요청하였습니다");
    console.log("body: ", req.params);
    console.log("body: ", req.body);
    res.send(response(status.RENAME_FRIDGE_SUCCESS, await patchFridge(req)))
}