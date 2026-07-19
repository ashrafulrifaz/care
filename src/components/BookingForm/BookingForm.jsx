'use client'
import React, { useState } from 'react';
import BookingCalendar from '../SmallComponents/Cards/Calendar/BookingCalendar';
import { postBooking } from '@/action/server/bookings';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const divisions = [
  { id: 1, name: "Dhaka" },
  { id: 2, name: "Chittagong" },
  { id: 3, name: "Rajshahi" },
  { id: 4, name: "Khulna" },
  { id: 5, name: "Barisal" },
  { id: 6, name: "Sylhet" },
  { id: 7, name: "Rangpur" },
  { id: 8, name: "Mymensingh" },
];

const districts = [
  // Dhaka Division
  { id: 1, name: "Dhaka", division: "Dhaka" },
  { id: 2, name: "Faridpur", division: "Dhaka" },
  { id: 3, name: "Gazipur", division: "Dhaka" },
  { id: 4, name: "Gopalganj", division: "Dhaka" },
  { id: 5, name: "Kishoreganj", division: "Dhaka" },
  { id: 6, name: "Madaripur", division: "Dhaka" },
  { id: 7, name: "Manikganj", division: "Dhaka" },
  { id: 8, name: "Munshiganj", division: "Dhaka" },
  { id: 9, name: "Narayanganj", division: "Dhaka" },
  { id: 10, name: "Narsingdi", division: "Dhaka" },
  { id: 11, name: "Rajbari", division: "Dhaka" },
  { id: 12, name: "Shariatpur", division: "Dhaka" },
  { id: 13, name: "Tangail", division: "Dhaka" },

  // Chittagong Division
  { id: 14, name: "Bandarban", division: "Chittagong" },
  { id: 15, name: "Brahmanbaria", division: "Chittagong" },
  { id: 16, name: "Chandpur", division: "Chittagong" },
  { id: 17, name: "Chittagong", division: "Chittagong" },
  { id: 18, name: "Comilla", division: "Chittagong" },
  { id: 19, name: "Cox's Bazar", division: "Chittagong" },
  { id: 20, name: "Feni", division: "Chittagong" },
  { id: 21, name: "Khagrachari", division: "Chittagong" },
  { id: 22, name: "Lakshmipur", division: "Chittagong" },
  { id: 23, name: "Noakhali", division: "Chittagong" },
  { id: 24, name: "Rangamati", division: "Chittagong" },

  // Rajshahi Division
  { id: 25, name: "Bogura", division: "Rajshahi" },
  { id: 26, name: "Joypurhat", division: "Rajshahi" },
  { id: 27, name: "Naogaon", division: "Rajshahi" },
  { id: 28, name: "Natore", division: "Rajshahi" },
  { id: 29, name: "Chapainawabganj", division: "Rajshahi" },
  { id: 30, name: "Pabna", division: "Rajshahi" },
  { id: 31, name: "Rajshahi", division: "Rajshahi" },
  { id: 32, name: "Sirajganj", division: "Rajshahi" },

  // Khulna Division
  { id: 33, name: "Bagerhat", division: "Khulna" },
  { id: 34, name: "Chuadanga", division: "Khulna" },
  { id: 35, name: "Jashore", division: "Khulna" },
  { id: 36, name: "Jhenaidah", division: "Khulna" },
  { id: 37, name: "Khulna", division: "Khulna" },
  { id: 38, name: "Kushtia", division: "Khulna" },
  { id: 39, name: "Magura", division: "Khulna" },
  { id: 40, name: "Meherpur", division: "Khulna" },
  { id: 41, name: "Narail", division: "Khulna" },
  { id: 42, name: "Satkhira", division: "Khulna" },

  // Barisal Division
  { id: 43, name: "Barguna", division: "Barisal" },
  { id: 44, name: "Barisal", division: "Barisal" },
  { id: 45, name: "Bhola", division: "Barisal" },
  { id: 46, name: "Jhalokati", division: "Barisal" },
  { id: 47, name: "Patuakhali", division: "Barisal" },
  { id: 48, name: "Pirojpur", division: "Barisal" },

  // Sylhet Division
  { id: 49, name: "Habiganj", division: "Sylhet" },
  { id: 50, name: "Moulvibazar", division: "Sylhet" },
  { id: 51, name: "Sunamganj", division: "Sylhet" },
  { id: 52, name: "Sylhet", division: "Sylhet" },

  // Rangpur Division
  { id: 53, name: "Dinajpur", division: "Rangpur" },
  { id: 54, name: "Gaibandha", division: "Rangpur" },
  { id: 55, name: "Kurigram", division: "Rangpur" },
  { id: 56, name: "Lalmonirhat", division: "Rangpur" },
  { id: 57, name: "Nilphamari", division: "Rangpur" },
  { id: 58, name: "Panchagarh", division: "Rangpur" },
  { id: 59, name: "Rangpur", division: "Rangpur" },
  { id: 60, name: "Thakurgaon", division: "Rangpur" },

  // Mymensingh Division
  { id: 61, name: "Jamalpur", division: "Mymensingh" },
  { id: 62, name: "Mymensingh", division: "Mymensingh" },
  { id: 63, name: "Netrokona", division: "Mymensingh" },
  { id: 64, name: "Sherpur", division: "Mymensingh" },
];

