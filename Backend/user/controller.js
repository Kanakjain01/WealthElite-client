const UserSchema = require("./UserSchema");

// m poora likhta hu request req response res

const createUserFunc = async (request, response) => {
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
        message: "server error"+err,
      });
  }
};




// function bn gya 
module.exports = {createUserFunc}
// export kr diya 