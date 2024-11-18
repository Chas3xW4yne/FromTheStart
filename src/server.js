const express = require("express");
const app = express();
const port = 3000;


app.get('/', (req, res) => {

    res.sendFile(___dirname + "/public/index.html");
});

app.listen( port, ()  => {

    console.log("Aplicação sendo executada na porta" + port)
});
