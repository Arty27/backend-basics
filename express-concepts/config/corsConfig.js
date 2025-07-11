const cors = require("cors");

const configureCors = () => {
  return cors({
    // origin -> this will tell which origins can access the server
    origin: (origin, callback) => {
      const allowedOrigin = [
        "http://localhost:3000",
        "http://yourCustomDomain.com",
      ];
      if (!origin || allowedOrigin.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by Cors"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept-Version"],
    exposedHeaders: ["X-Total-Count", "Content-Range"],
    credentials: true, // enable support for cookies
    preflightContinue: false,
    maxAge: 600, // This will cache preflight responses for 10 mins = 600 sec -> help you to avoid sending
    // options requests multiple times
    optionsSuccessStatus: 204, // will be used for successfull options request
  });
};

module.exports = { configureCors };
