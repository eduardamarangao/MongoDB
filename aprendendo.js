const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/bancoqualquer").then(() => {
    console.log("MongoDB conectado...");
}).catch((erro) => {
    console.log("Erro ao conectar" + erro);
});
