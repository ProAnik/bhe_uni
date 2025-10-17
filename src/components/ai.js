import React from 'react';

const AI = () => {
    return (
        <div className='mt-14 md:mt-28'>
            <h2 className='font-kanit font-semibold text-[40px] leading-[1.3] tracking-normal text-center text-[#263238]'>AI-Powered Matching Engine</h2>
            <div className="backdrop-blur-[691px] shadow-[0px_10px_40px_0px_#0000001A] rounded-[16px]  mt-5 max-w-[1240px] mx-auto bg-[url('/assets/images/backgrounds/user_bg.png')] bg-cover bg-center">
                <div className='pt-3 mx-4'>
                    <div className='font-kanit font-medium text-xl leading-[1] tracking-normal capitalize text-[#263238]'>
                        Find your ideal university & course in seconds.
                    </div>
                    <div className='font-kanit font-light text-[16px] leading-[150%] tracking-[0%] text-[#3A3A3C] mt-3'>
                        Let our smart platform recommend the best options based on your interests, location, and academic profile.
                    </div>
                </div>
                <div className='w-full px-4  py-6'>
                    <div className='bg-[#F4F6FF] w-full px-4 rounded md:rounded-[100px] flex-col md:flex-row flex  justify-between gap-2 items-center'>
                        <select className='w-full text-[#3A3A3C]'>
                            <option className='text-[#3A3A3C]'>
                                Country
                            </option>
                        </select>
                        <div className='bg-[#8F90A6] h-[24px] w-[1px] hidden md:block'></div>
                        <select className='w-full'>
                            <option className='text-[#3A3A3C]'>
                                University
                            </option>
                        </select>
                        <div className='bg-[#8F90A6] h-[24px] w-[1px] hidden md:block'></div>
                        <select className='w-full'>
                            <option className='text-[#3A3A3C]'>
                                Course Level
                            </option>
                        </select>
                        <div className='bg-[#8F90A6] h-[24px] w-[1px] hidden md:block'></div>
                        <input className='text-[#3A3A3C] block w-full' placeholder=' Course Name'></input> 
                        <div className='bg-[#8F90A6] h-[24px] w-[1px] hidden md:block'></div>
                        <button className='bg-[linear-gradient(255.4deg,_#2D7CF2_0%,_#273B92_100%)] h-[48px] w-32 md:w-[30rem] rounded-[100px] text-white font-kanit font-medium text-[16px] leading-[150%] tracking-[0%]'>
                            Try It Now
                        </button>
                    </div>
                </div>
 
            </div>
        </div>
    );
};

export default AI;