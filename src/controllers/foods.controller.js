import { response } from "../../config/response";
import { status } from "../../config/response.status"; 

import { joinFood, addMemoToFood, deleteMemofromFood, listFoods, patchFood, removeFood } from "../services/foods.service";

export const makeFood = async(req, res, next) => {
    console.log("음식 생성을 요청하였습니다");
    console.log("session: ", req.session.user);
    console.log("body: ", req.body);
    res.send(response(status.MAKING_MEMO_SUCCESS, await joinFood(req)))
}

export const showFoods = async(req, res, next) => {
    console.log("음식 조회를 요청하였습니다");
    console.log("session: ", req.session.user);
    console.log("body: ", req.body);
    res.send(response(status.SHOWING_FOODS_SUCCESS, await listFoods(req)))
}

export const eraseFood = async(req, res, next) => {
    console.log("음식 삭제를 요청하였습니다");
    console.log("session: ", req.session.user);
    console.log("body: ", req.params);
    res.send(response(status.REMOVE_FOOD_SUCCESS, await removeFood(req)))
}

export const renameFood = async(req, res, next) => {
    console.log("음식 이름 변경을 요청하였습니다");
    console.log("body: ", req.session.user);
    console.log("body: ", req.body);
    res.send(response(status.RENAME_FOOD_SUCCESS, await patchFood(req)))
}

// export const addMemo = async(req, res, next) => {
//     console.log("냉장고 생성을 요청하였습니다");
//     console.log("body: ", req.session.user);
//     console.log("body: ", req.body);
//     res.send(response(status.MAKING_MEMO_SUCCESS, await addMemoToFood(req)))
// }

// export const deleteMemo = async(req, res, next) => {
//     console.log("냉장고 생성을 요청하였습니다");
//     console.log("body: ", req.session.user);
//     console.log("body: ", req.body);
//     res.send(response(status.REMOVE_FRIDGE_SUCCESS, await deleteMemofromFood(req)))
// }