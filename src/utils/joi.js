const Joi = require('joi');

const requiredField = 'Some required fields are missing';

const validateUserCreate = (body) =>
  Joi.object({
    email: Joi.string().email().required().messages({
      'string.email': '"email" must be a valid email',
      'string.required': requiredField,
      'string.empty': requiredField,
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': '"password" length must be at least 6 characters long',
      'string.required': requiredField,
      'string.empty': requiredField,
    }),
    displayName: Joi.string().min(8).required().messages({
      'string.required': requiredField,
      'string.empty': requiredField,
      'string.min': '"displayName" length must be at least 8 characters long',
    }),
    image: Joi.string(),
  }).validate(body);

  const validateLoginEnter = (body) =>
  Joi.object({
    email: Joi.string().email().required().messages({
      'string.email': '"email" must be a valid email',
      'string.required': requiredField,
      'string.empty': requiredField,
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': '"password" length must be at least 6 characters long',
      'string.required': requiredField,
      'string.empty': requiredField,
    }),
  }).validate(body);

module.exports = {
  validateUserCreate,
  validateLoginEnter,
};