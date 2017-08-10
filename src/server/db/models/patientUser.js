import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  username: String,
  password: String,
  dob: String,
  sex: String
});
const Patient = mongoose.model('Patient', PatientSchema);

PatientSchema.plugin(passportLocalMongoose);

export default Patient;
