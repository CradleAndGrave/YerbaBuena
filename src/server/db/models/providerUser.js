import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
  username: String,
  password: String,
  specialty: String
});
const Provider = mongoose.model('Provider', ProviderSchema);

ProviderSchema.plugin(passportLocalMongoose);

export default Provider;
