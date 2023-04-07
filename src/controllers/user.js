const { userService } = require('../services');

const createUser = async (req, res) => {
  const { displayName, email, password } = req.body;
  const newUser = await userService.createUser(displayName, email, password);
  res.status(201).json(newUser);
};

module.exports = {
  createUser,
};