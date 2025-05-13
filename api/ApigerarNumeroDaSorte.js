export default function handler(req, res) {
  const numero = Math.floor(Math.random() * 1000);
  const numeroFormatado = numero.toString().padStart(3, '0');
  res.status(200).json({ numeroDaSorte: numeroFormatado });
}
