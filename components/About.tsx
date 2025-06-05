import React from 'react';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import ButtonDark from './subc/ButtonDark';

export default function About() {
    return (
        <>
            <section id='about' className='bg-BlueLight py-20'>
                <div className='maxW flex flex-col items-center justify-center gap-20 lg:flex-row'>

                    <article className='max-w-[400px] relative lg:w-1/2'>
                        <img className='' src="/about-1.webp" alt="" />
                        <div className='flex justify-center gap-10 bg-GrayP/50 items-center px-[2%] py-4 lg:backdrop-blur-xl absolute bottom-4 w-[90%] translate-x-[-50%] left-[50%]'>
                            <img src="/signature.png" alt="" />
                            <div className='border-1 h-[50px] text-gray-500' />
                            <div className=''>
                                <h1 className='text-xl font-semibold text-white'>Rodrigo Freitas</h1>
                                <p className='text-sm lg:text-gray-500 text-white'>Co. Founder</p>
                            </div>
                        </div>
                    </article>

                    <article className='flex flex-col gap-6 lg:w-1/3'>
                        <p className='text-BlueP uppercase font-semibold tracking-wide text-center lg:text-left'>Agência Número #1 em Soluções</p>
                        <h1 className='text-BlueDark text-4xl font-semibold text-center lg:text-left'>Impulsionando a visão do seu negócio</h1>
                        <p className='text-GrayP text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit neque facere quae eveniet autem praesentium doloremque quod! Magnam nobis harum provident dicta accusamus eligendi modi illum repellendus in laborum.</p>
                        <div className='mx-auto lg:mx-0'>
                            <p className='flex gap-2 text-BlueDark font-semibold'><IoCheckmarkDoneOutline className='text-BlueP text-2xl' />Especialização e experiência.</p>
                            <p className='flex gap-2 text-BlueDark font-semibold'><IoCheckmarkDoneOutline className='text-BlueP text-2xl' />Compromisso com a excelência.</p>
                            <p className='flex gap-2 text-BlueDark font-semibold'><IoCheckmarkDoneOutline className='text-BlueP text-2xl' />Foco no cliente.</p>
                        </div>
                        <div className='mx-auto lg:mx-0'>
                            <ButtonDark />
                        </div>
                    </article>

                    <article className='bg-white py-23 px-18 rounded-full'>
                        <div className='flex'>
                            <h1 className='text-9xl text-BlueP'>99</h1>
                            <p className='text-BlueP text-5xl'>+</p>
                        </div>
                        <p className='text-center text-BlueP text-xl uppercase mt-2 tracking-wider'>Clientes felizes</p>
                    </article>



                </div>
            </section>
        </>
    );
}