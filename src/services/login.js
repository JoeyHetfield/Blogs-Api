const { User } = require('../models');
const { createToken } = require('../utils/auth');
const ErrorFile = require('../utils/ErrorFile');

const findOne = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) throw new ErrorFile('Invalid fields', 400);
  const token = createToken({ id: user.id });
  return { token };
};

module.exports = {
  findOne, 
};