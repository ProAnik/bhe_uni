import React from 'react';
import Image from 'next/image';
const Destinations = () => {
    return (
        <div className='max-w-[1240px] mx-auto mt-14 md:mt-24 px-5 md:px-0'>
            <h2 className="font-kanit font-semibold text-[30px] md:text-[40px] leading-[66px] tracking-[0.5px]">Featured Destinations</h2>
            <div className='flex flex-col md:flex md:flex-row justify-between mt-5 gap-4'>
                <div className='bg-[#F5F7F9] h-[362px] w-full shadow-[0px_5px_30px_0px_rgba(0,0,0,0.15)] rounded-[16px] flex flex-col justify-between'>
                    <div className='pt-4 px-5 '>
                        <h1 className="bg-[linear-gradient(255.4deg,#06C270_0%,#0063F7_100%)] bg-clip-text text-transparent font-kanit font-semibold text-[24px] leading-[1] tracking-[0.5%]">
                            Study in the UK
                        </h1>

                        <div className='mt-8'>
                            <div className='flex items-center gap-2'>
                                <img src='/assets/images/icon/star.svg' />
                                <h1 className='text-[#3A3A3C] font-kanit font-normal text-[16px] leading-[1.4] tracking-[0px]'>
                                    80+ Universities
                                </h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src='/assets/images/icon/star.svg' />
                                <h1 className='text-[#3A3A3C] font-kanit font-normal text-[16px] leading-[1.4] tracking-[0px]'>
                                    15+ Courses
                                </h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src='/assets/images/icon/star.svg' />
                                <h1 className='text-[#3A3A3C] font-kanit font-normal text-[16px] leading-[1.4] tracking-[0px]'>
                                    Upto £10K scholarships                                
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[url('/assets/images/backgrounds/uk.png')] h-[184px] w-full bg-cover rounded-[16px]">
                        <img src='/assets/images/backgrounds/button_dest.svg' className='mt-[130px] ml-6'/>
                    </div>
                </div>
                <div className='bg-[#F5F7F9] h-[362px] w-full shadow-[0px_5px_30px_0px_rgba(0,0,0,0.15)] rounded-[16px] flex flex-col justify-between'>
                    <div className='pt-4 px-5 '>
                        <h1 className="bg-[linear-gradient(255.4deg,#06C270_0%,#0063F7_100%)] bg-clip-text text-transparent font-kanit font-semibold text-[24px] leading-[1] tracking-[0.5%]">
                            Study in the USA
                        </h1>

                        <div className='mt-8'>
                            <div className='flex items-center gap-2'>
                                <img src='/assets/images/icon/star.svg' />
                                <h1 className='text-[#3A3A3C] font-kanit font-normal text-[16px] leading-[1.4] tracking-[0px]'>
                                    100+ universities and colleges
                                </h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src='/assets/images/icon/star.svg' />
                                <h1 className='text-[#3A3A3C] font-kanit font-normal text-[16px] leading-[1.4] tracking-[0px]'>
                                    1000+ courses
                                </h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src='/assets/images/icon/star.svg' />
                                <h1 className='text-[#3A3A3C] font-kanit font-normal text-[16px] leading-[1.4] tracking-[0px]'>
                                    Upto 50% scholarship                                
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[url('/assets/images/backgrounds/ud.png')] h-[184px] w-full bg-cover rounded-[16px]">
                        <img src='/assets/images/backgrounds/button_dest.svg' className='mt-[130px] ml-6'/>
                    </div>
                </div>
                <div className='bg-[#F5F7F9] h-[362px] w-full shadow-[0px_5px_30px_0px_rgba(0,0,0,0.15)] rounded-[16px] flex flex-col justify-between'>
                    <div className='pt-4 px-5 '>
                        <h1 className="bg-[linear-gradient(255.4deg,#06C270_0%,#0063F7_100%)] bg-clip-text text-transparent font-kanit font-semibold text-[24px] leading-[1] tracking-[0.5%]">
                            Study in Canada
                        </h1>

                        <div className='mt-8'>
                            <div className='flex items-center gap-2'>
                                <img src='/assets/images/icon/star.svg' />
                                <h1 className='text-[#3A3A3C] font-kanit font-normal text-[16px] leading-[1.4] tracking-[0px]'>
                                    50+ Universities & Colleges
                                </h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src='/assets/images/icon/star.svg' />
                                <h1 className='text-[#3A3A3C] font-kanit font-normal text-[16px] leading-[1.4] tracking-[0px]'>
                                    800+ courses
                                </h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src='/assets/images/icon/star.svg' />
                                <h1 className='text-[#3A3A3C] font-kanit font-normal text-[16px] leading-[1.4] tracking-[0px]'>
                                    Around 20k CAD scholarship                              
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[url('/assets/images/backgrounds/canada.png')] h-[184px] w-full bg-cover rounded-[16px]">
                        <img src='/assets/images/backgrounds/button_dest.svg' className='mt-[130px] ml-6'/>
                    </div>
                </div>
                <div className='bg-[#F5F7F9] h-[362px] w-full shadow-[0px_5px_30px_0px_rgba(0,0,0,0.15)] rounded-[16px] flex flex-col justify-between'>
                    <div className='pt-4 px-5 '>
                        <h1 className="bg-[linear-gradient(255.4deg,#06C270_0%,#0063F7_100%)] bg-clip-text text-transparent font-kanit font-semibold text-[24px] leading-[1] tracking-[0.5%]">
                            Study in Australia
                        </h1>

                        <div className='mt-8'>
                            <div className='flex items-center gap-2'>
                                <img src='/assets/images/icon/star.svg' />
                                <h1 className='text-[#3A3A3C] font-kanit font-normal text-[16px] leading-[1.4] tracking-[0px]'>
                                    25+ Universities and institutes
                                </h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src='/assets/images/icon/star.svg' />
                                <h1 className='text-[#3A3A3C] font-kanit font-normal text-[16px] leading-[1.4] tracking-[0px]'>
                                    500+ Courses
                                </h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src='/assets/images/icon/star.svg' />
                                <h1 className='text-[#3A3A3C] font-kanit font-normal text-[16px] leading-[1.4] tracking-[0px]'>
                                    Upto 30% scholarship                               
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[url('/assets/images/backgrounds/aus.png')] h-[184px] w-full bg-cover rounded-[16px]">
                        <img src='/assets/images/backgrounds/button_dest.svg' className='mt-[130px] ml-6'/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Destinations;