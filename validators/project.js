
const Joi = require('joi');

const createProjectSchema = Joi.object({
  machineId: Joi.string().required(),
  os: Joi.string().required(),
  path: Joi.string().required(),
  name: Joi.string().optional(),
  description: Joi.string().optional(),
});

module.exports = {
  createProjectSchema,
};
