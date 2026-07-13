'use client'
import Link from 'next/link';
import React from 'react';

const RegisterForm = () => {
    const handleRegister = async (e) => {
        e.preventDefault();
        console.log('hello');
    }

    return (
        <form onSubmit={handleRegister} className='flex flex-col items-center w-full'>
            <div className='w-3/4 mt-5'>
                <label htmlFor="name" className='font-medium text-[17px]'>Name</label>
                <input type="text" id='name' name='name' placeholder='Enter your full name' className='w-full block bg-[#eaeaea] py-3 px-4 rounded-lg mt-2' />
            </div>

            <div className='w-3/4 mt-5 grid grid-cols-2 gap-4'>
                <div>
                    <label htmlFor="phone" className='font-medium text-[17px]'>Phone</label>
                    <input type="tel" id='phone' name='phone' placeholder='Enter your phone number' className='w-full block bg-[#eaeaea] py-3 px-4 rounded-lg mt-2' />
                </div>
                <div>
                    <label htmlFor="nid" className='font-medium text-[17px]'>NID No.</label>
                    <input type="text" id='nid' name='nid' placeholder='Enter your NID no.' className='w-full block bg-[#eaeaea] py-3 px-4 rounded-lg mt-2' />
                </div>
            </div>

            <div className='w-3/4 mt-5'>
                <label htmlFor="email" className='font-medium text-[17px]'>Email</label>
                <input type="email" id='email' name='email' placeholder='Enter your email' className='w-full block bg-[#eaeaea] py-3 px-4 rounded-lg mt-2' />
            </div>

            <div className='w-3/4 mt-5 grid grid-cols-2 gap-4'>
                <div>
                    <label htmlFor="password" className='font-medium text-[17px]'>Password</label>
                    <input type="password" id='password' name='password' placeholder='Enter your password' className='w-full block bg-[#eaeaea] py-3 px-4 rounded-lg mt-2' />
                </div>
                <div>
                    <label htmlFor="confirmPassword" className='font-medium text-[17px]'>Re-Type Password</label>
                    <input type="password" id='confirmPassword' name='confirmPassword' placeholder='Re-enter your password' className='w-full block bg-[#eaeaea] py-3 px-4 rounded-lg mt-2' />
                </div>
            </div>

            <button
                type="submit"
                className='w-3/4 mt-10 bg-black text-white font-semibold py-3 rounded-xl transition-colors cursor-pointer'
            >
                Sign In
            </button>
            <p className='font-normal text-[#909090] mt-8'>Already have an account? <Link href={'/signin'} className='font-medium text-[#656565]'>Sign Up</Link></p>
        </form>
    );
};

export default RegisterForm;