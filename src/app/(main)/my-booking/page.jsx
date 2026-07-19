import { getUserBookings } from '@/action/server/bookings';
import React from 'react';

const page = async () => {
    const bookings = await getUserBookings()

    return (
        <div className='py-10'>
            <h2 className='capitalize text-3xl font-bold'>My bookings</h2>

            <table className='mt-5 w-full text-left '>
                <thead>
                    <tr className="bg-[#B2967D]/20 text-black text-base">
                        <th className="px-6 py-3 font-medium">Service Name</th>
                        <th className="px-6 py-3 font-medium">Date</th>
                        <th className="px-6 py-3 font-medium">Duration</th>
                        <th className="px-6 py-3 font-medium">Location</th>
                        <th className="px-6 py-3 font-medium">Total Cost</th>
                        <th className="px-6 py-3 font-medium">Status</th>
                        <th className="px-6 py-3 font-medium">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings?.map(booking => (
                            <tr key={booking.id} className='bg-white text-[#454545] border-b border-[#B2967D]/20'>
                                <td className="px-6 py-3 font-medium">{booking.serviceTitle}</td>
                                <td className="px-6 py-3 font-medium">{booking.fromDate} {booking.toDate ? `- ${booking.toDate}` : ''}</td>
                                <td className="px-6 py-3 font-medium">{booking.totalHour}H</td>
                                <td className="px-6 py-3 font-medium capitalize">{booking.address}, {booking.district}, {booking.division}</td>
                                <td className="px-6 py-3 font-medium">{booking.totalCost} TK</td>
                                <td className="px-6 py-3 font-medium capitalize">{booking.status}</td>
                                <td className="px-6 py-3 font-medium flex gap-3 items-center">
                                    <button className='capitalize bg-black text-white py-2 px-3 text-sm rounded-full cursor-pointer'>view details</button>
                                    <button className='capitalize bg-red-700 text-white py-2 px-3 text-sm rounded-full cursor-pointer'>Cancel</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default page;