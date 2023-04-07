const jwt = require('jsonwebtoken');
const ErrorFile = require('./ErrorFile');

const secretKey = process.env.JWT_SECRET;

const configJWT = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (payload) => {
  const token = jwt.sign(payload, secretKey, configJWT);
  return token;
};

const validateToken = (token) => {
  if (!token) throw new ErrorFile('Token não encontrado', 401);
  const isValid = jwt.verify(token, secretKey);
  return isValid;
};

const decodeToken = (token) => {
  const decoded = jwt.decode(token);
  return decoded;
};

module.exports = {
  createToken,  
  validateToken,
  decodeToken,
};