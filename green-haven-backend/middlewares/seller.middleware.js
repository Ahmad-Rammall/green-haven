const sellerMiddleware = (req, res, next) => {
  const user = req?.user;
  if (!user || user?.role !== "seller")
    return res.status(403).send({ message: "Unauthorized" });
  next();
};

module.exports = sellerMiddleware;
