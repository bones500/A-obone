export default function handler(req, res) {
  const numero = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  res.status(200).json({ numeroDaSorte: numero });
}
