import Image from 'next/image';
import logo from '@/assets/img/logo.png';

export default function Logo() {
    return (
        <div className="paratic-logo">
            <Image src={logo} alt='Paratic Piyasalar Logo' />
        </div>
    )
}