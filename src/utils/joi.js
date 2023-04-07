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

  const validateCategoryCreate = (body) =>
  Joi.object({
    name: Joi.string().required().messages({
      'string.required': '"name" is required',
      'string.empty': '"name" is required',
    }),
  }).validate(body);

  const validateBlogPostCreate = (body) =>
  Joi.object({
    title: Joi.string().required().messages({
      'string.required': requiredField,
      'string.empty': requiredField,
    }),
    content: Joi.string().required().messages({
      'string.required': requiredField,
      'string.empty': requiredField,
    }),
    categoryIds: Joi.array().items(Joi.number()).required().messages({
      'array.required': requiredField,
      'array.empty': requiredField,
    }),
  }).validate(body);

  const validateUpdatePost = (body) =>
  Joi.object({
    title: Joi.string().required().messages({
      'string.required': requiredField,
      'string.empty': requiredField,
    }),
    content: Joi.string().required().messages({
      'string.required': requiredField,
      'string.empty': requiredField,
    }),
  }).validate(body);

module.exports = {
  validateUserCreate,
  validateLoginEnter,
  validateCategoryCreate,
  validateBlogPostCreate,
  validateUpdatePost,
};