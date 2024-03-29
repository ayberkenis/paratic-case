'use client';
import { useState } from 'react';
import LoginPopup from '../popups/login';
import RegisterPopup from '../popups/register';
import { getCookie, setCookie } from 'cookies-next';
import type { User } from '@/types/user';
import Dropdown from './dropdown';

async function LoginUser(email: string, password: string) {
    try {
        const response = await fetch('http://localhost:8000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30) // 30 days from now
            setCookie('token', data.token, { expires, httpOnly: true })
            setCookie('user', data.user, { expires, httpOnly: true })
        } else {
            console.log('Login failed')
        }


    } catch (error) {
        console.log(error)
    }

}

async function RegisterUser(username: string, email: string, password: string) {
    await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
}

async function LogoutUser() {
    const token = getCookie('token')
    if (!token) return

    await fetch('http://localhost:8000/api/auth/logout', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

}

function LoggedInUser(user: User) {
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <span className='auth-wrapper' onMouseOver={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
            <div className="auth order-4 relative">
                <span className="auth-button logged-in">{user.username}</span>
                {
                    showDropdown && <Dropdown />
                }

            </div>
        </span>
    )
}

export default function Authentication() {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    const token = getCookie('token')
    const _user = getCookie('user')

    const user = _user ? JSON.parse(_user) : null

    if (token && user) {
        return <LoggedInUser {...user} />
    }

    return (
        <div className="auth order-4">
            <span className="auth-button login" onClick={() => setShowLogin(true)}>Giriş Yap</span>
            <span className="auth-button register" onClick={() => setShowRegister(true)}>Kayıt Ol</span>

            <div className="popups">
                {showLogin && <LoginPopup show={showLogin} setShow={(x: boolean) => setShowLogin(x)} callback={(email, password) => LoginUser(email, password)} />}
                {showRegister && <RegisterPopup show={showRegister} setShow={(x: boolean) => setShowRegister(x)} callback={(username, email, password) => RegisterUser(username, email, password)} />}
            </div>
        </div>
    )
}