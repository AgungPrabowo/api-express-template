module.exports = (data, isSuccess, msg) => {
  const message = isSuccess
    ? msg || "Success fetch data"
    : msg || "Failed to fetch data";
  return {
    data,
    success: isSuccess,
    message,
  };
};