const BookingForm = ({ singleService }) => {
    const router = useRouter()
    const session = useSession()
    const [selectedDivision, setSelectedDivision] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [bookingDate, setBookingDate] = useState({
        from: (() => {
            const today = new Date();
            return new Date(today.getFullYear(), today.getMonth(), today.getDate());
        })(),
        to: undefined,
    });
    const [totalHour, setTotalHour] = useState(1);

    const filteredDistrict = districts.filter(district => district.division == selectedDivision);
    const isSameDay = (d1, d2) =>
        d1 && d2 && d1.toDateString() === d2.toDateString();

    // Calculate number of selected days
    const getDayCount = () => {
        if (!bookingDate?.from) return 1;
        if (!bookingDate?.to || isSameDay(bookingDate.from, bookingDate.to)) return 1;

        const from = new Date(bookingDate.from.getFullYear(), bookingDate.from.getMonth(), bookingDate.from.getDate());
        const to = new Date(bookingDate.to.getFullYear(), bookingDate.to.getMonth(), bookingDate.to.getDate());

        const oneDay = 24 * 60 * 60 * 1000;
        const diffDays = Math.round((to - from) / oneDay) + 1;
        return diffDays;
    };

    const dayCount = getDayCount();
    const isMultipleDates = dayCount > 1;
    const effectiveTotalHour = isMultipleDates ? dayCount * 10 : Number(totalHour);

    const formatDateForDB = (date) => {
        if (!date) return null;
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`; // "2026-07-19"
    };

    const handleDivisionChange = (e) => {
        e.preventDefault();
        setSelectedDivision(e.target.value);
        setSelectedDistrict(null);
    };

    const handleDistrictChange = (e) => {
        e.preventDefault();
        setSelectedDistrict(e.target.value);
    };

    const handleHour = (e) => {
        e.preventDefault();
        setTotalHour(e.target.value);
    };

    const totalCost = singleService?.pricePerHour
        ? singleService.pricePerHour * effectiveTotalHour
        : 0;

    const handleBookingForm = async (e) => {
        e.preventDefault()
        const form = e.target

        const formData = {
            fromDate: formatDateForDB(bookingDate.from),
            toDate: formatDateForDB(bookingDate.to || null),
            totalHour: effectiveTotalHour,
            serviceTitle: singleService?.title,
            totalCost: effectiveTotalHour * singleService?.pricePerHour,
            status: 'pending',
            division: selectedDivision,
            district: selectedDistrict,
            address: form.address.value,
            email: session.data.email
        }
        
        const result = await postBooking(formData)
        if(result.success) {
            router.push('/')
        }
    }
    

    return (
        <div className='grid grid-cols-2 gap-8 mt-6'>
            <div>
                <BookingCalendar range={bookingDate} setRange={setBookingDate} />
            </div>
            <form onSubmit={handleBookingForm}>
                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <label htmlFor='hour' className='text-lg font-medium'>Duration</label>
                        <select
                            name="hour"
                            id="hour"
                            value={totalHour}
                            onChange={handleHour}
                            disabled={isMultipleDates}
                            className='block w-full bg-[#eaeaea] py-2 px-4 rounded-lg mt-2 appearance-none disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            {Array.from({ length: 10 }, (_, i) => i + 1).map((hour) => (
                                <option key={hour} value={hour}>
                                    {hour} {hour === 1 ? 'hour' : 'hours'}
                                </option>
                            ))}
                        </select>
                        {isMultipleDates && (
                            <p className='text-sm text-gray-500 mt-1'>
                                Auto-set to 10 hours/day for {dayCount} selected days
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor='division' className='text-lg font-medium'>Division</label>
                        <select
                            name="division"
                            id="division"
                            required
                            onChange={handleDivisionChange}
                            className='block w-full bg-[#eaeaea] py-2 px-4 rounded-lg mt-2 appearance-none'
                        >
                            <option value="" disabled>Select division</option>
                            {divisions?.map(division => (
                                <option key={division.id} value={division.name}>{division.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-5 mt-5'>
                    <div>
                        <label htmlFor='district' className='text-lg font-medium'>District</label>
                        <select
                            name="district"
                            id="district"
                            required
                            value={selectedDistrict || ''}
                            onChange={handleDistrictChange}
                            disabled={!selectedDivision}
                            className='block w-full bg-[#eaeaea] py-2 px-4 rounded-lg mt-2 appearance-none disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            <option value="" disabled>Select District</option>
                            {filteredDistrict?.map(district => (
                                <option key={district.id} value={district.name}>{district.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor='address' className='text-lg font-medium'>Address</label>
                        <input type="text" id='address' name='address' placeholder='Enter your address' required className='w-full block bg-[#eaeaea] py-2 px-4 rounded-lg mt-2' />
                    </div>
                </div>

                <div className='mt-5'>
                    <h6 className='text-lg font-medium'>Total Cost</h6>
                    <p className='text-base text-[#656565] mt-2'>
                        {singleService.currency} {totalCost} <span className='text-sm text-gray-400'>({effectiveTotalHour} hours)</span>
                    </p>
                </div>
                <div className='mt-7'>
                    <button type='submit' className='bg-black rounded-full py-2.5 px-5 text-white capitalize cursor-pointer'>Confirm Booking</button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;