import { Router } from "express";
import { slow } from "../middleware/express-slowDown.js";

// import { limiter } from "./middleware/rateLimiter.js";
import { paymentcontroller } from "../controller/payment.controller.js";
import { resisterStudent, resendOTP,  verifyStudentRegistration, verifyCaptcha } from "../controller/resistration.js";



const router=Router();

router.route("/register").post(slow,resisterStudent);

router.route("/verify").post( slow,verifyStudentRegistration);

router.route("/resendotp").get(resendOTP);
router.route("/verifyCaptcha").post(verifyCaptcha);
router.route("/create").post(paymentcontroller);

export default router