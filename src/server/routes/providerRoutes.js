import express from 'express';
import ProviderUser from '../db/models/providerUser';

const router = express.Router();

router.post('/register', (req, res) => {
  const newUser = new ProviderUser({
    username: req.body.username,
    password: req.body.password
  });

  ProviderUser.registerUser(newUser, (err, user) => {
    if (err) res.status(500).json({ err });

    res.status(200).json({ user });
  });
});

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  ProviderUser.getUserByUsername(username, (err, user) => {
    if (err) res.status(500).json({ err });

    ProviderUser.authenticate(password, user.password, (error, isMatch) => {
      if (error) res.status(500).json({ err: error });

      if (isMatch) {
        req.session.user = user;
        res.status(200).json({ user });
      } else {
        res.status(400).json({ err: 'Incorrect password' });
      }
    });
  });
});

export default router;
