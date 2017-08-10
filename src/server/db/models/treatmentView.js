import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

const TreatmentSchema = new Schema({
  treatId: Number,
  treatName: String,
  treatDosage: [String]
});
const Treatment = mongoose.model('Treatment', TreatmentSchema);

TreatmentSchema.plugin(passportLocalMongoose);

export default Treatment;
