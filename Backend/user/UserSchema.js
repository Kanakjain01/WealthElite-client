const mongoose = require("mongoose");
const {Schema} = mongoose
const UserSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  phone:{
    type:Number,
    required:true
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userType:{
    type:String,
    required:true,
    default:"normal"
  }
});
const user = mongoose.model("user",UserSchema)

module.exports = user
