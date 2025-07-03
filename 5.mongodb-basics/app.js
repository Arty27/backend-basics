const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://admin:2025@cluster0.awwam4u.mongodb.net/")
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

// create user model
const User = mongoose.model("User", userSchema);

async function runQueries() {
  try {
    // create a new user
    // const newUser = new User({
    //   name: "Holy Short",
    //   email: "holyshort@gmail.com",
    //   age: 20,
    //   isActive: false,
    //   tags: ["fairy", "female", "fast"],
    // });
    // await newUser.save();

    // console.log("Created a new User ", newUser);

    // Get users
    // const users = await User.find({});

    // get particular users
    // const falseUsers = await User.find({ isActive: false });

    // Get last created user by user Id
    const lastUser = await User.find().select("name email -_id");

    const limitedUsers = await User.find().limit(2).skip(1);

    const sortedUsers = await User.find().sort({ age: -1 });

    const countDocuments = await User.countDocuments({ isActive: false });

    const updateUser = await User.findByIdAndUpdate();

    console.log(countDocuments);
  } catch (e) {
    console.log("Error: ", e);
  } finally {
    mongoose.connection.close();
  }
}

runQueries();
