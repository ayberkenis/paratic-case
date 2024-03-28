'use client';

import Logo from "./logo";
import '@/assets/css/header.layout.css';
import Search from "./search";
import {MobileNavbar, Navbar} from "./nav";
import Authentication from "./auth";
import { useState } from "react";

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)



    return (
        <>
        <div className="flex items-center header w-full relative">
                <Logo />
                <div className="search-container  lg:ml-8 hidden lg:flex items-center justify-center order-2">
                    <Search />
                </div>
                <Navbar />
                <span className="hidden lg:flex order-4">
                    <Authentication />
                </span>
                <div className="block lg:hidden ml-6">
                    <span onClick={() => setShowMobileMenu(true)} className="hamburger-menu-icon lg:hidden">☰</span>
                </div>

        </div>
        {showMobileMenu && <MobileNavbar closeMenu={setShowMobileMenu}/>}
        </>
    )
}