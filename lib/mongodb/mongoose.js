import mongoose from "mongoose";

let isConnected = false // track connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected) {
        console.log("MongoDB is connected")
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
          dbName: "SocialZone",
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
    
        isConnected = true;
    
        console.log("MongoDB is connected");
      } catch (error) {
        console.log(error);
      }
}