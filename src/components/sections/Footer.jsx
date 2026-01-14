import React from 'react';
import { Phone, MessageCircle, MapPin, Car, Star } from 'lucide-react';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';

export const PaymentMethods = () => {
    const paymentMethods = [
        { name: 'بنكك', icon: '💳' },
        { name: 'بنك الراجحي', icon: '🏦' },
        { name: 'الدفع عند الإستلام', icon: '💵' },
        { name: 'تحويل دولار', icon: '💰' }
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <SectionTitle subtitle="طرق دفع متعددة ومرنة">
                        طرق الدفع
                    </SectionTitle>
                </AnimatedSection>

                <div className="max-w-3xl mx-auto">
                    <AnimatedSection delay={200}>
                        <Card className="p-8">
                            <div className="grid md:grid-cols-2 gap-4">
                                {paymentMethods.map((method, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-slate-900 transition-all hover:shadow-md"
                                    >
                                        <div className="text-3xl">{method.icon}</div>
                                        <span className="font-semibold text-slate-900">{method.name}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export const Testimonials = () => {
    const testimonials = [
        {
            name: 'أحمد محمد',
            location: 'الخرطوم',
            text: 'خدمة ممتازة وقطع أصلية، التوصيل سريع والتعامل محترم جداً',
            rating: 5
        },
        {
            name: 'خالد عبدالله',
            location: 'بورتسودان',
            text: 'أسعار منافسة وجودة عالية، أنصح الجميع بالتعامل معهم',
            rating: 5
        },
        {
            name: 'عمر حسن',
            location: 'مدني',
            text: 'وجدت كل ما أحتاجه من قطع غيار، والدفع عند الاستلام ميزة رائعة',
            rating: 5
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <SectionTitle subtitle="ماذا يقول عملاؤنا">
                        <span className="text-white">آراء العملاء</span>
                    </SectionTitle>
                </AnimatedSection>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, idx) => (
                        <AnimatedSection key={idx} delay={idx * 150}>
                            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 hover:bg-white/15 transition-all">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-slate-200 mb-4 italic">"{testimonial.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">{testimonial.name}</p>
                                        <p className="text-sm text-slate-300">{testimonial.location}</p>
                                    </div>
                                </div>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Contact = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            <div className="container mx-auto px-4">
                <SectionTitle subtitle="نحن هنا لخدمتك">
                    <span className="text-white">تواصل معنا</span>
                </SectionTitle>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Sudan Contact */}
                    <Card className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <MapPin className="w-6 h-6 text-blue-400" />
                            <h3 className="text-xl font-bold">السودان</h3>
                        </div>
                        <div className="space-y-4">
                            <a href="tel:0966141496" className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                                <Phone className="w-5 h-5 text-blue-400" />
                                <span className="font-semibold">0966141496</span>
                            </a>
                            <a href="https://wa.me/249966141496" className="flex items-center gap-3 p-4 bg-green-600 rounded-lg hover:bg-green-700 transition-all">
                                <MessageCircle className="w-5 h-5" />
                                <span className="font-semibold">واتساب السودان</span>
                            </a>
                        </div>
                    </Card>

                    {/* Saudi Contact */}
                    <Card className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <MapPin className="w-6 h-6 text-green-400" />
                            <h3 className="text-xl font-bold">السعودية</h3>
                        </div>
                        <div className="space-y-4">
                            <a href="tel:+966536920677" className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                                <Phone className="w-5 h-5 text-green-400" />
                                <span className="font-semibold">+966 53 692 0677</span>
                            </a>
                            <a href="https://wa.me/966536920677" className="flex items-center gap-3 p-4 bg-green-600 rounded-lg hover:bg-green-700 transition-all">
                                <MessageCircle className="w-5 h-5" />
                                <span className="font-semibold">واتساب السعودية</span>
                            </a>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-400 py-8">
            <div className="container mx-auto px-4 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <Car className="w-6 h-6" />
                    <span className="text-xl font-bold text-white">صديق الطيب (البرنس)</span>
                </div>
                <p className="mb-2">جميع قطع غيار السيارات - جديد • مستعمل • تجاري</p>
                <p className="text-sm">توصيل لكل أنحاء السودان</p>
                <div className="mt-6 pt-6 border-t border-slate-800">
                    <p className="text-sm">© 2025 صديق الطيب (البرنس). جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/249966141496"
            className="fixed bottom-6 left-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 md:hidden"
        >
            <MessageCircle className="w-6 h-6" />
        </a>
    );
};