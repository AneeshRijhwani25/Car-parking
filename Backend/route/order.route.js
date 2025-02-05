import express from "express";
import {
  createBooking,
  verifyBooking,
} from "../controller/order.controller.js";
const router = express.Router();

router.post("/order", createBooking);
router.post("/verify", verifyBooking);

export default router;
