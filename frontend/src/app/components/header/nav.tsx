import Image from 'next/image'
import logo from '@/assets/img/logo.png'
import Authentication from './auth'

/*

I have decided to have two separate components for the Navbar. One for the desktop view and one for the mobile view.
The Navbar component will be rendered only on the desktop view and the MobileNavbar component will be rendered only on the mobile view.

My reasoning behind this is that the Navbar component will have a different layout than the MobileNavbar component. We will have more control over the
navbar items. We can add more items, change the layout, etc. The MobileNavbar component will be more compact and will have a different layout that is
more suitable for mobile devices.

*/

export function Navbar() {
    return (
        <nav className="nav sm:hidden md:hidden lg:flex lg:order-3">
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

