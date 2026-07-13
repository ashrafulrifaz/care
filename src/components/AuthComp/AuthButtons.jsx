'use client'
import React from 'react';
import Button from '../SmallComponents/Button/Button';
import { signOut, useSession } from 'next-auth/react';

const AuthButtons = () => {
    const session = useSession()
    
    return (
        <div>
            {session.status == 'unauthenticated' ? 
            <Button text={'Login'} link={'/signin'}></Button> : 
            <button onClick={() => signOut()} className='bg-black rounded-full py-2 px-5 text-white capitalize cursor-pointer'>Log Out</button>}
        </div>
    );
};

export default AuthButtons;