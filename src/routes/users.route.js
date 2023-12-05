import express from "express";
import asyncHandler from 'express-async-handler';

import { userSignin, userLogin, userLogout, makeFridge } from "../controllers/users.controller";

export const usersRouter = express.Router();

//Handlers
usersRouter.post('/signin', asyncHandler(userSignin));
usersRouter.post('/login', asyncHandler(userLogin));
usersRouter.post('/logout', asyncHandler(userLogout));
usersRouter.post('/logout', asyncHandler(makeFridge));