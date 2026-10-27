import express from "express";
import { authMiddleware } from "../middleware/auth.js";
import { addFood,listFood,removeFood } from "../controllers/foodController.js";
import multer from "multer";

const foodROuter = express.Router();

// storage
const storage = multer.diskStorage({
    destination:"uploads/",
    //  filename : (req, file, cb) => {
    //     cb(null, "uploads/");
    // },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage:storage });

foodROuter.post("/add", upload.single("image"), addFood);
foodROuter.get("/list", listFood)
foodROuter.post("/remove", removeFood);

export default foodROuter;