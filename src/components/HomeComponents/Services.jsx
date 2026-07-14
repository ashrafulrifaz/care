import React from 'react';
import Badge from '../SmallComponents/Badge/Badge';
import Link from 'next/link';
import { nunitoSans } from '@/lib/fonts';
import { getAllServices } from '@/action/server/services';
import HomeServiceCard from '../SmallComponents/Cards/HomeServiceCard';

const Services = async () => {
    const services = await getAllServices()

    return (
        <div className='py-16'>
            <div className="flex flex-col items-center">
                <Badge text={'our services'} />
                <h2 className='text-4xl mt-7 text-center font-medium leading-snug'>Find the Right Care For Your <br /> Loved Ones</h2>
                <p className={`${nunitoSans.className} font-medium text-lg text-[#454545] mt-6 leading-6 px-96 text-center`}>Trusted, verified caregivers for your family ready to help whenever you need them.</p>
            </div>

            <div className="grid grid-cols-3 gap-7 mt-10">
                {
                    services?.map(service => (
                        <HomeServiceCard key={service._id} service={service} />
                    ))
                }
            </div>
        </div>
    );
};

export default Services;