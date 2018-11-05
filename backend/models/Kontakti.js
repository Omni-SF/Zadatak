const mongoose = require('mongoose');
const { Schema } = mongoose;

const Kontakti = new Schema({
    knTip: {type: String},
    knInformacija: {type: String},
    knKlientID: {type: String}
});

module.exports = mongoose.model('Kontakti', Kontakti);