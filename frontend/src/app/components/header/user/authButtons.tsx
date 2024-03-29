"use client";

import { useState } from "react"
import LoginPopup from "@/app/components/popups/login"
import RegisterPopup from "@/app/components/popups/register"
import { loginUser, registerUser } from "@/app/actions/authActions"


export default function LoginRegisterButtons() {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    function handleESCkey(e: KeyboardEvent) {
        if (e.key === 'Escape') {
            setShowLogin(false)
            setShowRegister(false)
        }
    }


    return (
        <div className="auth order-4">
            <span className="auth-button login" onClick={() => setShowLogin(true)}>Giriş Yap</span>
            <span className="auth-button register" onClick={() => setShowRegister(true)}>Kayıt Ol</span>
            <div className="popups">
                {showLogin && <LoginPopup show={showLogin} setShow={(x: boolean) => setShowLogin(x)} callback={(email: string, password: string) => loginUser(email, password)} />}
                {showRegister && <RegisterPopup show={showRegister} setShow={(x: boolean) => setShowRegister(x)} callback={(username: string, email: string, password: string) => registerUser(username, email, password)} />}
            </div>
        </div>
    )

}
