const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const schema = new Schema({
    nom: {type: String},
    prenom: {type: String},
    userName : {type: String},
});

module.exports = mongoose.model('Users', schema);
