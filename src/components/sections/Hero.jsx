import React from 'react';
import { MessageCircle, Truck, Shield, Clock, DollarSign } from 'lucide-react';
import Button from '../common/Button';

const Hero = () => {
    const features = [
        { icon: <Truck className="w-6 h-6" />, text: 'توصيل سريع', desc: 'لجميع أنحاء السودان' },
        { icon: <Shield className="w-6 h-6" />, text: 'ضمان موثوق', desc: 'على جميع القطع' },
        { icon: <Clock className="w-6 h-6" />, text: '24-72 ساعة', desc: 'وقت التوصيل' },
        { icon: <DollarSign className="w-6 h-6" />, text: 'أسعار تنافسية', desc: 'أفضل الأسعار' }
    ];

    return (
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6 animate-fade-in">
                        <p className="text-sm md:text-base">🚗 جميع قطع غيار السيارات في مكان واحد</p>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        قطع غيار أصلية
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            بأفضل الأسعار
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        نوفر قطع غيار جديدة ومستعملة أصلية لجميع أنواع السيارات
                        <br />
                        مع توصيل سريع لكل أنحاء السودان
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        <a href="https://wa.me/249966141496" className="w-full sm:w-auto">
                            <Button variant="whatsapp" className="w-full text-lg">
                                <MessageCircle className="w-6 h-6" />
                                واتساب السودان
                            </Button>
                        </a>
                        <a href="https://wa.me/966536920677" className="w-full sm:w-auto">
                            <Button variant="secondary" className="w-full text-lg">
                                <MessageCircle className="w-6 h-6" />
                                واتساب السعودية
                            </Button>
                        </a>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
                        {features.map((feature, idx) => (
                            <div 
                                key={idx} 
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all animate-fade-in"
                                style={{ animationDelay: `${0.8 + idx * 0.1}s` }}
                            >
                                <div className="text-blue-400 mb-2 flex justify-center">{feature.icon}</div>
                                <p className="text-sm font-semibold text-white">{feature.text}</p>
                                <p className="text-xs text-slate-300">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;