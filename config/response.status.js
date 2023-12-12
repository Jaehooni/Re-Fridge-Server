import { StatusCodes } from "http-status-codes";

export const status = {
    //SUCCESS
    SIGNIN_SUCCESS: {
        status: StatusCodes.OK, 
        "isSuccess": true, 
        "code": 2000, 
        "message": "회원 가입이 정상적으로 처리되었습니다"
    },

    LOGIN_SUCCESS: {
        status: StatusCodes.OK, 
        "isSuccess": true, 
        "code": 2001, 
        "message": "로그인이 정상적으로 처리되었습니다"
    },

    LOGOUT_SUCCESS: {
        status: StatusCodes.OK, 
        "isSuccess": true, 
        "code": 2002, 
        "message": "로그아웃이 정상적으로 처리되었습니다"
    },

    MAKING_FRIDGE_SUCCESS: {
        status: StatusCodes.OK,
        "isSuccess": true,
        "code": 2003,
        "message": "냉장고가 성공적으로 생성되었습니다"
    },

    SHOWING_FRIDGE_SUCCESS: {
        status: StatusCodes.OK,
        "isSuccess": true,
        "code": 2004,
        "message": "냉장고 목록이 성공적으로 출력되었습니다"
    },
    
    REMOVE_FRIDGE_SUCCESS: {
        status: StatusCodes.OK,
        "isSuccess": true,
        "code": 2005,
        "message": "냉장고가 성공적으로 삭제되었습니다"
    },

    RENAME_FRIDGE_SUCCESS: {
        status: StatusCodes.OK,
        "isSuccess": true,
        "code": 2006,
        "message": "냉장고 이름이 성공적으로 변경되었습니다"
    },

    MAKING_FOOD_SUCCESS: {
        status: StatusCodes.OK,
        "isSuccess": true,
        "code": 2007,
        "message": "음식이 성공적으로 생성되었습니다"
    },

    SHOWING_FOODS_SUCCESS: {
        status: StatusCodes.OK,
        "isSuccess": true,
        "code": 2008,
        "message": "음식 목록이 성공적으로 출력되었습니다"
    },
    
    REMOVE_FOOD_SUCCESS: {
        status: StatusCodes.OK,
        "isSuccess": true,
        "code": 2009,
        "message": "음식이 성공적으로 삭제되었습니다"
    },

    RENAME_FOOD_SUCCESS: {
        status: StatusCodes.OK,
        "isSuccess": true,
        "code": 2010,
        "message": "음식 이름이 성공적으로 변경되었습니다"
    },

    MAKING_MEMO_SUCCESS: {
        status: StatusCodes.OK,
        "isSuccess": true,
        "code": 2011,
        "message": "메모기 성공적으로 생성되었습니다"
    },

    REMOVE_MEMO_SUCCESS: {
        status: StatusCodes.OK,
        "isSuccess": true,
        "code": 20112,
        "message": "메모기 성공적으로 삭제되었습니다"
    },

    /* ERROR */
    UNAUTHORIZED: {
        status: StatusCodes.UNAUTHORIZED, 
        "isSuccess": false,
        "code": 4000,
        "message": "권한이 없습니다."
    },

    BAD_REQUEST: {
        status: StatusCodes.BAD_REQUEST, 
        "isSuccess": false,
        "code": 4001,
        "message": "잘못된 요청입니다"
    },

    LOGIN_FAILED: {
        status: StatusCodes.BAD_REQUEST,
        "isSuccess": false,
        "code": 4002,
        "message": "로그인에 실패하였습니다."
    },

    LOGOUT_FAILED: {
        status: StatusCodes.BAD_REQUEST,
        "isSuccess": false,
        "code": 4003,
        "message": "로그아웃에 실패하였습니다."
    },

    NOT_FOUND: {
        status: StatusCodes.NOT_FOUND,
        "isSuccess": false,
        "code": 4004,
        "message": "요청하신 내용을 찾을 수 없습니다."
    },

    PARAMETER_IS_WRONG: {
        status: StatusCodes.BAD_REQUEST,
        "isSuccess": false,
        "code": 4005,
        "message": "Request parameter에 오류가 발생하였습니다."
    },

    EMAIL_ALREADY_EXIST: {
        status: StatusCodes.BAD_REQUEST,
        "isSuccess": false,
        "code": 4006,
        "message": "해당 Email로 가입된 계정이 이미 존재합니다."
    },

    USER_DOES_NOT_EXIST: {
        status: StatusCodes.BAD_REQUEST,
        "isSuccess": false,
        "code": 4007,
        "message": "해당 User는 존재하지 않습니다."
    },

    SESSION_DOES_NOT_EXIST: {
        status: StatusCodes.BAD_REQUEST,
        "isSuccess": false,
        "code": 4008,
        "message": "세션이 존재하지 않습니다."
    },

    FRIDGE_NOT_CREATED: {
        status: StatusCodes.BAD_REQUEST,
        "isSuccess": false,
        "code": 4009,
        "message": "냉장고 생성에 실패했습니다."
    },

    FRIDGE_NAME_IS_DUPLICATED: {
        status: StatusCodes.BAD_REQUEST,
        "isSuccess": false,
        "code": 4010,
        "message": "냉장고 이름이 중복되었습니다."
    },

}