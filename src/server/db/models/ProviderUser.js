import Promise from 'bluebird';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const bcryptHash = Promise.promisify(bcrypt.hash);
const bcryptCompare = Promise.promisify(bcrypt.compare);

const ProviderSchema = mongoose.Schema({
  username: String,
  password: String,
  specialty: String
});

const ProviderUser = mongoose.model('ProviderUser', ProviderSchema)

ProviderUser.authenticate = (password, hash, callback) => {
  bcryptCompare(password, hash)
    .then(isMatch => { callback(null, isMatch); })
    .catch(error => { throw error })
}

ProviderUser.getUserByUsername = (username, callback) => {
  ProviderUser.findOne({ username: username }, callback);
}

ProviderUser.registerUser = (user, callback) => {
  bcryptHash(user.password, 12)
    .then(hash => {
      user.password = hash;
      user.save(callback);
    });
}

export default ProviderUser;
