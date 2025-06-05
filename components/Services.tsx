import React, { useRef, useEffect, useState } from 'react';
import { FaAngleRight, FaCalculator } from 'react-icons/fa';
import { MdArrowRightAlt } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const servicesData = [
    { id: '01', title: 'Jornada de liderança fortalecida', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facilis dolorum alias laborum. Amet quos, maiores sed non debitis accusamus.' },
    { id: '02', title: 'Gestão estratégica eficiente', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facilis dolorum alias laborum. Amet quos, maiores sed non debitis accusamus.' },
    { id: '03', title: 'Consultoria personalizada', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facilis dolorum alias laborum. Amet quos, maiores sed non debitis accusamus.' },
    { id: '04', title: 'Gestão estratégica eficiente', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facilis dolorum alias laborum. Amet quos, maiores sed non debitis accusamus.' },
    { id: '05', title: 'Gestão estratégica eficiente', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facilis dolorum alias laborum. Amet quos, maiores sed non debitis accusamus.' },
];

export default function Services() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [navigation, setNavigation] = useState({ prevEl: null, nextEl: null });

    useEffect(() => {
        setNavigation({
            prevEl: prevRef.current,
            nextEl: nextRef.current
        });
    }, []);

    return (
        <section id='services' className='py-20 bg-white'>
            <div className='maxW'>
                <article className='lg:w-[50%]'>
                    <p className='text-BlueP uppercase font-semibold tracking-wide text-center lg:text-left'>
                        Solução transformadora
                    </p>
                    <h1 className='text-BlueDark text-4xl font-semibold text-center lg:text-left mt-4'>
                        Conheça nossas ofertas de serviços completas
                    </h1>
                    <p className='text-GrayP text-center mt-2 lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit neque facere quae eveniet autem praesentium doloremque quod! Magnam nobis harum provident dicta accusamus eligendi modi illum repellendus in laborum.</p>
                </article>

                <div className='mt-20'>
                    {/* SETAS */}
                    <div className='flex w-full justify-center gap-4 mb-4  lg:justify-end '>
                        <button ref={prevRef}>
                            <FaAngleRight className='rotate-180 text-BlueP text-4xl cursor-pointer' />
                        </button>
                        <button ref={nextRef}>
                            <FaAngleRight className='text-BlueP text-4xl cursor-pointer' />
                        </button>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 4000 }}
                        navigation={navigation}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                    >
                        {servicesData.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className='border border-gray-200 py-10 px-10 h-full'>
                                    <div className='bg-gray-100 flex h-20 w-20 items-center justify-center rounded-full'>
                                        <FaCalculator className='text-BlueP text-5xl' />
                                    </div>
                                    <p className='text-gray-300 font-bold mt-10'>{service.id}</p>
                                    <h1 className='text-BlueDark text-xl font-semibold mt-4'>{service.title}</h1>
                                    <p className='text-BlueDark mt-4'>{service.description}</p>
                                    <div className='mt-4'>
                                        <a className='text-BlueP cursor-pointer uppercase flex gap-2 items-center hover:underline'>
                                            Saiba mais <MdArrowRightAlt className='text-lg' />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
