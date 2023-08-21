const express = require("express");
const { createUserFunc } = require("./controller");
const UserSchema = require("./UserSchema");
const router = express.Router();
// y aarha h smj ???????????//?haa but y ni aarha ki phle kya kaha likhna h phle kis file m then kisme
router.post("/createuser", async () => {
  try {
    const { name, email, password, phone, userType } = request.body;
    const user_response = await UserSchema.create({
      name: name,
      email: email,
      phone: phone,
      password: password,
      userType: userType,
    });
    if (user_response) {
      return response.status(201).json({
        status: 201,
        message: "user Created",
      });
    }
    return response.status(402).json({
      status: 402,
      message: "unable to create",
    });
  } catch (err) {
    return response.status(500).json({
      status: 500,
      message: "server error" + err,
    });
  }
});

// router.post("/createuser",createUserFunc)

// smj aaya naa?nhi good kya nhu aaya y bta jo jo kiya wo

module.exports = router;
