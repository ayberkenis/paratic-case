export default function LoginPopup() {
    return (
        <div className="login-popup">
            <div className="login-popup-header">
                <span className="login-popup-header-title">Giriş Yap</span>
            </div>
            <div className="login-popup-body">
                <div className="login-popup-input-wrapper">
                    <input className="login-popup-input" placeholder="E-posta" type='text' />
                </div>
                <div className="login-popup-input-wrapper">
                    <input className="login-popup-input" placeholder="Şifre" type='password' />
                </div>
                <div className="login-popup-button-wrapper">
                    <button className="login-popup-button primary-button">Giriş Yap</button>
                </div>
            </div>
        </div>
    )
}