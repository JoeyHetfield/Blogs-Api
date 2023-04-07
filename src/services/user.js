const { User } = require('../models');
const { createToken } = require('../utils/auth');
const ErrorFile = require('../utils/ErrorFile');

const createUser = async (displayName, email, password, image) => {
  const userExists = await User.findOne({ where: { email } });
  if (userExists) throw new ErrorFile('User already registered', 409);
  
  const user = await User.create({ displayName, email, password, image });
  if (!user) throw new ErrorFile('Invalid fields', 400);
  const token = createToken({ id: user.id });
  return { token };
};
 
// Não podia mostrar password no final, https://sequelize.org/docs/v6/core-concepts/model-querying-basics/ ler mais depois
const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  if (!users) throw new ErrorFile('Users not found', 404);
  return users;
};

const getOneUser = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  if (!user) throw new ErrorFile('User does not exist', 404);
  return user;
};

const deleteUser = async (id) => {
  const user = await User.findOne({ where: { id } });

  if (!user) throw new ErrorFile('User does not exist', 404);

  await User.destroy({ where: { id } });
};

  module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  deleteUser,
};