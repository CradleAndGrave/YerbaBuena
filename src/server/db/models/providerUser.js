import Promise from 'bluebird';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const bcryptHash = Promise.promisify(bcrypt.hash);
const bcryptCompare = Promise.promisify(bcrypt.compare);

const providerSchema = mongoose.Schema({
  username: String,
  password: String,
  specialty: String
});

const providerUser = mongoose.model('providerUser', providerSchema);

providerUser.authenticate = (password, hash, callback) => {
  bcryptCompare(password, hash)
    .then((isMatch) => { callback(null, isMatch); })
    .catch((error) => { throw error; });
};

providerUser.getUserByUsername = (username, callback) => {
  providerUser.findOne({ username }, callback);
};

/* eslint-disable  no-param-reassign */
providerUser.registerUser = (user, callback) => {
  bcryptHash(user.password, 12)
    .then((hash) => {
      user.password = hash;
      user.save(callback);
    });
};
/* eslint-enable  no-param-reassign */

export default providerUser;
