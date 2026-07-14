import { nunitoSans } from '@/lib/fonts';
import RegisterForm from '@/components/AuthComp/RegisterForm';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
         <div className='grid grid-cols-2 gap-10 p-5 h-screen'>
            <div className='flex flex-col items-center justify-center w-full h-full overflow-y-auto'>
                <div className='flex flex-col items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 10.5L7.89963 6.39963M7.89963 6.39963C6.89316 5.39316 6.89315 3.76133 7.89963 2.75486C8.90611 1.74838 10.5379 1.74838 11.5444 2.75486L12 3.21045L12.4556 2.75486C13.4621 1.74838 15.0939 1.74838 16.1004 2.75486C17.1068 3.76133 17.1068 5.39315 16.1004 6.39963L12 10.5M12 10.5L7.89963 14.6004M12 10.5L16.1004 14.6004M7.89963 6.39963C6.89316 5.39316 5.26133 5.39315 4.25486 6.39963C3.24838 7.40611 3.24838 9.03793 4.25486 10.0444L4.71045 10.5L4.25486 10.9556C3.24838 11.9621 3.24838 13.5939 4.25486 14.6004C5.26133 15.6068 6.89316 15.6068 7.89963 14.6004M16.1004 6.39963C17.1068 5.39315 18.7387 5.39315 19.7451 6.39963C20.7516 7.40611 20.7516 9.03793 19.7451 10.0444L19.2895 10.5L19.7451 10.9556C20.7516 11.9621 20.7516 13.5939 19.7451 14.6004C18.7387 15.6068 17.1068 15.6068 16.1004 14.6004M7.89963 14.6004C6.89316 15.6068 6.89315 17.2387 7.89963 18.2451C8.90611 19.2516 10.5379 19.2516 11.5444 18.2451L12 17.7895L12.4556 18.2451C13.4621 19.2516 15.0939 19.2516 16.1004 18.2451C17.1068 17.2387 17.1068 15.6068 16.1004 14.6004"></path>
                        <path d="M7.5 15L5.62132 16.8787C4.26306 18.2369 3.5 20.0791 3.5 22"></path>
                    </svg>
                    <h4 className='text-center text-xl font-semibold'>Care.Io</h4>
                </div>
                <h3 className={`capitalize ${nunitoSans.className} mt-10 text-3xl font-bold`}>Create Account</h3>
                <p className='text-lg text-[#656565] mt-3'>Enter your details to get started with Care.Io</p>

                <RegisterForm />
            </div>

            <div className='relative w-full h-full rounded-3xl overflow-hidden'>
                <Image
                    src={'https://res.cloudinary.com/db30o33kz/image/upload/v1783874748/register_zdk2jv.png'}
                    alt='login image'
                    fill
                    className='object-cover'
                    priority
                />
            </div>
        </div>
    );
};

export default page;