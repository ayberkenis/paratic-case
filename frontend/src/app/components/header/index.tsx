import Logo from "./logo";
import '@/assets/css/header.layout.css';
import Search from "./search";
import Navbar from "./nav";
import Authentication from "./auth";

export default function Header() {
    return (
        <div className="flex items-center justify-between header">
            <div className="header-side w-1/3">
                <Logo />
                <Search />
            </div>
            <div className="header-center flex-1">
                <Navbar />
            </div>
            <div className="header-side justify-self-end w-1/3">
                <Authentication />
            </div>

        </div>
    )
}