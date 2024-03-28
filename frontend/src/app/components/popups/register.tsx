export default function RegisterPopup() {
    return (
        <div className="register-popup">
            <div className="register-popup-header">
                <span className="register-popup-header-title">Kayıt Ol</span>
            </div>
            <div className="register-popup-body">
                <div className="register-popup-input-wrapper">
                    <input className="register-popup-input" placeholder="E-posta" type='text' />
                </div>
                <div className="register-popup-input-wrapper">
                    <input className="register-popup-input" placeholder="Şifre" type='password' />
                </div>
                <div className="register-popup-input-wrapper">
                    <input className="register-popup-input" placeholder="Şifre Tekrar" type='password' />
                </div>
                <div className="register-popup-button-wrapper">
                    <button className="register-popup-button primary-button">Kayıt Ol</button>
                </div>
            </div>
        </div>
    )
}