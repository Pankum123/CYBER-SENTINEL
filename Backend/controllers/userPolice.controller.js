import UserPolice from "../models/userPolice.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generateToken.js";

export const signup = async (req, res) => {
  const { fullname, email, password, confirmPassword } = req.body;
  try {
    if (password != confirmPassword) {
      return res.status(400).json({ error: "Password do not match" });
    }
    const user = await UserPolice.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already registered" });
    }
    //hashing password
    // const hashPassword = await bcrypt.hash(password,10);
    const str = password.toString(); // Convert integer to string
    const salt = bcrypt.genSaltSync(10); // Generate salt
    const hashPassword = bcrypt.hashSync(str, salt); // Hash the string
    const newUser = new UserPolice({
      fullname,
      email,
      password: hashPassword,
    });
    await newUser.save();
    if (newUser) {
      createTokenAndSaveCookie(newUser._id, res);
      res.status(200).json({
        message: "User created successfully",
        user: {
          _id: newUser._id,
          fullname: newUser.fullname,
          email: newUser.email,
        },
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
//user.route ke pass jao

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserPolice.findOne({ email });
    console.log("user chechbefore", user);
    if (!user) {
      return res.status(400).json({ error: "Invalid user credential" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "password do not match" });
    }

    createTokenAndSaveCookie(user._id, res);
    res.status(201).json({
      message: "User logged in successfully",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
//user.route  ke pass jao

export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(201).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
