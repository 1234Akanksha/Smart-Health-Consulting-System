import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
    minLength: [3, "First name must contain at least 3 characters!"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
    minLength: [3, "Last name must contain at least 3 characters!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    validate: [validator.isEmail, "Please enter a valid email!"],
  },
  phone: {
    type: String,
    required: [true, "Please enter your phone number"],
    minLength: [10, "Phone number must contain exactly 10 digits!"],
    maxLength: [10, "Phone number must contain exactly 10 digits!"],
  },
  adharCard: {
    type: String,
    required: [true, "Aadhar Card Is Required!"],
    minLength: [12, "Aadhar Card Must Contain Exactly 12 Digits!"],
    maxLength: [12, "Aadhar Card Must Contain Exactly 12 Digits!"],
  },
  dob: {
    type: Date,
    required: [true, "DOB Is Required!"],
  },
  gender: {
    type: String,
    required: [true, "Gender Is Required!"],
    enum: ["Male", "Female", "Other"],
  },
  password: {
    type: String,
    required: [true, "Password Is Required!"],
    minLength: [8, "Password Must Contain At Least 8 Characters!"],
    select: false,
  },
  role: {
    type: String,
    required: [true, "User Role Required!"],
    enum: ["Patient", "Doctor", "Admin"],
  },
  doctorDepartment: {
    type: String,
  },
  docAvatar: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  /*documents:
  {
    url: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now },
},
reports:
{
  url: { type: String, required: true },
  generatedAt: { type: Date, default: Date.now },
},*/
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

export const User = mongoose.model("User", userSchema);
