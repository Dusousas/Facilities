'use client';

import React from 'react';
import { FaAngleRight, FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
    id: number;
    text: string;
    name: string;
    role: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        text: 'Excelente trabalho! Meu site ficou incrível e super otimizado.',
        name: 'Eduardo Sousa',
        role: 'Agência Youon',
        image: '/h1-test-1.webp'
    },
    {
        id: 2,
        text: 'Profissionalismo e entrega rápida, recomendo demais.',
        name: 'Maria Silva',
        role: 'Empreendedora',
        image: '/h1-test-1.webp'
    },
    {
        id: 3,
        text: 'Transformou a minha ideia em um site moderno e funcional.',
        name: 'João Pereira',
        role: 'Freelancer',
        image: '/h1-test-1.webp'
    }
];

export default function Feedback() {
    return (
        <section className='bg-white py-20'>
            <div className='pb-20'>
                <p className='text-BlueP uppercase font-semibold tracking-wide text-center lg:text-left maxW'>Feedback de nossos clientes</p>
            </div>

            <div className='maxW flex flex-col justify-center lg:flex-row items-center gap-20'>
                <article className='bgFeedback w-full h-[600px] relative lg:w-[45%]'>
                    <div className='absolute bottom-8 left-8 bg-[#364052]/50 backdrop-blur-xl px-10 py-10'>
                        <h1 className='uppercase font-semibold text-white text-5xl'>100+</h1>
                        <p className='text-sm uppercase mt-2 text-white'>Clientes felizes</p>
                    </div>
                </article>

                <article className='lg:w-[50%] w-full'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        className='pb-10'
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div>
                                    <FaQuoteLeft className='text-7xl text-BlueP mx-auto lg:mx-0' />
                                    <p className='text-BlueDark text-xl mt-10 text-center lg:text-left'>{testimonial.text}</p>

                                    <div className='mt-10 flex items-center gap-4 justify-center lg:justify-start'>
                                        <img className='rounded-full w-16 h-16 object-cover' src={testimonial.image} alt={testimonial.name} />
                                        <div>
                                            <h1 className='uppercase text-BlueDark font-bold text-lg'>{testimonial.name}</h1>
                                            <p className='text-GrayP uppercase text-sm'>{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </article>

            </div>
        </section>
    );
}
