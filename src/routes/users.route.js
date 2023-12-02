import express from "express";
import asyncHandler from 'express-async-handler';

import { userSignin } from "../controllers/users.controller";

export const usersRouter = express.Router();
usersRouter.post('/signin', asyncHandler(userSignin));