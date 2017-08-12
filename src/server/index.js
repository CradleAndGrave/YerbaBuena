// @flow

import express from 'express';
import session from 'express-session';
import Promise from 'bluebird';
import mongoose from 'mongoose';
import passport from 'passport';
import bodyParser from 'body-parser';
import { APP_NAME, STATIC_PATH, WEB_PORT } from '../shared/config';
import { isProd } from '../shared/util';
import renderApp from './render-app';
// This next block are the connections to the schemas that were made and
// will be used once we figure out the routes.
// import ProviderModel from './models/providerUser.js';
// import PatientModel from './models/patientUser.js';
// import TreatmentModel from './models/treatmentView.js';
// import HistoryModel from './models/treatmentHistory.js';

// CRUD METHODS, create() || save () ---> Create
// find() ---> Read
// update() ----> Update
// remove() ----> Delete
// Model specific routes
import providerRoutes from './routes/providerRoutes';

// This line connects mongoose to mongodb
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/yerba_buena');

mongoose.connection.on('error', (error) => {
  // eslint-disable-next-line 
  console.log(`Error connecting in mongoose: ${error}`);
});

mongoose.connection.on('connected', () => {
  // eslint-disable-next-line 
  console.log('Successfully connected to mongoose');
});

const app = express();

const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({ err: 'Access denied' });
  }
};

app.use(session({
  secret: 'mozmanisasecret',
  resave: true,
  saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

app.use(STATIC_PATH, express.static('dist'));
app.use(STATIC_PATH, express.static('public'));

app.get('/', (req, res) => {
  res.send(renderApp(APP_NAME));
});

// Auth Routes
app.use('/providerAuth', providerRoutes);

// example using isAuthenticated middleware :)
app.get('/test', isAuthenticated, (req, res) => {
  res.status(200).json('this is an authenticated route!');
});

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line 
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' : '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`);
});
