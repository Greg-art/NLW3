
//importando dependencias
const express = require('express');
const path = require('path');
const pages = require('./pages.js');



//iniciando o express
const server = express()

server

    //utilizar body da requisição
    .use(express.urlencoded({ extended: true }))
    // utilizando arquivos estaticos
    .use(express.static('public'))
    //criando uma rota

    .set('views', path.join(__dirname, "views"))
    .set('view engine','hbs')

    //rotas da aplicação
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get("/orphanages", pages.orphanages)
    .get("/create-orphanage", pages.createOrphanage)
    .post("/save-orphanage", pages.saveOrphanage)


//ligar o servidor
server.listen(5500)