import Image from 'next/image';
const Join = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-[-50px] md:mt-[-100px] shadow-[0px_5px_60px_0px_#0000001A] bg-white pb-10 rounded-[24px]">
            <h2 className="pt-7 text-center font-kanit font-semibold text-[40px] leading-[130%] tracking-[0px]">Join as a Student or Agent</h2>
            <div className="font-[Kanit] font-normal text-[16px] leading-[24px] tracking-[0px] text-center text-[#6B7588]">Choose your path and unlock opportunities for growth and success</div>

            <div className="flex flex-col md:flex-row gap-8 mt-10 justify-center">
                <div className="w-full rounded-[24px] py-7 px-10 flex flex-col gap-4 justify-center items-center max-w-[503px] bg-[linear-gradient(255.4deg,rgba(255,204,0,0.1)_0%,rgba(243,113,36,0.1)_100%)]">
                    <Image src="/assets/images/icon/students.svg" width={120} height={120} alt="student icon" className="mx-auto"/>
                    <h1 className="font-[Kanit] font-semibold text-[32px] leading-[130%] text-center mt-[-30px]">🎓 Students</h1>
                    <div className='text-[#6B7588] text-center'>
                        Free guidance from application to visa – Let's get started and turn your dreams into reality.
                    </div>
                    <button className='w-[310px] h-[56px] font-[Kanit] font-semibold text-[18px] leading-[20px] text-white rounded-[56px] flex justify-center items-center bg-[linear-gradient(255.4deg,#FFCC00_0%,#F37124_100%)] inline-block'>
                    Get Free Admission Support
                    </button>
                    <div className=''>
                        100% Free Consultation
                    </div>         
                </div>
                <div className="w-full rounded-[24px] py-7 px-10 flex flex-col gap-4 justify-center items-center max-w-[503px] bg-[linear-gradient(255.4deg,rgba(6,194,112,0.1)_0%,rgba(0,99,247,0.1)_100%)]">
                    <Image src="/assets/images/icon/partner.svg" width={120} height={120} alt="student icon" className="mx-auto"/>
                    <h1 className="font-[Kanit] font-semibold text-[32px] leading-[130%] text-center mt-[-30px]">🤝 Agents & Partners</h1>               
                    <div className='text-[#6B7588] text-center'>
                        Earn while helping students with our comprehensive CRM & tools platform.
                    </div>
                    <button className='w-[310px] h-[56px] font-[Kanit] font-semibold text-[18px] leading-[20px] text-white rounded-[56px] flex justify-center items-center bg-[linear-gradient(255.4deg,#06C270_0%,#0063F7_100%)] inline-block'>
                        Become Our Agent                    
                    </button>
                    <div className=''>
                        Comprehensive Support System
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default Join;