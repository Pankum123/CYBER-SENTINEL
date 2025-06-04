import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import cookiesParser from "cookie-parser"

import userPoliceRoute from "./routes/userPolice.route.js";

import platformRoutes from "./routes/platform.route.js";
import keywordRoutes from "./routes/keyword.route.js";
import trackedUserRoutes from "./routes/user.route.js";
import tagRoutes from "./routes/tag.route.js";
import postRoutes from "./routes/post.route.js";


const app = express();

app.use(express.json());
app.use(cookiesParser());
app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 6000;
const URL = process.env.MONGODB_URI;

try{
mongoose.connect(URL);
console.log("connected to mongoDB");
}
catch(error){
console.log("Error : ",error);
}

// Routes
app.use("/api/userPolice",userPoliceRoute);

app.use("/platforms",platformRoutes);
app.use("/keywords",keywordRoutes);
app.use("/api/users",trackedUserRoutes);
app.use("/tags",tagRoutes);
app.use("/api/posts",postRoutes);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

