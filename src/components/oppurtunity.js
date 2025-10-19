import React from 'react';
import Image from 'next/image';

const Opportunity = () => {
    return (
        <>
        <div className='max-w-[1240px] mx-auto mt-14 md:mt-24 px-5 md:px-0'>
            <h3 className="font-kanit font-semibold text-[30px] md:text-[40px] md:leading-[66px] tracking-[0px] text-[#263238]">Student Opportunities</h3>
            <div className='flex flex-col md:flex-row md:flex gap-4 mt-5'>
                <div className='h-[400px] w-full rounded-[16px] relative overflow-hidden'>
                    <Image fill alt="image" src="/assets/images/backgrounds/stu1.png" className='w-full rounded-[16px] overflow-hidden' />
                    <div className='absolute w-full bottom-0 h-[130px] bg-gradient-to-bl from-[#06C270] to-[#0063F7] z-10 rounded-[16px] font-kanit font-semibold text-[24px] leading-[130%] tracking-[0.5%] text-center text-white flex items-center justify-center'>
                        September 2025 Intake <br></br>
                            Closing Soon!
                    </div>
                </div>
                 <div className='h-[400px] w-full rounded-[16px] relative overflow-hidden'>
                    <Image fill alt="image" src="/assets/images/backgrounds/stu3.png" className='w-full rounded-[16px]' />
                    <div className='absolute w-full bottom-0 h-[130px] bg-gradient-to-bl bg-[linear-gradient(255.4deg,#FFCC00_0%,#F37124_100%)] z-10 rounded-[16px] font-kanit font-semibold text-[24px] leading-[130%] tracking-[0.5%] text-center text-white flex items-center justify-center'>
                        Full Scholarships for UK Master's Students 
                    </div>
                </div>
                 <div className='h-[400px] w-full rounded-[16px] relative overflow-hidden'>
                    <Image fill alt="image" src="/assets/images/backgrounds/stu2.png" className='w-full rounded-[16px]' />
                    <div className='absolute w-full bottom-0 h-[130px] bg-[linear-gradient(255.4deg,#2D7CF2_0%,#273B92_100%)] z-10 rounded-[16px] font-kanit font-semibold text-[24px] leading-[130%] tracking-[0.5%] text-center text-white flex items-center justify-center'>
                        Live Webinar: <br></br>
                        UK Admissions Q&A
                    </div>
                </div>
                 <div className='h-[400px] w-full rounded-[16px] relative overflow-hidden'>
                    <Image fill alt="image" src="/assets/images/backgrounds/stu4.png" className='w-full rounded-[16px]' />
                    <div className='absolute w-full bottom-0 h-[130px] bg-[linear-gradient(90deg,#D25298_0%,#965BDB_49.97%,#6D54EE_100%)] z-10 rounded-[16px] font-kanit font-semibold text-[24px] leading-[130%] tracking-[0.5%] text-center text-white flex items-center justify-center'>
                        New Agent Tools <br></br>
                        Launched in CRM
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center mt-[-100px] md:mt-[-500px]'>
            <img src='/assets/images/backgrounds/shortcutplay.svg' />
        </div>
        </>
    );
};

export default Opportunity;
