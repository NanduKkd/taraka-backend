require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { setup } = require('./config/constants');
const apiRoutes = require('./routes/api');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err));

// Mongoose connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open to ' + process.env.MONGO_URI);
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

app.use('/api', apiRoutes);

// Error handling middleware
app.use(errorHandler);

app.listen(setup.PORT, () => {
  console.log(`App listening on port ${setup.PORT}`);
});
