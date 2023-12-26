const Post = require("../models/post.model");

const addPost = async (req, res) => {
  const { description, image } = req.body;
  try {
    const post = new Post({ user: req.user, description, image });
    await post.save({ new: true, runValidators: true });
    return res.status(200).json({ message: "Post Added", post });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const updatePost = async (req, res) => {
  const { postId, description, image } = req.body;

  try {
    const post = await Post.findOne({ _id: postId });
    console.log("Req: " + req.user._id + " postUser: " + post.user._id);
    if (String(post.user._id) !== String(req.user._id)) {
      return res.status(403).json({ message: "Can't Change Other's Posts" });
    }
    const updatedPost = await Post.findOneAndUpdate(
      { _id: post._id },
      { description, image },
      { new: true, runValidators: true }
    );
    return res.status(200).json({ message: "Post Updated", post: updatedPost });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deletePost = async (req, res) => {};

const likePost = async (req, res) => {};

const getUserPosts = async (req, res) => {};

const getFollowingPosts = async (req, res) => {};

module.exports = {
  addPost,
  updatePost,
  deletePost,
  likePost,
  getUserPosts,
  getFollowingPosts,
};
