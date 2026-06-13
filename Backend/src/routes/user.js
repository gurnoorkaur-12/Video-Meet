import {Router} from "express";
import {register,login} from "../controllers/user.js";
import wrapAsync from "../../utils/wrapAsync.js";
const router = Router();

router.route("/register").post(wrapAsync(register));
router.route("/login").post(wrapAsync(login));

export default router;