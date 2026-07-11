import React from 'react';

const Badge = ({text}) => {
    return (
        <div className='flex gap-2 items-center'> 
            <div className="w-2 h-2 rounded-full bg-black"></div>
            <span className='capitalize text-[15px] font-medium'>{text}</span>
        </div>
    );
};

export default Badge;