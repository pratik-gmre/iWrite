const mongoose = require("mongoose");

const URL = process.env.MONGODB;

const connectTOMongo = async () => {
  try {
    await mongoose.connect(URL);
    console.log("connect to mongodb");
  } catch (error) {
    console.log("database error", error);
  }
};

module.exports = connectTOMongo;
