const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema(
  {
    avatar: {
      type: String,
      default:"",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verification: {
      type: String,
      requird: false,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);


userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltround = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, saltround);
    user.password = hashPassword;
  } catch (error) {
    next(error);
  }
});











module.exports = userModel;
