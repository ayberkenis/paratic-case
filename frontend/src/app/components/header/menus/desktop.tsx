'use client';
import Logo from "../logo";
import Search from "../search";
import { Navbar } from "../nav";
import Authentication from "../auth";

export default function DesktopMenu({ user }: { user: string }) {

    return (

        <div className="flex items-center header w-full relative desktop-menu">
            <Logo />
            <div className="search-container  lg:ml-8 hidden lg:flex items-center justify-center order-2">
                <Search />
            </div>
            <Navbar />
            <span className="hidden lg:flex order-4">
                <Authentication user={user} />
            </span>
        </div>

    )
}