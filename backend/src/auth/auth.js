const User = require('../User/models/user.model');
const jwt = require('jsonwebtoken');

export const auth = (req, res, next) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not provided"
      });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Payload: ", payload);

    if (!payload.role) {
      return res.status(403).json({
        success: false,
        message: "No role specified in the token"
      });
    }

    req.user = payload; // Attach payload to request for future use
    next(); // Proceed to the next middleware or route handler
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Authentication error",
      error: e.message
    });
  }
};
