'use client';
import '@/assets/css/popup.layout.css';
import { useState } from "react";

export default function LoginPopup({ show, setShow, callback }: { show: boolean, setShow: (x: boolean) => void, callback: (...data: any) => void }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function handleCallback() {
        setShow(false)
        callback(email, password)
    }

    return (
        <div className={`popup login-popup ${show === false ? 'hidden' : ''}`}>
            <div className='popup-content'>
                <div className="popup-header">
                    <span className="login-popup-header-title">Giriş Yap</span>
                </div>
                <div className="popup-body">
                    <div className="popup-input-wrapper">
                        <input className="popup-input" placeholder="E-posta" type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="popup-input-wrapper">
                        <input className="popup-input" placeholder="Şifre" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="popup-button-wrapper">
                        <button className="popup-button primary-button" onClick={() => handleCallback()}>Giriş Yap</button>
                    </div>
                    <span className='popup-forgot-password text-zinc-600'>Şifremi Unuttum</span>
                    <span className='popup-register text-[#fbb041]'>Kayıt Ol</span>
                </div>
            </div>
        </div>
    )
}