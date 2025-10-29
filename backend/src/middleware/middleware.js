const User = require("../User/models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.userMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token)
      return res
        .status(401)
        .json({ success: false, message: "Token not provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const u = await User.findById(decoded.id);
    if (!u)
      return res
        .status(401)
        .json({ success: false, message: "User not found" });

    req.user = u;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error in user middleware",
      error: error.message,
    });
  }
};
