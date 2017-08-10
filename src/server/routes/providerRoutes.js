import express from 'express';
import mongoose from 'mongoose';
import ProviderUser from '../db/models/ProviderUser';

const router = express.Router();

router.post('/register', (req, res) => {
  let newUser = new ProviderUser({
    username: req.body.username,
    password: req.body.password
  });

  ProviderUser.registerUser(newUser, (err, user) => {
    if (err) return res.status(500).json({ err: err });

    res.status(200).json({ user: user });
  });
})

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  ProviderUser.getUserByUsername(username, (err, user) => {
    if (err) return res.status(500).json({ err: err });

    ProviderUser.authenticate(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ err: err });

      if (isMatch) {
        req.session.user = user;
        res.status(200).json({ user: user });
      } else {
        res.status(200).json({ err: 'Incorrect password' });
      }
    });
  });
});





export default router;
