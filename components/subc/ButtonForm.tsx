import React from 'react';

interface ExploreButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const ExploreButton: React.FC<ExploreButtonProps> = ({
    onClick,
    disabled = false,
    className = "",
    type = "submit"
}) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button type={type} onClick={handleClick} disabled={disabled}
            className={`group relative flex cursor-pointer justify-center gap-2 items-center  shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold px-6 py-2 overflow-hidden border-2 border-gray-50 rounded-full transition-all duration-300 hover:text-gray-50 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap ${className}`}>
            <div className="absolute inset-0 bg-BlueP rounded-full w-0 group-hover:w-full transition-all duration-700 ease-out -z-10 origin-left" />
            <p className="relative z-10 text-sm text-BlueDark group-hover:text-white">Enviar</p>

            <svg className="relative z-10 w-7 h-7 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
                <path className="fill-gray-800 group-hover:fill-gray-800" d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" />
            </svg>
        </button>
    );
};

export default function Button() {
    const handleExploreClick = (): void => {
        const phoneNumber = "5511999999999";
        const message = "Olá! Gostaria de uma consultoria grátis.";
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            <ExploreButton onClick={handleExploreClick} type="button" />
        </>
    );
}