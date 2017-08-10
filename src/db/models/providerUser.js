import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const ProviderSchema = new mongoose.Schema({
  username: String,
  password: String,
  specialty: String
});

ProviderSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('Provider', ProviderSchema);
