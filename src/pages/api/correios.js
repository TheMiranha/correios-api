import { rastrearEncomendas } from 'correios-brasil';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  try {
    const response = await rastrearEncomendas(req.body.packages);
    res.status(200).json(response)
  } catch (error) {
    console.log(error)
    res.status(400).json({message: 'Internal error'})
  }
}
