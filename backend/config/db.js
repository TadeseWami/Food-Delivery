import mongoose from "mongoose";
import dns from "dns";

dns.setDefaultResultOrder('ipv4first');

export const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb://tade_db_user:13243546@ac-htmeaoa-shard-00-00.6bo3ybi.mongodb.net:27017,ac-htmeaoa-shard-00-01.6bo3ybi.mongodb.net:27017,ac-htmeaoa-shard-00-02.6bo3ybi.mongodb.net:27017/food-delivery?ssl=true&replicaSet=atlas-yu1jtg-shard-0&authSource=admin&appName=Cluster0"
        );
        console.log("DB connected");
    } catch (error) {
        console.log("Database connection failed:");
        console.log(error.message);
    }
};