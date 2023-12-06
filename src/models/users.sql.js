export const insertUserSql = "INSERT INTO user (email, password, name, gender, birth) VALUES (?, ?, ?, ?, ?);";

export const getUserByID = "SELECT * FROM user WHERE id = ?";

export const confirmUser = "SELECT EXISTS(SELECT 1 FROM user WHERE email = ? AND password = ?) as isExistUser";

export const getUserID = "SELECT id FROM user WHERE email = ?"

export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM user WHERE email = ?) as isExistEmail";
