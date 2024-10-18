import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Set-Cookie', 'token=; Max-Age=0; Path=/;');
    return res.status(200).json({ message: 'Logout successful' });
}