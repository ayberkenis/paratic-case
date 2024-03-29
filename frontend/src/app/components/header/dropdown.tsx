interface DropdownProps {
    callback: () => void;
}

export default function Dropdown({ callback }: DropdownProps) {

    return (
        <div className="auth-dropdown" onClick={() => callback()}>
            <div className="dropdown-item">
                <span >Çıkış yap</span>
            </div>
        </div>
    )
}