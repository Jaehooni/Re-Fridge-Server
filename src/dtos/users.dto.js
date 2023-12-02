export const signinResponseDTO = (user) => {
    return {"name": user[0].name, "email": user[0].email};
}