import React from 'react';

function Welcome() {
  return (
    <div className="mt-14 md:mt-28 px-5 md:px-0">
      <h1
        className="flex justify-center bg-gradient-to-r from-[#2D7CF2] to-[#273B92] bg-clip-text text-transparent font-kanit font-semibold text-[32px] md:text-[56px] leading-[120%] tracking-[0%] text-center max-w-5xl mx-auto"
      >
        University Admission Made Simple, Smart & Secure with BHE UNI
      </h1>
      <p className="flex justify-center max-w-3xl mx-auto text-center font-kanit font-normal text-[16px] leading-[150%] tracking-[0%] mt-4 text-[#263238]">
        Helping 1,000+ students every year get admission to top UK, USA, Canada & Australia universities – powered by AI, real-time support, and global partnerships.
      </p>

      <div className="flex gap-4 justify-center mt-10 flex-col md:flex-row items-center">
        <button>
          <div
            className="flex bg-[linear-gradient(255.4deg,#FFCC00_0%,#F37124_100%)] w-[272px] h-[64px] pt-6 pr-[36px] pb-6 pl-[36px] gap-2 rotate-0 opacity-100 rounded-[40px] text-white font-kanit font-medium text-[18px] leading-[18px] tracking-[0%] text-center"
          >
            EU & British Students <img src='/assets/images/icon/arrow_right.svg' />
          </div>
        </button>

        <button>
          <div
            className="p-[1px] rounded-[40px] w-[274px] bg-[linear-gradient(255.4deg,#FFCC00_0%,#F37124_100%)]"
          >
            <div
              className="bg-white h-[64px] w-[272px] pt-6 pr-[36px] pb-6 pl-[36px] gap-2 rotate-0 opacity-100 rounded-[40px] font-kanit font-medium text-[18px] text-[#263238] leading-[18px] tracking-[0%] text-center"
            >
              International Students
            </div>
          </div>
        </button>
      </div>
      <div className='flex justify-center overflow-hidden'>
        <img src="/assets/images/backgrounds/students.svg"/>
      </div>
    </div>
  );
}

export default Welcome;
