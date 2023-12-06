import dotenv from 'dotenv';

dotenv.config();

export const sessionOption = {
    resave: false,
    saveUninitialized: false,
    secret: process.env.SECRET_KEY,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 600000
    }
}

export const checkSession = async (req) => {
    if (req.session.user){
        return true;
    }

    return false;
}
