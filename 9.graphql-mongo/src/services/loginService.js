const Users2 = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginService = async (_, { username, password }) => {
  try {
    const loginUser = await Users2.findOne({ username });

    if (!loginUser) {
      throw new Error("No user found!", error.message);
    }
    const isPasswordMatch = await bcrypt.compare(password, loginUser.password);
    if (!isPasswordMatch) {
      throw new Error("Invalid credentials, Please try again!", error.message);
    }
    const accessToken = jwt.sign(
      {
        userId: loginUser._id,
        username: loginUser.username,
        role: loginUser.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30m",
      }
    );
    return {
      token: accessToken,
    };
  } catch (error) {
    console.error("Error while logging in ", error.message);
    throw new Error("Failed to Login, Please try again!", error.message);
  }
};

module.exports = { loginService };
