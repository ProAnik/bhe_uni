import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-black w-full mt-14 md:mt-24 ">
            <div className="max-w-[1240px] mx-auto pt-14 md:pt-24 px-5 md:px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-5 w-full">
                    <div className="text-white col-span-3">
                        <div className="font-[Kanit] font-normal text-[14px] leading-[140%]">
                            11 Beaufort Court, Admirals Way, Canary Wharf, London United Kingdom E149XL
                        </div>

                        <div className="mt-5 flex flex-col gap-3">
                            <div className="flex gap-3">
                                <img src="/assets/images/icon/call.svg" alt="Logo" />
                                <div>+44 (0) 2033 189 380</div>
                            </div>

                            <div className="flex gap-3">
                                <img src="/assets/images/icon/mail.svg" alt="Logo" />
                                <div>ask@bheuni.io</div>
                            </div>

                            <div className="flex gap-3">
                                <img src="/assets/images/icon/whatsapp.svg" alt="Logo" />
                                <div>+447305319797</div>
                            </div>
                        </div>

                        <div className="flex gap-3 my-10">
                            <a href="#" >
                                <img src="/assets/images/icon/fb.svg" alt="Facebook" />
                            </a>
                            <a href="#" >
                                <img src="/assets/images/icon/linkdin.svg" alt="Facebook" />
                            </a>
                            <a href="#" >
                                <img src="/assets/images/icon/youtube.svg" alt="youtube" />
                            </a>
                            <a href="#" >
                                <img src="/assets/images/icon/insta.svg" alt="youtube" />
                            </a>
                            <a href="#" >
                                <img src="/assets/images/icon/wp.svg" alt="youtube" />
                            </a>
                            <a href="#" >
                                <img src="/assets/images/icon/tiktok.svg" alt="youtube" />
                            </a>
                            <a href="#" >
                                <img src="/assets/images/icon/x.svg" alt="youtube" />
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2" >
                        <div className="font-[Kanit] font-semibold text-[20px] leading-[100%] text-[#F37124]">
                            Study Destinations
                        </div>
                        <div className="text-white mt-5 flex flex-col gap-2">
                            <a className="font-[Kanit] font-normal text-[16px] leading-[140%]">
                                Study in UK
                            </a>
                            <a className="font-[Kanit] font-normal text-[16px] leading-[140%]">
                                Study in USA
                            </a>
                            <a className="font-[Kanit] font-normal text-[16px] leading-[140%]">
                                Study in Canada
                            </a>
                            <a className="font-[Kanit] font-normal text-[16px] leading-[140%]">
                                Study in Australia
                            </a>
                            <a className="font-[Kanit] font-normal text-[16px] leading-[140%]">
                                Study in Ireland
                            </a>
                            <a className="font-[Kanit] font-normal text-[16px] leading-[140%]">
                                Study in Newzealand
                            </a>
                        </div>

                    </div>
                    <div className="" >
                        <div className="font-[Kanit] font-semibold text-[20px] leading-[100%] text-[#F37124]">
                            About
                        </div>
                        <div className="text-white mt-5 flex flex-col gap-2">
                            <a className="font-[Kanit] font-normal text-[16px] leading-[140%]">
                                We Are
                            </a>
                            <a className="font-[Kanit] font-normal text-[16px] leading-[140%]">
                                Our Partner
                            </a>
                            <a className="font-[Kanit] font-normal text-[16px] leading-[140%]">
                                Our Service
                            </a>
                            <a className="font-[Kanit] font-normal text-[16px] leading-[140%]">
                                Blog
                            </a>
                            <a className="font-[Kanit] font-normal text-[16px] leading-[140%]">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="font-[Kanit] font-semibold text-[20px] leading-[100%] text-[#F37124]">
                            Links
                        </div>
                        <div className="text-white mt-5 flex flex-col gap-2">
                            <a className="font-[Kanit] font-normal text-[16px] leading-[140%]">
                                Refer Your Friend And Family
                            </a>
                            <a className="font-[Kanit] font-normal text-[16px] leading-[140%]">
                                Accommodation
                            </a>
                            <a className="font-[Kanit] font-normal text-[16px] leading-[140%]">
                                Become an agent
                            </a>
                            <a className="font-[Kanit] font-normal text-[16px] leading-[140%]">
                                Agent / Staff Login
                            </a>
                            <a className="font-[Kanit] font-normal text-[16px] leading-[140%]">
                                Support
                            </a>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="font-[Kanit] font-semibold text-[20px] leading-[100%] text-[#F37124]">
                            Privacy Policy
                        </div>
                        <div className="text-white mt-5 flex flex-col gap-2">
                            <a className="font-[Kanit] font-normal text-[16px] leading-[140%]">
                                GDPR Policy
                            </a>
                            <a className="font-[Kanit] font-normal text-[16px] leading-[140%]">
                                Privacy Policy
                            </a>
                        </div>

                        <div className="font-[Kanit] font-semibold text-[20px] leading-[100%] text-[#F37124] mt-5">
                            Data Protection
                        </div>
                        <div className="text-white mt-5 flex flex-col gap-2">
                            <img src="/assets/images/dma.png" className="h-[45px] w-[125px]" alt="Data Protection" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#0F1017] w-full px-5 md:px-0">

                <div className="flex md:flex-row flex-col gap-4 pt-5 justify-center items-center font-[Kanit] font-semibold text-[20px] leading-[100%]">
                    <a className=" text-[#F37124]">London</a>
                    <div className="text-[#515251] h-[24px] border-1 ">
                    </div>
                    <a className=" text-[#F37124]">Manchester</a>
                    <div className="text-[#515251] h-[24px] border-1 ">
                    </div>
                    <a className=" text-[#F37124]">Dhaka</a>
                    <div className="text-[#515251] h-[24px] border-1 ">
                    </div>
                    <a className=" text-[#F37124]">Sylhet</a>
                </div>

                <div className="max-w-[1240px] py-5 mx-auto flex justify-between">
                    <img src="assets/images/logofoot.svg"/>
                    <div>
                                            <div className="flex md:flex-row flex-col gap-3">
                        <img src="/assets/images/icon/iosstore.svg" />
                        <img src="/assets/images/icon/playstore.svg" />
                    </div>
                    </div>

                </div>

                <div className="border-b-1 max-w-[1240px] mx-auto w-full border-white">

                </div>

                <div className="text-white text-center font-[Kanit] font-normal text-[14px] leading-[100%] text-center py-5">
                    © Copyright {year}. All Rights Reserved. Developed by Digital Planet
                </div>


            </div>
        </footer>
    );
}
