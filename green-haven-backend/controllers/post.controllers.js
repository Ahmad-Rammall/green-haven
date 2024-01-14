const Post = require("../models/post.model");
const mongoose = require("mongoose");

const addPost = async (req, res) => {
  const description = req.body.description;
  const image = req.file ? req.file.filename : "";

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

    if (!post) {
      return res.status(404).json({ message: "Post Doesnt Exist" });
    }

    // Verify that the post belongs to the authenticated user
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

const deletePost = async (req, res) => {
  const { postId } = req.body;

  try {
    const post = await Post.findOne({ _id: postId });

    if (!post) {
      return res.status(404).json({ message: "Post Doesnt Exist" });
    }

    // Verify that the post belongs to the authenticated user
    if (String(post.user._id) !== String(req.user._id)) {
      return res.status(403).json({ message: "Can't Delete Other's Posts" });
    }

    await Post.findOneAndDelete({ _id: post._id });
    return res.status(200).json({ message: "Post Delted" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.body.postId);
    const user = req.user;

    // Test if user liked the post
    const postLiked = post.likes.find((userElement) =>
      userElement._id.equals(user._id)
    );

    if (!postLiked) {
      await post.updateOne({ $push: { likes: user } });
      res.status(200).json("You liked this post");
    } else if (postLiked) {
      post.likes = post.likes.filter(
        (like) => String(like._id) !== String(user._id)
      );
      console.log(post.likes);
      await post.save();
      res.status(200).json("You disliked this post");
    } else {
      res.status(403).json("User Not Found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUserPosts = async (req, res) => {
  const userId = req.params.userId;
  try {
    const posts = await Post.find({ user: userId }).populate({
      path: "user",
      select: ["-cart", "-garden", "-password"],
    }).populate({
      path: "comments.user",
      select: ["name", "profile_picture"],
    });
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const getFollowingPosts = async (req, res) => {
  try {
    const followingPosts = await Promise.all(
      req.user.following.map((followingId) => {
        return Post.find({ user: followingId }).populate({
          path: "user",
          select: ["-cart", "-garden", "-password"],
        }).populate({
          path: "comments.user",
          select: ["name", "profile_picture"],
        });
      })
    );
    return res.status(200).json(followingPosts);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const addComment = async (req, res) => {
  try {
    const { text, postId } = req.body;
    const post = await Post.findOne({ _id: postId });

    if (!post) {
      return res.status(400).json("Post Doesn't Exist");
    }

    post.comments.push({ user: req.user, text });
    await post.save({ new: true, runValidators: true });
    return res.status(200).json({ message: "Comment Added" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const updateComment = async (req, res) => {
  const { commentId, postId, text } = req.body;

  const post = await Post.findOne({ _id: postId });

  if (!post) {
    return res.status(400).json({ message: "Post Not Found" });
  }

  const comment = post.comments.find(
    (comment) => comment._id.toString() === commentId
  );

  if (!comment) {
    return res.status(400).json({ message: "Comment Not Found" });
  }

  if (String(comment.user) !== String(req.user._id)) {
    return res.status(403).json({ message: "Can't Change Other's Comments" });
  }

  comment.text = text;

  try {
    await post.save();
    return res.status(200).json({ message: "Comment Updated", comment });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deleteComment = async (req, res) => {
  const { commentId, postId } = req.body;

  const post = await Post.findOne({ _id: postId });

  if (!post) {
    return res.status(400).json({ message: "Post Not Found" });
  }

  const comment = post.comments.find(
    (comment) => comment._id.toString() === commentId
  );

  if (!comment) {
    return res.status(400).json({ message: "Comment Not Found" });
  }

  if (String(comment.user) !== String(req.user._id)) {
    return res.status(403).json({ message: "Can't Change Other's Comments" });
  }

  try {
    post.comments.pull({ _id: commentId });
    await post.save();
    return res.status(200).json({ message: "Comment Deleted", comment });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const likeComment = async (req, res) => {
  try {
    const { commentId, postId } = req.body;
    const user = req.user;

    const post = await Post.findOne({ _id: postId });

    if (!post) {
      return res.status(400).json({ message: "Post Not Found" });
    }

    const comment = post.comments.find(
      (comment) => comment._id.toString() === commentId
    );

    if (!comment) {
      return res.status(400).json({ message: "Comment Not Found" });
    }

    // Test if user liked the comment
    const commentLiked = comment.likes.find((userElement) =>
      userElement._id.equals(user._id)
    );

    if (!commentLiked) {
      comment.likes.push(user);
      await post.save();
      res.status(200).json("You liked this post");
    } else if (commentLiked) {
      comment.likes = comment.likes.filter(
        (like) => String(like._id) !== String(user._id)
      );
      await post.save();
      res.status(200).json("You disliked this post");
    } else {
      res.status(403).json("User Not Found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  addPost,
  updatePost,
  deletePost,
  likePost,
  getUserPosts,
  getFollowingPosts,
  addComment,
  updateComment,
  deleteComment,
  likeComment,
};
