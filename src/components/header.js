import React from 'react';

const Header = () => {
    return (
        <header className="h-24 w-full bg-white shadow-[0px_5px_20px_0px_#0000000D]">
            <div className='px-5 md:px-5 w-full max-w-[1240px] mx-auto flex items-center justify-between'>

            <img className="py-6" src="assets/images/logo.svg" alt="Logo" />
            <nav className="h-full items-center gap-4 hidden lg:flex">
                <a href="#" className="font-kanit font-normal text-base leading-[1.5] tracking-normal hover:text-[#F37124]">Home</a>
                <div className="flex items-center gap-1">
                    <a href="#" className="font-kanit font-normal text-base leading-[1.5] tracking-normal hover:text-[#F37124]">About Us</a>
                    <img src="assets/images/icon/dropdown.svg" alt="Dropdown" />
                </div>
                <div className="flex items-center gap-1">
                    <a href="#" className="font-kanit font-normal text-base leading-[1.5] tracking-normal hover:text-[#F37124]">Study Abroad</a>
                    <img src="assets/images/icon/dropdown.svg" alt="Dropdown" />
                </div>
                <div className="flex items-center gap-1">
                    <a href="#" className="font-kanit font-normal text-base leading-[1.5] tracking-normal hover:text-[#F37124]">Scholarships</a>
                    <img src="assets/images/icon/dropdown.svg" alt="Dropdown" />
                </div>
                <div className="flex items-center gap-1">
                    <a href="#" className="font-kanit font-normal text-base leading-[1.5] tracking-normal hover:text-[#F37124]">Services</a>
                    <img src="assets/images/icon/dropdown.svg" alt="Dropdown" />
                </div>
                <div className="flex items-center gap-1">
                    <a href="#" className="font-kanit font-normal text-base leading-[1.5] tracking-normal hover:text-[#F37124]">Locations</a>
                    <img src="assets/images/icon/dropdown.svg" alt="Dropdown" />
                </div>
                <a href="#" className="font-kanit font-normal text-base leading-[1.5] tracking-normal hover:text-[#F37124]">Blog</a>
                <a href="#" className="font-kanit font-normal text-base leading-[1.5] tracking-normal hover:text-[#F37124]">Contact Us</a>
            </nav>
            <div
                className="
                    w-[156px] h-[48px] pt-4 pr-[24px] pb-4 pl-[24px] gap-[10px]
                    rotate-0 opacity-100 rounded-[45px]
                    bg-[url('/assets/images/backgrounds/user_bg.png')]
                    bg-cover bg-center items-center flex justify-between gap-2
                "
            >
                <img src="assets/images/icon/search.svg" alt="Search" />
                <img src="assets/images/icon/favour_file.svg" alt="Favour File" />
                <img src="assets/images/icon/user.svg" alt="User" />
            </div>
            </div>

        </header>
    );
};

export default Header;
