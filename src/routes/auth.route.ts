import { Router } from "express";
import { verifyUserInformation, checkUserNameAndPasswordReuse, verifyPasswordStrength } from "../middleware/verifyUserInformation";
import {  registerUser ,logInUser} from "../controller/auth.controller";

const authRouter = Router()

authRouter.post(
  "/register",
  verifyUserInformation,
  checkUserNameAndPasswordReuse,
  verifyPasswordStrength,
  registerUser
);
 authRouter.post("/login", logInUser)


export default authRouter