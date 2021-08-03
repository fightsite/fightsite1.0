const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  balance: {
    type: Number,
    required: true,
    default: 10,
  },
});

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  //if (this.isNew || this.isModified("password")) {
  const saltRounds = 10;
  this.password = await bcrypt.hash(this.password, saltRounds);
  //}

  next();
});

userSchema.pre("findOneAndUpdate", async function (next) {
  const userBeingUpdated = await this.model.findOne(this.getQuery());
  const saltRounds = 10;
  userBeingUpdated.password = await bcrypt.hash(
    userBeingUpdated.password,
    saltRounds
  );

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
