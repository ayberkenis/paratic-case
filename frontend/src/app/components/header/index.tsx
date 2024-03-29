import Logo from "./logo";
import '@/assets/css/header.layout.css';
import Search from "./search";
import { Navbar } from "./nav";
import Authentication from "./auth";
import MobileMenu from "./mobileMenu";
import { cookies } from 'next/headers';

export default async function Header() {
    const user = cookies().get('user')?.value

    return (
        <>
            <div className="flex items-center header w-full relative">
                <Logo />
                <div className="search-container  lg:ml-8 hidden lg:flex items-center justify-center order-2">
                    <Search />
                </div>
                <Navbar />
                <span className="hidden lg:flex order-4">
                    <Authentication user={user} />
                </span>
                <MobileMenu />

            </div>

        </>
    )
}