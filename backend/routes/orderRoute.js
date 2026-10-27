import express from "express";
import {authMiddleware} from "../middleware/auth.js"
import { placeOrder, userOrders, verifyOrder,listOrders,updateStatus } from "../controllers/orderController.js"

const orderRouter = express.Router();
orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.get("/list",authMiddleware,listOrders)
orderRouter.post("/verify", verifyOrder);
// orderRouter.post("/userOrders", userOrders);
orderRouter.post("/userOrders", authMiddleware, userOrders);
orderRouter.post("/status",authMiddleware,updateStatus)

export default orderRouter;