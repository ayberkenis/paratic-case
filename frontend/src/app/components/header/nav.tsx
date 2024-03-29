import Image from 'next/image'
import logo from '@/assets/img/logo.png'
import Authentication from './auth'

export function Navbar() {
    return (
        <nav className="nav hidden lg:flex lg:order-3">
            <span className="navbar-item">Döviz Kurları</span>
            <span className="navbar-item">Altın Fiyatları</span>
            <span className="navbar-item">Borsa</span>
            <span className="navbar-item">Hisse Senetleri</span>
            <span className="navbar-item">Parite</span>
            <span className="navbar-item">Emtia</span>
            <span className="navbar-item">Kripto</span>
            <span className="navbar-item">Menü</span>
        </nav>
    )
}

export function MobileNavbar({ closeMenu }: { closeMenu: (bool: boolean) => void }) {
    return (
        <nav className="nav-mobile">
            <span onClick={() => closeMenu(false)} className="mt-8 hamburger-menu-icon lg:hidden">X</span>
            <Image src={logo} alt='Paratic Piyasalar Logo' priority height={32} width={148} className='mt-8 mb-24' />
            <span className="navbar-mobile-item">Döviz Kurları</span>
            <span className="navbar-mobile-item">Altın Fiyatları</span>
            <span className="navbar-mobile-item">Borsa</span>
            <span className="navbar-mobile-item">Hisse Senetleri</span>
            <span className="navbar-mobile-item">Parite</span>
            <span className="navbar-mobile-item">Emtia</span>
            <span className="navbar-mobile-item">Kripto</span>
            <span className="navbar-mobile-item">Menü</span>

            <div className='footer absolute bottom-0 left-1/2 w-full'>
                <Authentication />
            </div>
        </nav>
    )
}