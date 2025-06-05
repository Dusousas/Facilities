import React from 'react';

export default function Footer() {
    return (
        <>
            <section className='py-6 bg-BlueLight'>
                <div className='maxW'>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <a className='uppercase tracking-wide font-light text-4xl text-black' href="/"><span className='text-BlueP font-black'>Faci</span>lities</a>
                        <p className='text-black'>Todos os direitos reservados</p>
                    </div>
                </div>
            </section>
        </>
    );
}