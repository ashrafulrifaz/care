'use client'
import Link from 'next/link';
import React from 'react';

const LoginForm = () => {
    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('hello');
    }

    return (
        <form onSubmit={handleLogin} className='flex flex-col items-center w-full'>
            <div className='w-3/4 mt-8'>
                <label htmlFor="email" className='font-medium text-[17px]'>Email</label>
                <input type="email" id='email' name='email' placeholder='Enter your email' className='w-full block bg-[#eaeaea] py-3 px-4 rounded-lg mt-2' />
            </div>

            <div className='w-3/4 mt-5'>
                <label htmlFor="password" className='font-medium text-[17px]'>Password</label>
                <input type="password" id='password' name='password' placeholder='Enter your password' className='w-full block bg-[#eaeaea] py-3 px-4 rounded-lg mt-2' />
            </div>

            <div className='w-3/4 mt-4 flex items-center justify-between'>
                <label htmlFor="remember" className='flex items-center gap-2 text-base text-[#656565] font-medium cursor-pointer select-none'>
                    <input
                        type="checkbox"
                        id='remember'
                        name='remember'
                        className='w-4 h-4 rounded-sm accent-black cursor-pointer'
                    />
                    Remember me
                </label>

                <Link href="/forgot-password" className='text-base text-[#656565] font-medium hover:underline'>
                    Forgot password?
                </Link>
            </div>

            <button
                type="submit"
                className='w-3/4 mt-10 bg-black text-white font-semibold py-3 rounded-xl transition-colors cursor-pointer'
            >
                Sign In
            </button>
            <p className='font-normal text-[#909090] mt-8'>Don’t have an account? <Link href={'/signup'} className='font-medium text-[#656565]'>Sign Up</Link></p>
        </form>
    );
};

export default LoginForm;