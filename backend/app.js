const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
app.use(helmet());

app.get('/', function (req, res) {
    res.send('Hello World!');
  });

// start the server
app.listen(8000, () => {
    console.log('listening on port 8000');
  });