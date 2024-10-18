import { ReactElement } from 'react';
import Link from 'next/link';
import {useAuth} from "./ContextProviders/AuthContexProvider/AuthContext.js"

interface LayoutProps {
    children: ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { isAuthenticated, loading, logout } = useAuth();

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className='App'>
            <nav>
                <Link href="/">Home</Link>
                {isAuthenticated ? (
                    <>
                        <Link href="/main">Chat</Link>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <Link href="/login">Login</Link>
                )}
            </nav>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
