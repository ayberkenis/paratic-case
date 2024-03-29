import '@/assets/css/popup.layout.css';
import { useState } from "react";
import { loginNewUser } from "@/app/actions/authActions";

export default function RegisterPopup({ show, setShow, callback }: { show: boolean, setShow: (x: boolean) => void, callback: (...data: any) => any }) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [error, setError] = useState('')


    async function handleCallback() {

        callback(username, email, password).then((res: any) =>
            res && res.token ? loginNewUser(res).then((r) => setShow(false)) : setError(res)
        )


    }

    return (
        <div className={`popup register-popup ${show === false ? 'hidden' : ''}`}>
            <div className='popup-content'>
                <div className="popup-header">
                    <span className="popup-header-title">Kayıt Ol</span>
                </div>
                <div className="popup-body">
                    <div className="popup-input-wrapper">
                        <input className="popup-input" placeholder="Kullanıcı Adı" type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="popup-input-wrapper">
                        <input className="popup-input" placeholder="E-posta" type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="popup-input-wrapper">
                        <input className="popup-input" placeholder="Şifre" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="popup-input-wrapper">
                        <input className="popup-input" placeholder="Şifre Tekrar" type='password' value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                    </div>
                    {
                        repeatPassword.length > 1 && password !== repeatPassword && <span className='error-message'>Şifreler uyuşmuyor</span>
                    }
                    {
                        error && <span className='error cursor-default text-red-500'>{error}</span>
                    }

                    <div className="popup-button-wrapper">
                        <button className="popup-button primary-button" onClick={() => handleCallback()}>Kayıt Ol</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
