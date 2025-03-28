const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/bancoqualquer").then(() => {
    console.log("Conectado com sucesso");
}).catch((erro) => {
    console.log("Erro ao conectar" + erro);
});
