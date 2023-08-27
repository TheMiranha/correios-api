import { consultarCep, rastrearEncomendas } from 'correios-brasil';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  try {
    const ceps = req.body.ceps
    const results = []
    for (let i = 0; i < ceps.length; i++) {
        let result = await consultarCep(ceps[i])
        results.push(result)
    }
    res.status(200).json({ceps: results})
  } catch (error) {
    console.log(error)
    res.status(400).json({message: 'Internal error'})
  }
}
