'use client'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavItems = () => {
    const path = usePathname()
    const session = useSession()

    return (
        <div className="flex items-center justify-center gap-4">
            <Link href={'/'} className={`capitalize ${path === '/' ? 'font-semibold' : 'font-medium'}`}>Home</Link>
            <Link href={'/services'} className={`capitalize ${path === '/services' ? 'font-semibold' : 'font-medium'}`}>services</Link>
            <Link href={'/about-us'} className={`capitalize ${path === '/about-us' ? 'font-semibold' : 'font-medium'}`}>about us</Link>
            {
                session.status == 'authenticated' ? 
                <Link href={'/my-booking'} className={`capitalize ${path === '/my-booking' ? 'font-semibold' : 'font-medium'}`}>my booking</Link> : ''
            }
        </div>
    );
};

export default NavItems;