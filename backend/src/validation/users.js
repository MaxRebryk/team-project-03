import Joi from 'joi';

export const updateUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
  }),
  email: Joi.string().email(),
  gender: Joi.string().valid('woman', 'man'),
  photo: Joi.string(),
});
