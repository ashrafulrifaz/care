import { getAllServices } from '@/action/server/services';
import { nunitoSans } from '@/app/layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = async ({params}) => {
    const services = await getAllServices()
    const {id} = await params || {}
    const singleService = services?.find(service => service.slug === id)

    return (
        <div className='pt-6 pb-12'>
            <p className="text-[#808080] text-base">Services {'>'} <span className="capitalize text-[#454545]">{singleService?.title}</span></p>
            <div className="grid grid-cols-5 gap-7 mt-6">
                <div className="col-span-3 overflow-hidden">
                    <Image src={singleService?.image || '/default-image.jpg'} alt={singleService?.title} width={500} height={300} className="w-full h-auto rounded-3xl object-cover" />
                </div>
                <div className="col-span-2">
                    <h2 className='text-3xl font-semibold capitalize'>{singleService?.title} Service</h2>
                    <p className={`text-lg text-[#454545] mt-4 leading-6 ${nunitoSans.className}`}>{singleService?.description}</p>
                    <h4 className='text-lg font-medium mt-6'>What{"'"}s Included</h4>
                    {
                        singleService?.features?.map((feature, index) => (
                            <div key={index} className="flex gap-3 items-center mt-2">
                                <div className="w-2 h-2 rounded-full bg-black"></div>
                                <p className={`text-base text-[#454545] ${nunitoSans.className}`}>{feature}</p>
                            </div>
                        ))
                    }

                    <div className="mt-10">
                        <Link href={`/booking/${singleService.slug}`} className='bg-black rounded-full py-2 px-5 text-white capitalize'>Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;