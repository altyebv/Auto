import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 justify-center";
    const variants = {
        primary: "bg-gradient-to-r from-slate-800 to-slate-900 text-white hover:from-slate-700 hover:to-slate-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
        secondary: "bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-50 transform hover:-translate-y-0.5",
        whatsapp: "bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;