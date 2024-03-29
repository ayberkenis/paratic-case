// @ts-nocheck

import '@/assets/css/header.layout.css';
import { cookies } from 'next/headers';
import DesktopMenu from './menus/desktop';
import MobileMenu from './menus/mobile';

export default async function Header() {
    const user = cookies().get('user')?.value


    return (
        <div className="menus">
            <DesktopMenu user={user} />
            <MobileMenu user={user} />
        </div>
    )
}