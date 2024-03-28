"use client"

import Image from "next/image"
import attachmentIcon from "@/assets/img/attachmentIcon.svg"
import { useState } from "react"
import { ErrorPopup } from "@/app/commons/errors"

async function addComment(exchange_code: string, content: string) {
    const url = new URL('http://localhost:8000/api/comments/add')

    const data = {
        "exchange_code": exchange_code,
        "content": content,
        "author_id": "9"
    }
    const response = await fetch(url.toString(), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    })

    if (!response.ok) {
        console.error('Error response:', await response.text());
        return { status: 'error' }
    }

    return response.json();
}

export default function AddComment({ exchange_code }: { exchange_code: string }) {
    const [content, setContent] = useState('')
    const [error, setError] = useState('')

    async function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            console.log(content)
            const response = await addComment(exchange_code, content)
            console.log(response)
            if (response.status === 'success') {
                setContent('')
            } else {
                setError('Yorum yapabilmek için giriş yapmanız gerekmektedir.')
            }
        }
    }


    return (
        <>
            <div className="add-comment">
                <div className='add-comment-input-wrapper'>
                    <input className="add-comment-input" placeholder="Yorum Yapın" type='text' value={content} onChange={(e) => setContent(e.target.value)} onKeyDown={handleEnter} />
                </div>
                <div className='add-attachment flex justify-center items-center'>
                    <Image src={attachmentIcon} alt="attachment" width={24} height={24} />
                </div>
            </div>
            {
                error ? <ErrorPopup message={error} callback={() => setError('')} /> : ''
            }
        </>
    )
}