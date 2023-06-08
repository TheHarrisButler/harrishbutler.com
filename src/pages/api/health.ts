import { NextApiRequest, NextApiResponse } from 'next';

function health(_req: NextApiRequest, res: NextApiResponse): void {
  res.status(200).send('I am ok');
}

export default health;
