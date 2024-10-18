import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { token } = req.cookies; 

    if (token) {
        return res.status(200).json({ isAuthenticated: true });
    } else {
        return res.status(401).json({ isAuthenticated: false });
    }
}
