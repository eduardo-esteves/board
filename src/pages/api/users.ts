import { NextApiRequest, NextApiResponse } from 'next'

const users = (req: NextApiRequest, res: NextApiResponse) => {
  const users = [
    {key: 1, nome: 'Matheus'}
  ]

  return res.json(users)
}

export default users
