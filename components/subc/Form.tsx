import React from 'react';
import ButtonForm from './ButtonForm';

export default function Form() {
    return (
        <>
            <form className='bg-[#1D283C]/70 py-20 px-4 lg:px-20' action="">
                <h1 className='text-2xl font-semibold text-white'>Fale conosco ou visite nosso espaço.</h1>

                <div className='flex flex-col gap-10 mt-10 w-full lg:flex-row'>
                    <button className='text-sm bg-[#313C4E] px-3 py-3 text-white lg:w-[50%]'>suporte@facilities.com</button>
                    <button className='text-sm bg-[#313C4E] px-3 py-3 text-white lg:w-[50%]'>Brotas, SP 17380-000</button>
                </div>

                <div className='mt-10 w-full flex flex-col gap-10 lg:flex-row'>
                    <input className='border-b border-BlueLight text-white px-4 py-3 outline-0 lg:w-[50%]' placeholder='Nome Completo*' type="text" name="" id="" />
                    <input className='border-b border-BlueLight text-white px-4 py-3 outline-0 lg:w-[50%]' placeholder='Numero de Telefone*' type="text" name="" id="" />
                </div>

                <input className='border-b border-BlueLight px-4 text-white py-3 outline-0 w-full mt-10' placeholder='Seu E-mail*' type="text" name="" id="" />
                <textarea className='border-b border-BlueLight px-4 text-white py-3 outline-0 w-full mt-10 resize-none' placeholder='Sua mensagem*' rows={4} name="" id=""></textarea>

                <div className='mt-6'>
                    <ButtonForm />
                </div>
            </form>
        </>
    );
}