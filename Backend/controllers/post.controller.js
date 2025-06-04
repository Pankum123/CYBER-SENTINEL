import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import Keyword from "../models/keyword.model.js";
import Tag from "../models/tag.model.js";

export const createPost = async (req, res) => {
  try {
    const { content, postLink, timestamp, username, keyword, tags } = req.body;

    // 1. Get User by username
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: "User not found" });

    // 2. Get or create Keyword
    let keywordDoc = await Keyword.findOne({ word: keyword });
    if (!keywordDoc) {
      keywordDoc = new Keyword({ word: keyword });
      await keywordDoc.save();
    }

    // 3. Get or create each Tag (expects array of { label, type })
    const tagIds = [];
    for (let tag of tags) {
      let tagDoc = await Tag.findOne({ label: tag.label, type: tag.type });
      if (!tagDoc) {
        tagDoc = new Tag(tag);
        await tagDoc.save();
      }
      tagIds.push(tagDoc._id);
    }

    // 4. Create Post
    const post = new Post({
      content,
      postLink,
      timestamp,
      user: user._id,
      keyword: keywordDoc._id,
      tags: tagIds,
    });

    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getPostsByKeyword = async (req, res) => {
  const { keyword } = req.query;

  try {
    const keywordDoc = await Keyword.findOne({ word: keyword }); // fixed "name" -> "word"
    if (!keywordDoc) {
      return res.status(404).json({ message: "Keyword not found" });
    }

    const posts = await Post.find({ keyword: keywordDoc._id })
      .populate({
        path: "user",
        populate: {
          path: "platform",
        },
      })
      .populate("keyword")
      .populate("tags")
      .sort({ timestamp: -1 })
      .lean();

    const transformedPosts = posts.map((post) => ({
      name: post.user?.username || "Unknown",
      posts: 1, // Each post is a row; you can aggregate in frontend if needed
      date: post.timestamp,
      followers: post.user?.followers || "N/A",
      location: post.user?.location || "N/A",
      postLink: post.postLink || "#",
      profileLink: post.user?.profileLink || "#",
      platform: post.user?.platform.name || "unknown",
    }));

    res.json(transformedPosts);
  } catch (error) {
    console.error("Error fetching posts by keyword:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Top User

export const getTopUsersByKeyword = async (req, res) => {
  try {
    const { keyword } = req.query;
    console.log("Keyword:", keyword);

    if (!keyword) {
      return res.status(400).json({ error: "Keyword is required" });
    }

    // Step 1: Find the keyword document
    const keywordDoc = await Keyword.findOne({ word: keyword });
    if (!keywordDoc) {
      return res.status(404).json({ error: "Keyword not found" });
    }

    // Step 2: Find posts with that keyword and populate user + platform
    const posts = await Post.find({ keyword: keywordDoc._id })
      .populate({
        path: "user",
        select: "name username platform followers location profileLink",
        populate: {
          path: "platform",
          select: "name", // add 'icon' if available
        },
      });

    // Step 3: Map users and avoid duplicates using a Map
    const usersMap = new Map();

    posts.forEach((post) => {
      const u = post.user;
      if (u && !usersMap.has(u._id.toString())) {
        usersMap.set(u._id.toString(), {
          name: u.username,
          platform: u.platform?.name || "unknown",
          followers: u.followers || 0,
          location: u.location || "N/A",
          profileLink: u.profileLink || "#",
        });
      }
    });

    // Step 4: Sort by followers descending and limit to top 20
    const topUsers = [...usersMap.values()]
      .sort((a, b) => b.followers - a.followers)
      .slice(0, 20);

    console.log("Top Users:", topUsers);
    res.status(200).json(topUsers);
  } catch (error) {
    console.error("Error fetching top users:", error);
    res.status(500).json({ error: "Failed to fetch top users" });
  }
};

//platform wise table

export const getPlatformStatsByKeyword = async (req, res) => {
  try {
    const { keyword } = req.query;
    if (!keyword) return res.status(400).json({ error: "Keyword is required" });

    // Find the keyword document
    const keywordDoc = await Keyword.findOne({ word: keyword });
    if (!keywordDoc) return res.status(404).json({ error: "Keyword not found" });

    // Fetch posts with populated user & platform
    const posts = await Post.find({ keyword: keywordDoc._id })
      .populate({
        path: "user",
        populate: { path: "platform" },
      })
      .lean();

    // Group by platform
    const statsMap = {};

    posts.forEach((post) => {
      const platform = post.user?.platform?.name || "Unknown";
      const location = post.user?.location || "Unknown";
      const timestamp = new Date(post.timestamp);
      const postLink = post.postLink || "#";

      if (!statsMap[platform]) {
        statsMap[platform] = {
          platform,
          posts: 1,
          regions: { [location]: 1 },
          firstPost: { date: timestamp, link: postLink },
        };
      } else {
        statsMap[platform].posts += 1;
        statsMap[platform].regions[location] = (statsMap[platform].regions[location] || 0) + 1;

        if (timestamp < statsMap[platform].firstPost.date) {
          statsMap[platform].firstPost = { date: timestamp, link: postLink };
        }
      }
    });

    const result = Object.values(statsMap).map((item) => {
      const topRegion = Object.entries(item.regions).sort((a, b) => b[1] - a[1])[0][0];
      return {
        platform: item.platform,
        posts: item.posts,
        region: topRegion,
        date: item.firstPost.date.toLocaleDateString(),
        link: item.firstPost.link,
      };
    });

    res.status(200).json(result);
  } catch (err) {
    console.error("Error in getPlatformStatsByKeyword:", err);
    res.status(500).json({ error: "Failed to fetch platform stats" });
  }
};

