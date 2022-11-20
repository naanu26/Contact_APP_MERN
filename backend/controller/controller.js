const users = require("../models/userSchema");

const registerUser = async (req, res) => {
  const { name, email, phone, note } = req.body;

  if (!name || !email || !phone || !note) {
    res.status(404).json("Please enter all the data!");
    return;
  }

  try {
    // before adding in db, check if user exists
    const user = await users.findOne({ email: email });

    //user with same email id exists
    if (user) {
      res.status(404).json("User with same email, already exists in database!");
    } else {
      // add user in the database

      // create obj using obj destructuring as key and value is same
      const userObj = new users({
        name,
        email,
        phone,
        note,
      });
      await userObj.save();
      res.status(201).json(userObj);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const getUserData = async (req, res) => {
  try {
    const userdata = await users.find();
    res.status(201).json(userdata);
  } catch (error) {
    res.status(404).json(error);
  }
};

const getParticualrUser = async (req, res) => {
  try {
    const { id } = req.params;
    const particularUser = await users.findById({ _id: id });
    res.status(201).json(particularUser);
  } catch (error) {
    res.status(404).json(error);
  }
};

const updateUserData = async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await users.findByIdAndUpdate(id, req.body, {
      new: true, // we can get the updated user
    });
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(404).json(error);
  }
};

const deleteUSer = async (req, res) => {
  try {
    const { id } = req.params;
    const deletuser = await users.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  registerUser: registerUser,
  getUserData: getUserData,
  getParticualrUser: getParticualrUser,
  updateUserData: updateUserData,
  deleteUSer: deleteUSer
};
