import User from "../models/user.model.js";
import Platform from "../models/platform.model.js";

export const createUser = async (req, res) => {
   try {
    const { username, email, name, profileLink, location, followers, platform } = req.body;

    // 1. Check if platform exists by name
    let platformDoc = await Platform.findOne({ name: platform });

    // 2. If not exists, create it
    if (!platformDoc) {
      platformDoc = new Platform({ name: platform });
      await platformDoc.save();
    }

    // 3. Now create user with platform _id
    const user = new User({
      username,
      email,
      name,
      profileLink,
      location,
      followers,
      platform: platformDoc._id
    });

    await user.save();
    res.status(201).json(user);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('platform');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};