import { NextApiRequest, NextApiResponse } from 'next';

const users = [
    {
        email: 'email@email.com',
        password: 'password'
    },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        res.setHeader('Set-Cookie', 'token=your_jwt_token; HttpOnly; Path=/;');
        return res.status(200).json({ message: 'Login successful', user });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
}
