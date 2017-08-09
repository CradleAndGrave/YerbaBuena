var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");


var ProviderSchema = new mongoose.Schema({
    username: String,
    password: String,
    specialty: String
});

ProviderSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model("Provider", UserSchema);
