const Joi = require('joi');

const validateBody = (body) =>
  Joi.object({
    email: Joi.string().email().required().messages({
      'string.email': 'O campo "email" deve ter o formato correto',
      'string.required': 'Some required fields are missing',
      'string.empty': 'Some required fields are missing',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': 'O campo "password" deve ter no mínimo 6 caracteres',
      'string.required': 'Some required fields are missing',
      'string.empty': 'Some required fields are missing',
    }),
  }).validate(body);

module.exports = validateBody;