const { loginService } = require('../services');

const findOne = async (req, res) => {
  const { email, password } = req.body;
  const findUser = await loginService.findOne(email, password);
  res.status(200).json(findUser);
};

module.exports = {
  findOne,
};