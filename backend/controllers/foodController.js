import foodModel from "../models/foodModel.js";
import { promises as fs } from "fs";

// add food items
const addFood = async (req, res) => {
    let image_filename =  req.file.filename;


      const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        });       

       try {
        // check file exists
        if (!req.file) {
            return res.json({
                success: false,
                message: "Image not uploaded"
            });
        }

        await food.save();

        res.json({
            success: true,
            message: "Food Added"
        });

    } catch (error) {
        console.log("FULL ERROR:", error);
        res.json({ success: false, message: error.message });
    }
};

const listFood = async (req, res)=>{
    try {
        const foods = await foodModel.find({});
        res.json({success : true, data:foods })
    } catch (error) {
        console.log(error);
        res.json(
           { success:false,message:"error"}
        )
    }
}
     //remove food items
// const removeFood = async (req,res) => {
//     try {
//         const food = await foodModel.findById(req.body.id);
//          fs.unlink(`uploads/${food.image}`, (err)=>{

//             if(err){
//                 console.log(err);
//             }

//         });
//         await foodModel.findByIdAndDelete(req.body.id);
//         res.json({success:true,message:"food removed"})
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// }
const removeFood = async (req, res) => {

    try {

        const food = await foodModel.findById(req.body.id);

        if (!food) {
            return res.json({
                success: false,
                message: "Food not found"
            });
        }

        // IMPORTANT: correct file path
        const imagePath = `uploads/${food.image}`;

        // delete file first
        await fs.unlink(imagePath);

        // then delete DB record
        await foodModel.findByIdAndDelete(req.body.id);

        res.json({
            success: true,
            message: "Food removed"
        });

    } catch (error) {
        console.log(error);

        res.json({
            success: false,
            message: error.message
        });
    }
};
export { addFood,listFood,removeFood};