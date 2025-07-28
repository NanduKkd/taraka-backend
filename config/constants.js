require('dotenv').config();

exports.setup = {
  PORT: process.env.PORT,
}

exports.PROVIDER = {
  GOOGLEAI: 'GOOGLEAI',
  ANTHROPIC: 'ANTHROPIC',
  OPENAI: 'OPENAI',
};
