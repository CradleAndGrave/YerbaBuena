import express from 'express';
import PatientUser from '../db/models/patientUser';

const router = express.Router();

router.post('/register', (req, res) => {
  const newPatientUser = new PatientUser({
    username: req.body.username,
    password: req.body.password
  });

  PatientUser.registerUser(newPatientUser, (err, user) => {
    if (err) res.status(500).json({ err });

    res.status(200).json({ user });
  });
});

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  PatientUser.getUserByUsername(username, (err, user) => {
    if (err) res.status(500).json({ err });

    PatientUser.authenticate(password, user.password, (error, isMatch) => {
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
