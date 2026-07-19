import { getAllServices } from '@/action/server/services';
import BookingForm from '@/components/BookingForm/BookingForm';
import React from 'react';

const page = async ({params}) => {
    const services = await getAllServices()
    const {id} = await params || {}
    const singleService = services?.find(service => service.slug === id)

    return (
        <div className='py-6'>
            <h2 className='text-3xl font-semibold capitalize'>Booking for {singleService.title}</h2>
            <BookingForm singleService={singleService} />
        </div>
    );
};

export default page;