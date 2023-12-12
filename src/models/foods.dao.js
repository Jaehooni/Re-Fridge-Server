import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { insertFoodSql, getFoodInfoByFridgeID, getFoodNameByFoodID, deleteFoodByFoodID, updateFoodName } from "./foods.sql";

export const addFood = async(data) => {
    try{
        const conn = await pool.getConnection();
        const result = await pool.query(insertFoodSql, [data.fridge_id, data.name, data.expirationDate]);

        conn.release();
        return result[0].insertId;


    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }

}

// export const getFridgeOwnerName = async(fridgeId) => {
//     try{
//         const conn = await pool.getConnection();

//         conn.release();


//     } catch (err) {
//         throw new BaseError(status.PARAMETER_IS_WRONG);
//     }
// }

export const getFoodList = async(fridgeId) => {
    try{
        const conn = await pool.getConnection();
        const [foodList] = await pool.query(getFoodInfoByFridgeID, fridgeId);

        conn.release();
        return foodList;
    } catch (err) {
        console.log(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const deleteFood = async(foodId) => {
    try{
        const conn = await pool.getConnection();
        const [result] = await pool.query(getFoodNameByFoodID, foodId);

        if (result.length > 0){
            await pool.query(deleteFoodByFoodID, foodId);
            return result[0].name; 
        }

        return -1;
        
    } catch (err){
        console.log(err);
        if (result.length == 0){
            throw new BaseError(status.NOT_FOUND);
        }
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const updateFood = async(foodId, foodName) => {
    try{
        const conn = await pool.getConnection();
        const [result] = await pool.query(updateFoodName, [foodName, foodId]);
        console.log(result.affectedRows);
    
        if (result.affectedRows > 0){
            return result[0].name; 
        }

        return -1;

        throw new BaseError(status.NOT_FOUND);
        
    } catch (err){
        console.log(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// export const addmemo = async(fridgeId, fridgeName) => {
//     try{
//         const conn = await pool.getConnection();

//         conn.release();


//     } catch (err) {
//         throw new BaseError(status.PARAMETER_IS_WRONG);
//     }
// }

// export const deleteMemo = async(fridgeId, fridgeName) => {
//     try{
//         const conn = await pool.getConnection();

//         conn.release();


//     } catch (err) {
//         throw new BaseError(status.PARAMETER_IS_WRONG);
//     }