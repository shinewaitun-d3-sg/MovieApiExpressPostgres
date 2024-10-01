const jwt = require("jsonwebtoken");

const getPaginatedItems = async (
  Model,
  page = 1,
  limit = 5,
  sortBy = "createdAt",
  order = "DESC",
  include = null,
  criteria = {}
) => {
  const offset = (page - 1) * limit;

  const options = {
    where: criteria,
    limit,
    offset,
    order: [[sortBy, order.toUpperCase() === "1" ? "ASC" : "DESC"]],
  };

  if (include) {
    options.include = include;
  }

  const { rows: content, count: totalCount } = await Model.findAndCountAll(
    options
  );

  const totalPages = Math.ceil(totalCount / limit);

  return {
    content,
    totalPages,
    haveNextPage: page < totalPages,
    havePrevPage: page > 1,
    totalCount,
  };
};

const decodeToken = (token) => {
  const decodedToken = jwt.decode(token);
  return decodedToken;
};

module.exports = {
  getPaginatedItems,
  decodeToken,
};
