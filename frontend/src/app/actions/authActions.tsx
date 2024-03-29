"use server";


import { cookies } from 'next/headers';

export async function loginNewUser(response: { token: string, user: string }) {


    cookies().set('token', response.token, { maxAge: 30 * 24 * 60 * 60, httpOnly: true })
    cookies().set('user', JSON.stringify(response.user), { maxAge: 30 * 24 * 60 * 60, httpOnly: true })
    return { token: response.token, user: response.user }
}

export async function loginUser(email: string, password: string) {
    try {
        const response = await fetch('http://api.ayberkenis.com.tr/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            cookies().set('token', data.token, { maxAge: 30 * 24 * 60 * 60, httpOnly: true })
            cookies().set('user', JSON.stringify(data.user), { maxAge: 30 * 24 * 60 * 60, httpOnly: true })

            return { token: data.token, user: data.user }
        } else {
            console.log('Login failed')
        }


    } catch (error) {
        console.log(error)
    }

}

export async function registerUser(username: string, email: string, password: string) {
    try {
        const response = await fetch('http://api.ayberkenis.com.tr/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return { token: data.token, user: data.user }
        } else if (response.status === 409) {
            return 'User already exists'
        }

    } catch (error) {
        console.log(error)
        return 'An error occurred. Please try again later.'
    }

}

export async function logoutUser() {
    const token = cookies().get('token')?.value
    if (!token) return

    await fetch('http://api.ayberkenis.com.tr/api/auth/logout', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    cookies().set('token', '', { maxAge: 0 })
    cookies().set('user', '', { maxAge: 0 })
}
