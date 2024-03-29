
import LoginRegisterButtons from './user/authButtons';
import Username from '@/app/components/header/user/profileButton';

export default function Authentication({ user }: { user?: string }) {

    const username = JSON.parse(user || '{}').username;
    return (
        <div className="auth order-4">
            {user ? <Username username={username} /> : <LoginRegisterButtons />}
        </div>
    )
}
