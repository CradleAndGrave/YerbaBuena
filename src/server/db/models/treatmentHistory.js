import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

const TreatmentHistorySchema = new Schema({
  userId: Number,
  action: [Number],
  treatName: String,
  treatDose: String,
  treatNote: String,
  actionTime: String
});

const History = mongoose.model('Treatment', TreatmentHistorySchema);

TreatmentHistorySchema.plugin(passportLocalMongoose);

export default History;
