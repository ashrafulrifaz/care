'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavItems = () => {
    const path = usePathname()

    return (
        <div className="flex items-center justify-center gap-4">
            <Link href={'/'} className={`capitalize ${path === '/' ? 'font-semibold' : 'font-medium'}`}>Home</Link>
            <Link href={'/services'} className={`capitalize ${path === '/services' ? 'font-semibold' : 'font-medium'}`}>services</Link>
            <Link href={'/about-us'} className={`capitalize ${path === '/about-us' ? 'font-semibold' : 'font-medium'}`}>about us</Link>
            <Link href={'/booking'} className={`capitalize ${path === '/booking' ? 'font-semibold' : 'font-medium'}`}>booking</Link>
        </div>
    );
};

export default NavItems;