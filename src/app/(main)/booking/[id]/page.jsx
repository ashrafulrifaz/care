import { getAllServices } from '@/action/server/services';
import BookingCalendar from '@/components/SmallComponents/Cards/Calendar/BookingCalendar';
import Image from 'next/image';
import React from 'react';

const page = async ({params}) => {
    const services = await getAllServices()
    const {id} = await params || {}
    const singleService = services?.find(service => service.slug === id)

    return (
        <div className='py-6 grid grid-cols-2 gap-5'>
            <BookingCalendar />
            <div>
                <h2 className='text-3xl font-semibold capitalize'>Booking for {singleService.title}</h2>
                <h4 className='text-lg font-medium mt-5'>Date & Duration</h4>
            </div>
        </div>
    );
};

export default page;