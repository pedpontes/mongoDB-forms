const express = require('express');
const app = express();
const path = require('path')
const PORT = 3000;
const init = require('./connectionDB')
const router = require('./routers/Router');


init(); //inicia a connection com db

app.use(router)







app.listen(PORT, () => {console.log("Server running")})


