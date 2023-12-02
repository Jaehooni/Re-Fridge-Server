import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { signinResponseDTO } from "../dtos/users.dto";
import { addUser, getUser } from "../models/users.dao";

export const joinUser = async (body) => {
    const birth = new Date(body.birthYear, body.birthMonth - 1, body.birthDay);
    
    const joinUserData = await addUser({
        'name': body.name,
        'email': body.email,
        'password': body.password,
        'gender': body.gender,
        'birth': birth
    });

    if (joinUserData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }
    else{
        return signinResponseDTO(await getUser(joinUserData));
    }
}