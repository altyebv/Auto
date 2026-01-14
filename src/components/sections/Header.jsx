import React from 'react';
import { Car, MessageCircle } from 'lucide-react';
import Button from '../common/Button';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-white text-slate-900 p-2 rounded-lg">
                            <Car className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold">صديق الطيب</h1>
                            <p className="text-slate-300 text-sm">(البرنس) - قطع غيار السيارات</p>
                        </div>
                    </div>
                    <a href="https://wa.me/249966141496" className="hidden md:flex">
                        <Button variant="whatsapp">
                            <MessageCircle className="w-5 h-5" />
                            تواصل معنا
                        </Button>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;