const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./routes/index')

const app = express();
app.use(helmet());
app.use(cors());

app.use('/', routes);

// start the server
app.listen(8000, () => {
    console.log('listening on port 8000');
  });