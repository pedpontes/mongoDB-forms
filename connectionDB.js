const mongoose = require('mongoose')

//se conecta ao bando de dados

function init(){
    mongoose.set('strictQuery', false);
    mongoose.connect('mongodb://localhost:27017')
        .then(() => {
            console.log('Banco de dados carregado!')})
        .catch( () => console.log('Erro ao carregar o banco de dados!'))
}

module.exports = init;
