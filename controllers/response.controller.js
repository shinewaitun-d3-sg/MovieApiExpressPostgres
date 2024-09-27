const created = (res, result) => {
  res.status(201).json({
    status: "created",
    result,
  });
};

const error = (res, result) => {
  res.status(500).json({
    status: "error",
    result,
  });
};

const success = (res, result) => {
  res.status(200).json({
    status: "success",
    result,
  });
};

module.exports = {
  created,
  error,
  success,
};
