const mongoose = require('mongoose');
const { Schema } = mongoose;

const Vlasnici = new Schema({
    vlIme: {type: String},
    vlPrezime: {type: String}
});

module.exports = mongoose.model('Vlasnici', Vlasnici);