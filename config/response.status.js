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

    // LOGOUT_FAILED: {
    //     status: StatusCodes.BAD_REQUEST,
    //     "isSuccess": false,
    //     "code": 4003,
    //     "message": "로그아웃에 실패하였습니다."
    // },

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
        "message": "로그인 중인 유저가 아닙니다."
    }



}