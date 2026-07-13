'use client'
import { registerUser } from '@/action/server/auth';
import Link from 'next/link';

const RegisterForm = () => {
    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;

        if(form.password.value !== form.confirmPassword.value) {
            alert('Passwords do not match');
            return;
        }

        const formData = {
            name: form.name.value,
            phone: form.phone.value,
            nid: form.nid.value,
            email: form.email.value,
            password: form.password.value,
        };
        const result = await registerUser(formData);
        if(result) {
            alert('sign up succeed')
        }
    }

    return (
        <form onSubmit={handleRegister} className='flex flex-col items-center w-full'>
            <div className='w-3/4 mt-5'>
                <label htmlFor="name" className='font-medium text-[17px]'>Name</label>
                <input type="text" id='name' name='name' placeholder='Enter your full name' required className='w-full block bg-[#eaeaea] py-3 px-4 rounded-lg mt-2' />
            </div>

            <div className='w-3/4 mt-5 grid grid-cols-2 gap-4'>
                <div>
                    <label htmlFor="phone" className='font-medium text-[17px]'>Phone</label>
                    <input type="tel" id='phone' name='phone' placeholder='Enter your phone number' required className='w-full block bg-[#eaeaea] py-3 px-4 rounded-lg mt-2' />
                </div>
                <div>
                    <label htmlFor="nid" className='font-medium text-[17px]'>NID No.</label>
                    <input type="number" id='nid' name='nid' placeholder='Enter your NID no.' required className='w-full block bg-[#eaeaea] py-3 px-4 rounded-lg mt-2' />
                </div>
            </div>

            <div className='w-3/4 mt-5'>
                <label htmlFor="email" className='font-medium text-[17px]'>Email</label>
                <input type="email" id='email' name='email' placeholder='Enter your email' required className='w-full block bg-[#eaeaea] py-3 px-4 rounded-lg mt-2' />
            </div>

            <div className='w-3/4 mt-5 grid grid-cols-2 gap-4'>
                <div>
                    <label htmlFor="password" className='font-medium text-[17px]'>Password</label>
                    <input type="password" id='password' name='password' placeholder='Enter your password' required className='w-full block bg-[#eaeaea] py-3 px-4 rounded-lg mt-2' />
                </div>
                <div>
                    <label htmlFor="confirmPassword" className='font-medium text-[17px]'>Re-Type Password</label>
                    <input type="password" id='confirmPassword' name='confirmPassword' placeholder='Re-enter your password' required className='w-full block bg-[#eaeaea] py-3 px-4 rounded-lg mt-2' />
                </div>
            </div>

            <button
                type="submit"
                className='w-3/4 mt-10 bg-black text-white font-semibold py-3 rounded-xl transition-colors cursor-pointer'
            >
                Sign Up
            </button>
            <p className='font-normal text-[#909090] mt-8'>Already have an account? <Link href={'/signin'} className='font-medium text-[#656565]'>Sign In</Link></p>
        </form>
    );
};

export default RegisterForm;