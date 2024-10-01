const { decodeToken } = require("../services/base.service");
const { error, success } = require("./response.controller");
const CommentService = require("../services/comment.service");

const createComment = async (req, res) => {
  try {
    const token = req.headers.token;
    const decodedToken = decodeToken(token);
    const createdComment = await CommentService.create(
      decodedToken.id,
      req.body
    );
    success(res, createdComment);
  } catch (err) {
    error(res, err);
  }
};

const getCommentsByMovie = async (req, res) => {
  try {
    const comments = await CommentService.getCommentsByMovie(req.body.movieId);
    success(res, comments);
  } catch (err) {
    error(res, err);
  }
};

module.exports = {
  createComment,
  getCommentsByMovie,
};
