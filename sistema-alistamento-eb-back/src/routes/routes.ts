import { Router } from "express";

import authMiddleware from "../middlewares/authMiddleware"; //protege as rotas

import UserController from "../controllers/UserController";
import AuthController from "../controllers/AuthController";

const router = Router();

router.post("/usuarios", UserController.store);
router.get("/usuarios", authMiddleware, UserController);
router.post("/auth", AuthController.store);

export default router;
