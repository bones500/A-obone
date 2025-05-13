const functions = require("firebase-functions");

exports.gerarNumeroDaSorte = functions.https.onRequest((req, res) => {
  const numero = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
  res.send({ numeroDaSorte: numero });
});
