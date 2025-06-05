import React from 'react';
import Navbar from './subc/Navbar';

export default function Header() {
    return (
        <>
            <header className='z-30 absolute w-full lg:pt-6'>
                <div className='flex justify-between bg-GrayP/50 items-center px-[2%] py-4 lg:py-7 lg:w-[90%] lg:px-10 lg:mx-auto lg:backdrop-blur-xl'>
                    <div>
                        <a className='uppercase tracking-wide text-2xl font-light' href=""><span className='text-BlueP font-black'>Faci</span>lities</a>
                    </div>
                    <Navbar />
                </div>
            </header>
        </>
    );
}
