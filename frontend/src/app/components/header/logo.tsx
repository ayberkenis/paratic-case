import Image from 'next/image';
import logo from '@/assets/img/logo.png';

export default function Logo() {
    return (
        <div className="paratic-logo order-1 mr-4 lg:mr-0 ">
            <Image src={logo} alt='Paratic Piyasalar Logo' priority height={0} width={0} style={{
                width: 'auto',
                height: '32px'
            }} />
        </div>
    )
}