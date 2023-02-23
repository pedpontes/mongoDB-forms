const Person = require('../models/Person')
const express = require('express')
const app = express()

//enviando cadastro caso ache

const findName = async (req,res) => {
    let username = req.params.username
    try{
        let doc = await Person.findOne({ username })
    }
    catch (err) { res.send(`Erro ao encontrar ${username}`)}
}

// fazendo cadastro

const cadastro = async (req,res) => {
    let query = req.body
    let find = await Person.findOne({email: query.email, username: query.username})
    if(find){
        res.json({valid: 0})
    }
    else{ 
        let person = new Person({
            name: query.nome,
            username: query.username,
            email: query.email,
            pass: query.pass,
            contact: query.contact
        })
        person.save()
        res.status(200).json({valid: 1})
    }
}

module.exports = { findName, cadastro }