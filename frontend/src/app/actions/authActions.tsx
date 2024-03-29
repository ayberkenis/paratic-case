"use server";


import { cookies } from 'next/headers';

export async function loginUser(email: string, password: string) {
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
            const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30) // 30 days from now
            cookies().set('token', data.token, { maxAge: 30 * 24 * 60 * 60, httpOnly: true })
            cookies().set('user', JSON.stringify(data.user), { maxAge: 30 * 24 * 60 * 60, httpOnly: true })
        } else {
            console.log('Login failed')
        }


    } catch (error) {
        console.log(error)
    }

}

export async function registerUser(username: string, email: string, password: string) {
    await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
}

export async function logoutUser() {
    const token = cookies().get('token')?.value
    if (!token) return

    await fetch('http://localhost:8000/api/auth/logout', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    cookies().set('token', '', { maxAge: 0 })
    cookies().set('user', '', { maxAge: 0 })
}
