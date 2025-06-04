import Platform from "../models/platform.model.js";

export const createPlatform = async (req, res) => {
  try {
    const platform = await Platform.create(req.body);
    res.status(201).json(platform);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllPlatforms = async (req, res) => {
  try {
    const platforms = await Platform.find();
    res.status(200).json(platforms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};