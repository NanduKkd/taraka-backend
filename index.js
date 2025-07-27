const express = require('express');
const { setup } = require('./config/constants');
const apiRoutes = require('./routes/api');

const app = express();

app.use('/api', apiRoutes);

app.listen(setup.PORT, () => {
  console.log('app listening on port 3000');
});
