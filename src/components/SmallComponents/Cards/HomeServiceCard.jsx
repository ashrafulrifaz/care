import { nunitoSans } from '@/app/layout';
import Link from 'next/link';
import React from 'react';

const HomeServiceCard = ({service}) => {
    const {id, title, shortDescription, slug} = service || {}
    return (
        <div className='flex-1 bg-white rounded-3xl p-4 pb-5'>
            <div className="flex items-center justify-between">
                <h6 className={`${nunitoSans.className} font-semibold text-[#858585] text-lg`}>0<span className='text-black'>{id}</span></h6>
                <Link href={`/services/${slug}`} className='bg-background rounded-full p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"></path>
                    </svg>
                </Link>
            </div>
            <div className='mt-40'>
                <h4 className='capitalize font-medium text-xl'>{title}</h4>
                <p className={`${nunitoSans.className} font-medium text-lg text-[#454545] mt-3 leading-6`}>{shortDescription}</p>
            </div>
        </div>
    );
};

export default HomeServiceCard;