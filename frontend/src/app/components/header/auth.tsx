
import LoginRegisterButtons from './user/authButtons';
import Username from '@/app/components/header/user/profileButton';

export default async function Authentication({ user }: { user?: string }) {
    console.log('evet user', user)
    const username = JSON.parse(user || '{}').username;
    return (
        <div className="auth order-4">
            {user ? <Username username={username} /> : <LoginRegisterButtons />}
        </div>
    )
}
