const { userService } = require('../services');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const newUser = await userService.createUser(displayName, email, password, image);
  res.status(201).json(newUser);
};

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.status(200).json(users);
};

const getOneUser = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getOneUser(id);
  res.status(200).json(user);
};

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
};