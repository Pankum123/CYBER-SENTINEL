import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import cookiesParser from "cookie-parser"
import userRoute from "./routes/user.route.js";

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

app.use("/api/user",userRoute);


// app.get('/', (req, res) => {
//   res.send('Hello RAMAN PRABHAV')
// })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

