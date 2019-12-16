require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const passport = require('passport');

const routes = require('./routes');

const app = express();

const uri = 'mongodb+srv://dbUser:dbUser@cluster0-epyzo.mongodb.net/arcade?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use(passport.initialize());
require('./configs/auth')(passport);

app.use(routes);

const port = process.env.PORT || 3333;
const host = '0.0.0.0';

app.listen(port, host);
