'use client';
import Authentication from "../auth";
import { useState } from "react";
import Image from 'next/image'
import logo from '@/assets/img/logo.png'

export default function MobileMenu({ user }: { user: string }) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            <span onClick={() => setShowMobileMenu(true)} className="hamburger-menu-icon">☰</span>
            <div className={`mobile ${showMobileMenu === false ? 'hidden' : 'flex'}`}>

                <div className={`flex items-center header w-full relative mobile-menu ${showMobileMenu === false ? 'hidden' : ''}`}>
                    <nav className={`nav-mobile ${showMobileMenu === false ? 'hidden' : 'flex'}`}>
                        <span onClick={() => setShowMobileMenu(false)} className="mt-8 hamburger-menu-icon md:hidden lg:hidden">X</span>
                        <Image src={logo} alt='Paratic Piyasalar Logo' priority height={32} width={148} className='mt-8 mb-24' />
                        <span className="navbar-mobile-item">Döviz Kurları</span>
                        <span className="navbar-mobile-item">Altın Fiyatları</span>
                        <span className="navbar-mobile-item">Borsa</span>
                        <span className="navbar-mobile-item">Hisse Senetleri</span>
                        <span className="navbar-mobile-item">Parite</span>
                        <span className="navbar-mobile-item">Emtia</span>
                        <span className="navbar-mobile-item">Kripto</span>
                        <span className="navbar-mobile-item">Menü</span>
                        <div className='footer mx-auto w-1/2'>
                            <Authentication />
                        </div>
                    </nav>

                </div>
            </div>
        </>
    )
}