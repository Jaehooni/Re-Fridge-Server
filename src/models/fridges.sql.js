export const insertFridgeSql = "INSERT INTO fridge (user_id, name) VALUES (?, ?);";

export const getFridgeInfoByUserID = "SELECT * FROM fridge WHERE user_id = ?;";

export const getFridgeNameByFridgeID = "SELECT name FROM fridge WHERE id = ?;";

export const getUserNameByFridgeId = "SELECT name FROM user WHERE user.id = (SELECT user_id FROM fridge WHERE fridge.id = ?);";

export const deleteFridgeByFridgeID = "DELETE FROM fridge WHERE fridge.id = ?";