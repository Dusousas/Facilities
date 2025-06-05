import React from 'react';

export default function Companies() {
    return (
        <>
            <section className='bg-white pb-20'>
                <div className='maxW flex flex-col gap-10'>
                    
                    <article className='flex items-center justify-center'>
                        <div className= 'border-BlueLight h-0 lg:w-[25%] lg:border' />
                        <p className='bg-BlueLight py-1 px-3 rounded-2xl font-bold inline mx-auto text-BlueDark text-center'>
                            Faça parte das mais de 100 empresas que já se beneficiam da Facilities
                        </p>
                        <div className='border-BlueLight h-0 lg:w-[25%] lg:border' />
                    </article>

                    <article className='overflow-hidden'>
                        <div className='flex gap-10 animate-slide'>
                            {/* Repetir as logos para efeito de loop contínuo */}
                            {Array(2).fill(0).map((_, idx) => (
                                <React.Fragment key={idx}>
                                    <img className='bg-BlueLight p-3 w-[200px]' src="/logoipsum-375.png" alt="" />
                                    <img className='bg-BlueLight p-3 w-[200px]' src="/logoipsum-375.png" alt="" />
                                    <img className='bg-BlueLight p-3 w-[200px]' src="/logoipsum-375.png" alt="" />
                                    <img className='bg-BlueLight p-3 w-[200px]' src="/logoipsum-375.png" alt="" />
                                    <img className='bg-BlueLight p-3 w-[200px]' src="/logoipsum-375.png" alt="" />
                                    <img className='bg-BlueLight p-3 w-[200px]' src="/logoipsum-375.png" alt="" />
                                </React.Fragment>
                            ))}
                        </div>
                    </article>

                </div>
            </section>

            <style jsx>{`
                @keyframes slide {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-slide {
                    width: max-content;
                    animation: slide 20s linear infinite;
                }
            `}</style>
        </>
    );
}
