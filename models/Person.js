const mongoose = require('mongoose')

    //schema do documento no banco de dados (todos os dados são obrigatorios)

const personSchema = new mongoose.Schema({
    username: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    pass: {type: String, required:true},
    contact: {type: Number, required: true}
});

module.exports = mongoose.model('Person', personSchema)
