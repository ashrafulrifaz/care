import React from 'react';
import Badge from '../SmallComponents/Badge/Badge';

const About = () => {
    return (
        <div className='py-16'>
            <div className="flex flex-col items-center">
                <Badge text={'about us'} />
                <h5 className='text-center mt-7 text-3xl font-medium leading-snug'>Care.Io was created to solve a problem every family eventually faces: finding care you can truly trust. Whether it{"'"}s a  <span className='text-white px-2 pb-0.5 bg-black rounded-full border-[1.5px] border-secondary'>caregiver</span>  for your child, support for an aging parent, or assistance for a loved one recovering from illness, the search for  <span className='text-white px-2 bg-black rounded-full border-[1.5px] border-secondary'>reliable</span>  help is often stressful, time-consuming, and full of uncertainty.</h5>
            </div>

            <div className="mt-20 grid grid-cols-4 gap-8">
                <div>
                    <div className='bg-white rounded-full py-8'>
                        <h4 className='text-center font-medium text-[40px]'>500+</h4>
                    </div>
                    <h5 className='mt-7 text-[#555555] text-center text-xl'>Verified Caregivers</h5>
                </div>
                <div>
                    <div className='bg-accent rounded-full py-8'>
                        <h4 className='text-center font-medium text-[40px]'>10,000+</h4>
                    </div>
                    <h5 className='mt-7 text-[#555555] text-center text-xl'>Families Served</h5>
                </div>
                <div>
                    <div className='bg-white rounded-full py-8'>
                        <h4 className='text-center font-medium text-[40px]'>4.9/5</h4>
                    </div>
                    <h5 className='mt-7 text-[#555555] text-center text-xl'>User Review</h5>
                </div>
                <div>
                    <div className='bg-accent rounded-full py-8'>
                        <h4 className='text-center font-medium text-[40px]'>24/7</h4>
                    </div>
                    <h5 className='mt-7 text-[#555555] text-center text-xl'>Customer Support</h5>
                </div>
            </div>
        </div>
    );
};

export default About;