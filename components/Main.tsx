import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import Button from './subc/Button';

export default function Main() {
    return (
        <>
            <section id='home' className='bgMain relative w-full top-0'>
                <div className='absolute inset-0 bg-black/25' />
                <div className='maxW relative z-10 h-full'>
                    <article className='h-full w-full flex flex-col items-center justify-center lg:items-start lg:w-[70%]'>
                        <p className='text-[12px] bg-GrayP/50 py-1 px-3 rounded-2xl uppercase'>Agência Número #1 em Soluções</p>
                        <h1 className='mt-4 font-semibold text-center text-4xl lg:text-6xl lg:text-left'>Transforme o seu negócio com uma consultoria especializada.</h1>
                        <div className='mt-4'>
                            <Button />
                        </div>

                        <div className='absolute bottom-0 right-0 bg-[#364052]/50 backdrop-blur-xl py-2 lg:w-[500px] lg:px-10 lg:py-10'>
                            <div className='flex justify-center lg:justify-start'>
                                <img className='w-[40px] lg:w-[80px]' src="/icon-1.svg" alt="" />
                            </div>
                            <p className='mt-2 text-center text-sm lg:mt-6 lg:text-left lg:text-md'>Transforme o crescimento do seu negócio com nossos serviços de consultoria especializada, oferecidos por uma equipe de consultores experientes e com expertise incomparável.</p>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}