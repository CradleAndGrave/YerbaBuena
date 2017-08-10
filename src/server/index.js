// @flow

import express from 'express';

// Added a body parser to send infomation back to the client 
import bodyParser from 'body-parser';
// Imported mongoose so we could connect it to the server 
import mongoose from 'mongoose';
// Imported passport
// import passportLocalMongoose from 'passport-local-mongoose';

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

// This line connects mongoose to mongodb
mongoose.connect('mongodb://localhost/8000');

// This line ensures us that we can use bodyParser

const app = express();

app.use(bodyParser.json());

app.use(STATIC_PATH, express.static('dist'));
app.use(STATIC_PATH, express.static('public'));

app.get('/', (req, res) => {
  res.send(renderApp(APP_NAME));
});

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
    '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`);
});
