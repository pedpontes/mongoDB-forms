const express = require('express')
const router = express.Router()
const path = require('path')
const controlls = require('../controllers/controlls')

router.get('/:username', controlls.findName );  //procura nome e retorna o doc se achou

 //pagina cadastro

router.get('/', express.static(path.join(__dirname, '../client')))

router.post('/send', express.urlencoded({ extended: true }), controlls.cadastro)    //envia dados do formulario para add em banco de dados

module.exports = router