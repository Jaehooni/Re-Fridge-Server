import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { insertUserSql, confirmEmail, getUserID } from "./users.sql";

export const addUser = async (data) => {
    try{
        const conn = await pool.getConnection();

        const [confirm] = await pool.query(confirmEmail, data.email);

        if (confirm[0].isExistEmail){
            conn.release();
            return -1;
        }

        const result = await pool.query(insertUserSql, [data.name, data.email, data.gender, data.password, data.birth]);

        conn.release();
        return result[0].insertId;
    } catch (err) {
        console.log(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getUser = async (userId) => {
    try {
        const conn = await pool.getConnection();
        const [user] = await pool.query(getUserID, userId);

        console.log(user);

        if (user.length == 0){
            return -1;
        }

        conn.release();
        return user;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}