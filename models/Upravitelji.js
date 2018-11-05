const mongoose = require('mongoose');
const { Schema } = mongoose;

const Upravitelji = new Schema({
    upIme: {type: String},
    upPrezime: {type: String},
    upMail: {type: String},
    upZaporka: {type: String}
});

module.exports = mongoose.model('Upravitelji', Upravitelji);