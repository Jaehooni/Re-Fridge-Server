import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { insertFridgeSql, getUserNameByFridgeId, getFridgeInfoByUserID, deleteFridgeByFridgeID, getFridgeNameByFridgeID, updateFridgeName } from "./fridges.sql";

export const addFridge = async(data) => {
    try{
        const conn = await pool.getConnection();

        const result = await pool.query(insertFridgeSql, [data.id, data.fridgeName]);

        conn.release();
        return result[0].insertId;

    } catch (err) {
        console.log(err);
        if (err.errno == 1062){
            throw new BaseError(status.FRIDGE_NAME_IS_DUPLICATED);
        }
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }

}

export const getFridgeOwnerName = async(fridgeId) => {
    try{
        const conn = await pool.getConnection();
        const [username] = await pool.query(getUserNameByFridgeId, fridgeId);

        if (username.length == 0){
            return -1;
        }

        conn.release();
        return username;
    } catch (err) {
        console.log(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getFridgeList = async(userId) => {
    try{
        const conn = await pool.getConnection();
        const [fridgeList] = await pool.query(getFridgeInfoByUserID, userId);

        conn.release();
        return fridgeList;
    } catch (err) {
        console.log(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const deleteFridge = async(fridgeId) => {
    try{
        const conn = await pool.getConnection();
        const [result] = await pool.query(getFridgeNameByFridgeID, fridgeId);
        console.log(result);

        if (result.length > 0){
            await pool.query(deleteFridgeByFridgeID, fridgeId);
            return result[0].name; 
        }
        
    } catch (err){
        console.log(err);
        if (result.length == 0){
            throw new BaseError(status.NOT_FOUND);
        }
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const updateFridge = async(fridgeId, fridgeName) => {
    try{
        const conn = await pool.getConnection();
        const [result] = await pool.query(updateFridgeName, [fridgeName, fridgeId]);
    
        if (result.length > 0){
            return result[0].name; 
        }
        
    } catch (err){
        console.log(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}