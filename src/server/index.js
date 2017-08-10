// @flow

// import express from 'express';

// import { APP_NAME, STATIC_PATH, WEB_PORT } from '../shared/config';
// import { isProd } from '../shared/util';
// import renderApp from './render-app';

// const app = express();

// app.listen(WEB_PORT, () => {
//   // eslint-disable-next-line no-console
//   console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
//     '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`);
// });


import express from 'express';
import Promise from 'bluebird';
import mongoose from 'mongoose';
import passport from 'passport';
import bodyParser from 'body-parser';
import providerRoutes from './routes/providerRoutes';
import { APP_NAME, STATIC_PATH, WEB_PORT } from '../shared/config';
import { isProd } from '../shared/util';
import renderApp from './render-app';
import session from 'express-session';


// Mongoose
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/yerba_buena');

mongoose.connection.on('error', error => {
  console.log(`Error connecting in mongoose: ${error}`)
})

mongoose.connection.on('connected', () => {
  console.log('Successfully connected to mongoose')
})

const app = express();

app.use(session({
  secret: 'mozmanisasecret',
  resave: true,
  saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(STATIC_PATH, express.static('dist'));
app.use(STATIC_PATH, express.static('public'));

app.get('/', (req, res) => {
  res.send(renderApp(APP_NAME));
});

//Auth Routes
app.use('/providerAuth', providerRoutes);


//example using isAuthenticated middleware :)
app.get('/test', isAuthenticated, (req, res) => {
  res.status(200).json('this is an authenticated route!');
});

function isAuthenticated(req, res, next) {
  if (req.session.user){
    next();
  } else {
    res.status(401).json({err: 'Access denied'});
  }
}


app.listen(WEB_PORT, () => {
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
           '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`);
});
