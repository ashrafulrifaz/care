'use client'

import { nunitoSans } from '@/lib/fonts';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

const BookingCalendar = () => {
    const [range, setRange] = useState({
        from: new Date(),
        to: undefined,
    });

    const formatDate = (date) =>
        date?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <div className="w-full bg-white rounded-3xl overflow-hidden">
            <DayPicker
                mode="range"
                selected={range}
                onSelect={setRange}
                weekStartsOn={1}
                showOutsideDays
                classNames={{
                    months: 'p-4',
                    month_caption: 'flex items-center justify-center relative mb-4 bg-[#F5F3F4] rounded-full py-2',
                    caption_label: `text-[15px] font-medium text-[#555555] ${nunitoSans.className}`,
                    nav: 'flex items-center justify-between absolute inset-x-2 top-[35px] -translate-y-1/2 z-10',
                    button_previous: 'p-0.5 rounded-full bg-white cursor-pointer ml-3.5',
                    button_next: 'p-1 rounded-full hover:bg-gray-200 text-gray-500 cursor-pointer mr-3.5',
                    month_grid: 'w-full border-collapse',
                    weekdays: 'flex w-full',
                    weekday: 'text-gray-400 text-sm font-medium flex-1 h-10 flex items-center justify-center',
                    week: 'flex w-full',
                    day: 'flex-1 h-10 text-center text-sm p-0 relative',
                    day_button: 'w-10 h-10 mx-auto rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer text-gray-700',
                    today: 'font-semibold',
                    outside: 'text-gray-300',
                    range_start: '[&>button]:bg-indigo-600 [&>button]:text-white [&>button]:hover:bg-indigo-600 rounded-l-full bg-indigo-100',
                    range_end: '[&>button]:bg-indigo-600 [&>button]:text-white [&>button]:hover:bg-indigo-600 rounded-r-full bg-indigo-100',
                    range_middle: 'bg-indigo-100 [&>button]:text-indigo-600 [&>button]:hover:bg-indigo-200',
                }}
            />

            <div className="px-6 py-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-400">Range: </span>
                    <span className="text-gray-700">
                        {range?.from ? formatDate(range.from) : '—'}
                        {range?.to ? ` - ${formatDate(range.to)}` : ''}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default BookingCalendar;