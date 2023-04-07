const { User } = require('../models');
const { createToken } = require('../utils/auth');
const ErrorFile = require('../utils/ErrorFile');

const createUser = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });
  if (!user) throw new ErrorFile('Invalid fields', 400);
  const token = createToken({ id: user.id });
  return { token };
};

module.exports = {
  createUser,
};