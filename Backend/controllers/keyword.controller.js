import Keyword from "../models/keyword.model.js";

export const createKeyword = async (req, res) => {
  try {
    const keyword = await Keyword.create(req.body);
    res.status(201).json(keyword);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllKeywords = async (req, res) => {
  try {
    const keywords = await Keyword.find();
    res.status(200).json(keywords);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};