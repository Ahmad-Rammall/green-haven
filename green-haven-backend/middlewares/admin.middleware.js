const adminMiddleware = (req, res, next) => {
  const user = req?.user;
  if (!user || user?.role !== "admin")
    return res.status(403).send({ message: "Unauthorized" });
  next();
};

module.exports = adminMiddleware;
