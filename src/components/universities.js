import React from 'react';

const Universities = () => {
    return (
        <div>
            <h2 className='font-kanit font-semibold  text-[26px] md:text-[32px] leading-[46px] tracking-normal text-center text-[#1E285F]'>Trusted by 10,000+ Universities around the world</h2>
            <div className='flex justify-center w-full mt-5'>
                <img className='flex justify-center' src='/assets/images/backgrounds/unversity1.svg' />
            </div>
            <div className='flex justify-center w-full mt-5'>
                <img className='flex justify-center' src='/assets/images/backgrounds/university2.svg' />
            </div>
        </div>
    );
};

export default Universities;