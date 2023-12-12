export const insertFoodSql = "INSERT INTO food (fridge_id, name, expirationDate) VALUES (?, ?, ?);";

export const getFoodInfoByFridgeID = "SELECT * FROM food WHERE fridge_id = ?;";

export const getFoodNameByFoodID = "SELECT name FROM food WHERE id = ?;";

// export const getUserNameByFridgeId = "SELECT name FROM user WHERE user.id = (SELECT user_id FROM fridge WHERE fridge.id = ?);";

export const deleteFoodByFoodID = "DELETE FROM food WHERE food.id = ?";

export const updateFoodName = "UPDATE food SET name = ? WHERE food.id = ?";