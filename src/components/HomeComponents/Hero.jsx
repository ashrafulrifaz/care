import React from 'react';
import Badge from '../SmallComponents/Badge/Badge';
import { nunitoSans } from '@/app/layout';
import Button from '../SmallComponents/Button/Button';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className='py-16'>
            <div className='flex flex-col items-center'>
                <Badge text={'reliable care, anytime'} />
                <h1 className='text-6xl font-bold capitalize text-center leading-20 mt-7 mb-6'>Your reliable destination for <br /> <span className={`${nunitoSans.className} text-secondary`}>ultimate care</span></h1>
                <p className={`px-68 text-center text-lg text-desc ${nunitoSans.className}`}>Trusted care, booked in minutes for your children, elders, and loved ones. Verified caregivers you can rely on, whenever you need them.</p>
                <div className="mt-8 flex gap-5 items-center">
                    <Button text={'contact us'} link={'/contact-us'} />
                    <Link href={'/booking'} className='flex items-center gap-1'>
                        <span>Book Now</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"></path>
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="flex gap-8 mt-8">
                <div className='w-full flex-1 rounded-4xl overflow-hidden h-[400px]'>
                    <Image
                        src={'https://res.cloudinary.com/db30o33kz/image/upload/v1783779918/hero-1_vgfwly.jpg'}
                        width={500}
                        height={600}
                        alt='hero image'
                        className='w-full h-auto object-cover rounded-2xl'
                    />
                </div>
                <div className='w-full flex-2 rounded-4xl overflow-hidden h-[400px]'>
                    <Image
                        src={'https://res.cloudinary.com/db30o33kz/image/upload/v1783779919/hero-2_zq8aj0.jpg'}
                        width={500}
                        height={600}
                        alt='hero image'
                        className='w-full h-auto object-cover'
                    />
                </div>
                <div className='w-full flex-1 rounded-4xl overflow-hidden h-[400px]'>
                    <Image
                        src={'https://res.cloudinary.com/db30o33kz/image/upload/v1783779920/hero-3_obknla.png'}
                        width={500}
                        height={600}
                        alt='hero image'
                        className='w-full h-auto object-cover'
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;