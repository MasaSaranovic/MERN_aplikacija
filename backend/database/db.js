import mongoose from "mongoose";

const connectDB = async () => {
    {
        try {
            await mongoose.connect(process.env.MONGO_URI)
            console.log("MongoDB connect successfuly");
        }
        catch (error) {
            console.log("MongoDB connect failed", error);
        }
    }
}

export default connectDB;