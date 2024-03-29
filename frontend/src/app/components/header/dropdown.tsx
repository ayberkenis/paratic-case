export default function Dropdown({ callback }: { callback: () => void }) {
    return (
        <div className="auth-dropdown" onClick={callback}>
            <div className="dropdown-item">
                <span>Çıkış yap</span>
            </div>
        </div>
    )
}