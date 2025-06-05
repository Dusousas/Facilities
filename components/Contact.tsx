import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { IoIosPin } from 'react-icons/io';
import Form from './subc/Form';

export default function Contact() {
    return (
        <>
            <section id='contact' className='bgContact py-20'>
                <div className='maxW flex flex-col lg:flex-row gap-20'>

                    <article className='lg:w-[50%]'>
                        <p className='text-BlueP uppercase font-semibold tracking-wide text-center lg:text-left'>Entre em contato</p>
                        <h1 className='text-white text-4xl font-semibold text-center lg:text-left mt-4'>Estamos à sua disposição</h1>
                        <p className='text-white text-center mt-4 lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorum iusto, quasi totam reprehenderit aspernatur nostrum, harum excepturi aliquid illo sit quaerat soluta ea dicta incidunt quam ratione culpa numquam!</p>
                      <div className='mt-6 flex flex-col gap-4'>
                            <p className='flex items-center gap-4 uppercase text-white'><IoIosPin className='bg-BlueDark text-white text-4xl px-2' />Avenida das Nações unidas, 276 - Bela Vista. São Paulo - SP</p>
                            <p className='flex items-center gap-4 uppercase text-white'><FaPhone className='bg-BlueDark text-white text-4xl px-2' />11 1234 - 1234</p>
                        </div>

                        <div className='flex justify-center mt-8 gap-4 lg:justify-start'>
                            <div className='bg-BlueDark cursor-pointer p-2 transition-all duration-300 hover:border-pink-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-pink-500/25 group'>
                                <FaInstagram className='text-gray-200 text-lg group-hover:text-white transition-colors duration-300' />
                            </div>

                            <div className='bg-BlueDark cursor-pointer p-2 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25 group'>
                                <FaFacebook className='text-gray-200 text-lg group-hover:text-white transition-colors duration-300' />
                            </div>

                            <div className='bg-BlueDark cursor-pointer p-2 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/25 group'>
                                <FaWhatsapp className='text-gray-200 text-lg group-hover:text-white transition-colors duration-300' />
                            </div>
                        </div>
                    </article>

                    <article>
                        <Form />
                    </article>
                </div>
            </section>
        </>
    );
}