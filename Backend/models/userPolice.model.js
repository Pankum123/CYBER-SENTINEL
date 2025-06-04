import mongoose from "mongoose";

const userPoliceSchema = mongoose.Schema( 

  {                 
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
    },
  },              

  { timestamps: true }  

);

const UserPolice = mongoose.model("UserPolice",userPoliceSchema);
export default UserPolice;
