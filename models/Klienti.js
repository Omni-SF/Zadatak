const mongoose = require('mongoose');
const { Schema } = mongoose;

const Klienti = new Schema({
    klNaziv: {type: String},
    klAdresa: {type: String},
    klVlasnikID: {type: String}
});

module.exports = mongoose.model('Klienti', Klienti);