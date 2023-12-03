export const insertUserSql = "INSERT INTO user (name, email, gender, password, birth) VALUES (?, ?, ?, ?, ?);";

export const getUserID = "SELECT * FROM user WHERE id = ?";

export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM user WHERE email = ?) as isExistEmail";

export const confirmUser = "SELECT EXISTS(SELECT 1 FROM user WHERE email = ? AND password = ?) as isExistUser";