require('dotenv').config();

exports.setup = {
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET || 'supersecretjwtkey',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '48h',
}

exports.PROVIDER = {
  GOOGLEAI: 'GOOGLEAI',
  ANTHROPIC: 'ANTHROPIC',
  OPENAI: 'OPENAI',
};
