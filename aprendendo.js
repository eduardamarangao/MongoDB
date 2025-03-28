const mongoose = require("mongoose");



mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/bancoqualquer", {
    useMongoClient: true,
  })
  .then(() => {
    console.log("MongoDB conectado...");
  })
  .catch((err) => {
    console.log("Erro ao conectar" + err);
  });
