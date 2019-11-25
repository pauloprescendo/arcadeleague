const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes');

const app = express();

const uri = 'mongodb+srv://dbUser:dbUser@cluster0-epyzo.mongodb.net/arcade?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3333;
app.listen(port);
