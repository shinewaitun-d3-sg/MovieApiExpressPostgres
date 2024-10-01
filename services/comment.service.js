const Comment = require("../models").Comment;
const User = require("../models").User;

const create = async (userId, data) => {
  try {
    const createdComment = await Comment.create({
      content: data.content,
      userId: parseInt(userId),
      commentableId: parseInt(data.commentableId),
      commentableType: data.commentableType,
    });
    return createdComment;
  } catch (error) {
    return error;
  }
};

const getCommentsByMovie = async (movieId) => {
  try {
    const comments = await Comment.findAll({
      where: { commentableId: parseInt(movieId), commentableType: "movie" },
      include: [{ model: User, attributes: ["id", "username"] }],
    });
    return comments;
  } catch (error) {
    return error;
  }
};

module.exports = {
  create,
  getCommentsByMovie,
};
