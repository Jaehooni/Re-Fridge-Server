import express from "express";
import asyncHandler from 'express-async-handler';

import { makeFood, showFoods, eraseFood, renameFood} from "../controllers/foods.controller";

export const foodsRouter = express.Router();

//Handlers
foodsRouter.post('/', asyncHandler(makeFood));
foodsRouter.post('/lists', asyncHandler(showFoods));
foodsRouter.delete('/:foodId', asyncHandler(eraseFood));
foodsRouter.patch('/:foodId', asyncHandler(renameFood));
// foodsRouter.post('/:foodId/memo', asyncHandler(addMemo));
// foodsRouter.delete('/:foodId/memo', asyncHandler(deleteMemo));