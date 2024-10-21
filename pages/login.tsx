import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/components/ContextProviders/AuthContexProvider/AuthContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const {isAuthenticated ,login} = useAuth();

    const handleSubmit : (e:any) => void = async (e) => {
        e.preventDefault();
        login({email, password});
    };

    if(isAuthenticated) router.push('/main');

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
