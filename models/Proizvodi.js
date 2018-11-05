const mongoose = require('mongoose');
const { Schema } = mongoose;

const Proizvodi = new Schema({
    prNaziv: {type: String},
    prTip: {type: Boolean},
    prKlientID: {type: String}
});

module.exports = mongoose.model('Proizvodi', Proizvodi);