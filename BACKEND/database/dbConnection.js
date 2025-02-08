import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN_SMART_HEALTH_CONSULTING_SYSTEM"
    }).then(() => {
        console.log("Database connected!");
    }).catch((err) => {
        console.log('Some error occurred while connecting to database: ${err}');
    });
};