import Link from 'next/link';
import React from 'react';

const Button = ({text, link}) => {
    return (
        <Link href={link} className='bg-black rounded-full py-2 px-5 text-white capitalize'>
            {text}
        </Link>
    );
};

export default Button;