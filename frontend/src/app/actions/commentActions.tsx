"use server";


import { cookies } from 'next/headers';


export async function addComment(exchange_code: string, content: string) {
    const token = cookies().get('token')?.value
    try {
        const response = await fetch('http://api.ayberkenis.com.tr/api/comments/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({ exchange_code, content })
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return { status: 'success', data }
        } else {
            return { status: 'error' }
        }
    } catch (error) {
        console.log(error)
        return { status: 'error' }
    }
}

export async function fetchAllComments(exchange_code: string) {
    const url = new URL('http://api.ayberkenis.com.tr/api/comments/all')
    url.searchParams.append('exchange_code', exchange_code)

    const response = await fetch(url.toString(), {
        method: 'GET',
    })

    if (!response.ok) {
        console.error('Error response:', await response.text());
        throw new Error('Failed to fetch data');
    }

    return response.json();
}

export async function fetchFeaturedComments(exchange_code: string) {
    const url = new URL('http://api.ayberkenis.com.tr/api/comments/featured/all')
    url.searchParams.append('exchange_code', exchange_code)

    const response = await fetch(url.toString(), {
        method: 'GET',
    })

    if (!response.ok) {
        console.error('Error response:', await response.text());
        throw new Error('Failed to fetch data');
    }

    return response.json();
}
