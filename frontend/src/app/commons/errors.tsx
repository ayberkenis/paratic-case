'use client';
import '@/assets/css/popup.layout.css';
import { useState } from "react";


export function ErrorPopup({ message, callback }: { message: string, callback?: () => void }) {
    const [show, setShow] = useState(false)

    function closePopup() {
        setShow(false)
        if (callback) {
            callback()
        }
    }

    return (
        <div className="popup error-popup">
            <div className='popup-content'>
                <div className="error-popup-header">
                    <span className="error-popup-header-title">Hata</span>
                </div>
                <div className="popup-body">
                    <div className="error-popup-message">
                        {message}
                    </div>
                    <div className="error-popup-button-wrapper">
                        <button className="popup-button" onClick={() => closePopup()}>Tamam</button>
                    </div>
                </div>
            </div>
        </div>
    )
}