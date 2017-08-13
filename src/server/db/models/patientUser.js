import Promise from 'bluebird';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const bcryptHash = Promise.promisify(bcrypt.hash);
const bcryptCompare = Promise.promisify(bcrypt.compare);

const patientSchema = mongoose.Schema({
  username: String,
  password: String,
  dob: String,
  sex: String
});

const patientUser = mongoose.model('patientUser', patientSchema);

patientUser.authenticate = (password, hash, callback) => {
  bcryptCompare(password, hash)
    .then((isMatch) => { callback(null, isMatch); })
    .catch((error) => { throw error; });
};

patientUser.getPatientByPatientname = (username, callback) => {
  patientUser.findOne({ username }, callback);
};

/* eslint-disable  no-param-reassign */
patientUser.registerUser = (user, callback) => {
  bcryptHash(user.password, 12)
    .then((hash) => {
      user.password = hash;
      user.save(callback);
    });
};
/* eslint-enable  no-param-reassign */

export default patientUser;
