import React from 'react';
import Badge from '../SmallComponents/Badge/Badge';
import Link from 'next/link';
import { nunitoSans } from '@/app/layout';

const Services = () => {
    return (
        <div className='py-16'>
            <div className="flex flex-col items-center">
                <Badge text={'our services'} />
                <h2 className='text-4xl mt-7 text-center font-medium leading-snug'>Find the Right Care For Your <br /> Loved Ones</h2>
                <p className={`${nunitoSans.className} font-medium text-lg text-[#454545] mt-6 leading-6 px-96 text-center`}>Trusted, verified caregivers for your family ready to help whenever you need them.</p>
            </div>

            <div className="flex gap-7 mt-10">
                <div className='flex-1 bg-white rounded-3xl p-4 pb-5'>
                    <div className="flex items-center justify-between">
                        <h6 className={`${nunitoSans.className} font-semibold text-[#858585] text-lg`}>0<span className='text-black'>1</span></h6>
                        <Link href={'/services/baby-care'} className='bg-background rounded-full p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className='mt-40'>
                        <h4 className='capitalize font-medium text-xl'>Baby Care</h4>
                        <p className={`${nunitoSans.className} font-medium text-lg text-[#454545] mt-3 leading-6`}>For children (hourly/daily babysitting, school pickup, overnight care)</p>
                    </div>
                </div>
                <div className='flex-1 bg-white rounded-3xl p-4 pb-5'>
                    <div className="flex items-center justify-between">
                        <h6 className={`${nunitoSans.className} font-semibold text-[#858585] text-lg`}>0<span className='text-black'>2</span></h6>
                        <Link href={'/services/baby-care'} className='bg-background rounded-full p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className='mt-40'>
                        <h4 className='capitalize font-medium text-xl'>Elderly Care</h4>
                        <p className={`${nunitoSans.className} font-medium text-lg text-[#454545] mt-3 leading-6`}>companionship, daily assistance, mobility support for seniors</p>
                    </div>
                </div>
                <div className='flex-1 bg-white rounded-3xl p-4 pb-5'>
                    <div className="flex items-center justify-between">
                        <h6 className={`${nunitoSans.className} font-semibold text-[#858585] text-lg`}>0<span className='text-black'>3</span></h6>
                        <Link href={'/services/baby-care'} className='bg-background rounded-full p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className='mt-40'>
                        <h4 className='capitalize font-medium text-xl'>Special Care</h4>
                        <p className={`${nunitoSans.className} font-medium text-lg text-[#454545] mt-3 leading-6`}>home care for recovering or ill patients, medication reminders, basic nursing</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;