import { nunitoSans } from '@/lib/fonts';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#0C1821] pt-14 pb-5 px-[60px]">
            <div className='border-t border-[#656565] mb-10'></div>
            <div className="grid grid-cols-8 gap-12">
                <div className='col-span-3'>
                    <div className='flex items-center'>
                        <Link href={'/'} className='flex gap-1 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="text-white" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 10.5L7.89963 6.39963M7.89963 6.39963C6.89316 5.39316 6.89315 3.76133 7.89963 2.75486C8.90611 1.74838 10.5379 1.74838 11.5444 2.75486L12 3.21045L12.4556 2.75486C13.4621 1.74838 15.0939 1.74838 16.1004 2.75486C17.1068 3.76133 17.1068 5.39315 16.1004 6.39963L12 10.5M12 10.5L7.89963 14.6004M12 10.5L16.1004 14.6004M7.89963 6.39963C6.89316 5.39316 5.26133 5.39315 4.25486 6.39963C3.24838 7.40611 3.24838 9.03793 4.25486 10.0444L4.71045 10.5L4.25486 10.9556C3.24838 11.9621 3.24838 13.5939 4.25486 14.6004C5.26133 15.6068 6.89316 15.6068 7.89963 14.6004M16.1004 6.39963C17.1068 5.39315 18.7387 5.39315 19.7451 6.39963C20.7516 7.40611 20.7516 9.03793 19.7451 10.0444L19.2895 10.5L19.7451 10.9556C20.7516 11.9621 20.7516 13.5939 19.7451 14.6004C18.7387 15.6068 17.1068 15.6068 16.1004 14.6004M7.89963 14.6004C6.89316 15.6068 6.89315 17.2387 7.89963 18.2451C8.90611 19.2516 10.5379 19.2516 11.5444 18.2451L12 17.7895L12.4556 18.2451C13.4621 19.2516 15.0939 19.2516 16.1004 18.2451C17.1068 17.2387 17.1068 15.6068 16.1004 14.6004"></path>
                                <path d="M7.5 15L5.62132 16.8787C4.26306 18.2369 3.5 20.0791 3.5 22"></path>
                            </svg>
                            <h3 className='font-semibold text-lg text-white'>Care.Io</h3>
                        </Link>
                    </div>
                    <p className={`${nunitoSans.className} text-[#cdcdcd] text-lg mt-4 pr-20`}>Care.IO connects families with trusted, verified caregivers for children, elders, and loved ones</p>
                </div>
                <div className='col-span-2'>
                    <div className="flex gap-3">
                        <Link href={'https://facebook.com/care'} target='_blank' className='bg-[#454545] rounded-full p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#cbcbcb" fill="none" stroke="#cbcbcb" strokeWidth="1.5" strokeLinejoin="round">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z"></path>
                            </svg>
                        </Link>
                        <Link href={'https://instagram.com/care'} target='_blank' className='bg-[#454545] rounded-full p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#cbcbcb" fill="none" stroke="#cbcbcb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.364 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12Z"></path>
                                <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"></path>
                                <path d="M17.3748 6.75024H17.2498M17.4998 6.75024C17.4998 6.88832 17.3878 7.00024 17.2498 7.00024C17.1117 7.00024 16.9998 6.88832 16.9998 6.75024C16.9998 6.61217 17.1117 6.50024 17.2498 6.50024C17.3878 6.50024 17.4998 6.61217 17.4998 6.75024Z"></path>
                            </svg>
                        </Link>
                        <Link href={'https://linkedin.com/in/care'} target='_blank' className='bg-[#454545] rounded-full p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#cbcbcb" fill="none" stroke="#cbcbcb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 10V17"></path>
                                <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10"></path>
                                <path d="M7.125 6.75H7M7.25 6.75C7.25 6.88807 7.13807 7 7 7C6.86193 7 6.75 6.88807 6.75 6.75C6.75 6.61193 6.86193 6.5 7 6.5C7.13807 6.5 7.25 6.61193 7.25 6.75Z"></path>
                                <path d="M3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.364 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12Z"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className="mt-8 space-y-3">
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#cbcbcb" fill="none" stroke="#cbcbcb" strokeWidth="1.5" strokeLinejoin="round">
                                <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"></path>
                                <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"></path>
                            </svg>
                            <h4 className={`${nunitoSans.className} text-lg text-[#cdcdcd]`}>care.io@gmail.com</h4>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#cbcbcb" fill="none" stroke="#cbcbcb" strokeWidth="1.5" strokeLinecap="round">
                                <path d="M9.1585 5.71217L8.75584 4.80619C8.49256 4.21382 8.36092 3.91762 8.16405 3.69095C7.91732 3.40688 7.59571 3.19788 7.23592 3.08779C6.94883 2.99994 6.6247 2.99994 5.97645 2.99994C5.02815 2.99994 4.554 2.99994 4.15597 3.18223C3.68711 3.39696 3.26368 3.86322 3.09497 4.35054C2.95175 4.76423 2.99278 5.18937 3.07482 6.03964C3.94815 15.0901 8.91006 20.052 17.9605 20.9254C18.8108 21.0074 19.236 21.0484 19.6496 20.9052C20.137 20.7365 20.6032 20.3131 20.818 19.8442C21.0002 19.4462 21.0002 18.972 21.0002 18.0237C21.0002 17.3755 21.0002 17.0514 20.9124 16.7643C20.8023 16.4045 20.5933 16.0829 20.3092 15.8361C20.0826 15.6393 19.7864 15.5076 19.194 15.2443L18.288 14.8417C17.6465 14.5566 17.3257 14.414 16.9998 14.383C16.6878 14.3533 16.3733 14.3971 16.0813 14.5108C15.7762 14.6296 15.5066 14.8543 14.9672 15.3038C14.4304 15.7511 14.162 15.9748 13.834 16.0946C13.5432 16.2009 13.1588 16.2402 12.8526 16.1951C12.5071 16.1442 12.2426 16.0028 11.7135 15.7201C10.0675 14.8404 9.15977 13.9327 8.28011 12.2867C7.99738 11.7576 7.85602 11.4931 7.80511 11.1476C7.75998 10.8414 7.79932 10.457 7.90554 10.1662C8.02536 9.83822 8.24905 9.5698 8.69643 9.03294C9.14586 8.49362 9.37058 8.22396 9.48939 7.91885C9.60309 7.62688 9.64686 7.31234 9.61719 7.00042C9.58618 6.67446 9.44362 6.3537 9.1585 5.71217Z"></path>
                            </svg>
                            <h4 className={`${nunitoSans.className} text-lg text-[#cdcdcd]`}>+880 1301930010</h4>
                        </div>
                    </div>
                </div>
                <div className='col-span-3'>
                    <div className="flex items-center gap-4 justify-between">
                        <Link href={'/services'} className='text-lg font-medium text-white capitalize'>services</Link>
                        <Link href={'/booking'} className='text-lg font-medium text-white capitalize'>booking</Link>
                        <Link href={'/contact'} className='text-lg font-medium text-white capitalize'>contact</Link>
                        <Link href={'/faqs'} className='text-lg font-medium text-white'>FAQs</Link>
                    </div>
                    <p className={`${nunitoSans.className} text-[#cdcdcd] text-lg mt-10`}>Join our newsletter for experts advice.</p>
                    <form className="flex items-center bg-[#3f3f3f]/35 mt-4 rounded-full w-full">
                        <input
                            type="email"
                            placeholder="Enter email address"
                            required
                            className="flex-1 bg-transparent text-gray-300 text-base placeholder:text-[#979797] px-4 py-2.5 outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-[#B2967D] text-white text-sm font-medium rounded-full px-6 py-2.5 cursor-pointer"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <div className='border-t border-[#656565] mt-10'></div>
            <div className="flex items-center justify-between py-3">
                <p className={`${nunitoSans.className} text-[#cdcdcd] text-lg`}>© 2023 <span className="font-semibold">Care.Io</span> All rights reserved.</p>
                <Link href={'/terms-and-conditions'} className={`${nunitoSans.className} text-[#cdcdcd] text-lg font-medium`}>Terms & Conditions </Link>
            </div>
        </div>
    );
};

export default Footer;