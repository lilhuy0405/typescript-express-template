import * as express from "express"
import UserController from "../controller/UserController";
import authMiddleware from "../middleware/auth";
import AuthController from "../controller/AuthController";

const router = express.Router()
//import controller
const userController = new UserController();
const authController = new AuthController();

router.post(`/auth/login`, authController.login.bind(authController));
router.post(`/auth/register`, authController.register.bind(authController));
router.get(`/users/me`, [authMiddleware], userController.me.bind(userController));
router.get(`/users`, [authMiddleware], userController.getAllUsers.bind(userController));

export default router;

