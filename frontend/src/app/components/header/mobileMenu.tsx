"use client";

import { useState } from "react"
import { MobileNavbar } from "./nav"

export default function MobileMenu() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    return (

        <div className="block lg:hidden ml-6">
            <span onClick={() => setShowMobileMenu(true)} className="hamburger-menu-icon lg:hidden">☰</span>
            <MobileNavbar closeMenu={(x: boolean) => setShowMobileMenu(x)} />
        </div>
    )
}