import React from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Team() {
    return (
        <>
            <section className='py-20 bg-BlueLight'>
                <div className='maxW'>
                    <article className='lg:w-[50%]'>
                        <p className='text-BlueP uppercase font-semibold tracking-wide text-center lg:text-left'>Conheça nosso time</p>
                        <h1 className='text-BlueDark text-4xl font-semibold text-center lg:text-left mt-4'>Profissionais especialistas </h1>
                        <p className='text-GrayP text-center mt-2 lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit neque facere quae eveniet autem praesentium.</p>
                    </article>

                    <article className='mt-20 flex flex-col gap-10 lg:flex-row'>
                        <motion.div className='bgTeam1  h-[500px] relative overflow-hidden lg:w-[25%]' initial="hidden" whileHover="visible">
                            <div className='flex w-full h-full flex-col justify-end'>
                                <h1 className='bg-BlueDark pt-4 px-4 uppercase font-semibold'>Eduardo Sousa</h1>
                                <p className='bg-BlueDark pb-4 px-4 text-sm uppercase'>Advogado</p>
                            </div>
                            {/* REDES SOCIAIS */}
                            <motion.div className='absolute flex flex-col gap-4 right-4 bottom-4' variants={{
                                hidden: { x: 60, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
                            }}>
                                <FaInstagramSquare className='text-xl' />
                                <FaFacebook className='text-xl' />
                                <FaLinkedin className='text-xl' />
                                <FaWhatsappSquare className='text-xl' />
                            </motion.div>
                        </motion.div>

                        <motion.div className='bgTeam1  h-[500px] relative overflow-hidden lg:w-[25%]' initial="hidden" whileHover="visible">
                            <div className='flex w-full h-full flex-col justify-end'>
                                <h1 className='bg-BlueDark pt-4 px-4 uppercase font-semibold'>Eduardo Sousa</h1>
                                <p className='bg-BlueDark pb-4 px-4 text-sm uppercase'>Advogado</p>
                            </div>
                            {/* REDES SOCIAIS */}
                            <motion.div className='absolute flex flex-col gap-4 right-4 bottom-4' variants={{
                                hidden: { x: 60, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
                            }}>
                                <FaInstagramSquare className='text-xl' />
                                <FaFacebook className='text-xl' />
                                <FaLinkedin className='text-xl' />
                                <FaWhatsappSquare className='text-xl' />
                            </motion.div>
                        </motion.div>

                        <motion.div className='bgTeam1  h-[500px] relative overflow-hidden lg:w-[25%]' initial="hidden" whileHover="visible">
                            <div className='flex w-full h-full flex-col justify-end'>
                                <h1 className='bg-BlueDark pt-4 px-4 uppercase font-semibold'>Eduardo Sousa</h1>
                                <p className='bg-BlueDark pb-4 px-4 text-sm uppercase'>Advogado</p>
                            </div>
                            {/* REDES SOCIAIS */}
                            <motion.div className='absolute flex flex-col gap-4 right-4 bottom-4' variants={{
                                hidden: { x: 60, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
                            }}>
                                <FaInstagramSquare className='text-xl' />
                                <FaFacebook className='text-xl' />
                                <FaLinkedin className='text-xl' />
                                <FaWhatsappSquare className='text-xl' />
                            </motion.div>
                        </motion.div>

                        <motion.div className='bgTeam1  h-[500px] relative overflow-hidden lg:w-[25%]' initial="hidden" whileHover="visible">
                            <div className='flex w-full h-full flex-col justify-end'>
                                <h1 className='bg-BlueDark pt-4 px-4 uppercase font-semibold'>Eduardo Sousa</h1>
                                <p className='bg-BlueDark pb-4 px-4 text-sm uppercase'>Advogado</p>
                            </div>
                            {/* REDES SOCIAIS */}
                            <motion.div className='absolute flex flex-col gap-4 right-4 bottom-4' variants={{
                                hidden: { x: 60, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
                            }}>
                                <FaInstagramSquare className='text-xl' />
                                <FaFacebook className='text-xl' />
                                <FaLinkedin className='text-xl' />
                                <FaWhatsappSquare className='text-xl' />
                            </motion.div>
                        </motion.div>


                    </article>
                </div>
            </section>
        </>
    );
}