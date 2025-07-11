const rateLimit = require("express-rate-limit");

const createBasicRateLimiter = (maxRequests, time) => {
  return rateLimit({
    max: maxRequests,
    window: time,
    message: "Too many requests, Limit Exceeded, Please try again later",
    standardHeaders: true,
    legacyHeaders: false,
  });
};

module.exports = { createBasicRateLimiter };
