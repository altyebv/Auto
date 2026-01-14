import React, { useState } from 'react';
import { Car } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';

export const Brands = () => {
    const brands = [
        { name: 'تويوتا', icon: '🚗' },
        { name: 'هيونداي', icon: '🚙' },
        { name: 'كيا', icon: '🚕' },
        { name: 'نيسان', icon: '🚐' },
        { name: 'ميتسوبيشي', icon: '🚗' },
        { name: 'شيفروليه', icon: '🚙' }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <SectionTitle subtitle="نوفر قطع غيار لجميع الماركات">
                        الماركات المتوفرة
                    </SectionTitle>
                </AnimatedSection>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {brands.map((brand, idx) => (
                        <AnimatedSection key={idx} delay={idx * 100}>
                            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 text-center hover:shadow-xl transition-all cursor-pointer border-2 border-slate-200 hover:border-slate-900 group">
                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{brand.icon}</div>
                                <p className="font-bold text-slate-900">{brand.name}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Categories = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { icon: '🔧', name: 'محرك', nameEn: 'engine', desc: 'قطع المحرك والإكسسوارات' },
        { icon: '🛞', name: 'فرامل', nameEn: 'brakes', desc: 'فحمات ودسكات' },
        { icon: '❄️', name: 'مكيف', nameEn: 'ac', desc: 'نظام التكييف' },
        { icon: '⚡', name: 'كهرباء', nameEn: 'electrical', desc: 'بطاريات وكهرباء' },
        { icon: '🔩', name: 'مساعدات', nameEn: 'suspension', desc: 'نظام التعليق' },
        { icon: '🛢️', name: 'زيوت', nameEn: 'oils', desc: 'زيوت وفلاتر' }
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <SectionTitle subtitle="ابحث حسب نوع القطعة">
                        الأقسام
                    </SectionTitle>
                </AnimatedSection>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((cat, idx) => (
                        <AnimatedSection key={idx} delay={idx * 100}>
                            <button
                                onClick={() => setActiveCategory(cat.nameEn)}
                                className={`p-6 rounded-xl text-center transition-all hover:scale-105 w-full ${
                                    activeCategory === cat.nameEn
                                        ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl'
                                        : 'bg-white hover:shadow-lg'
                                }`}
                            >
                                <div className="text-4xl mb-3">{cat.icon}</div>
                                <p className="font-semibold mb-1">{cat.name}</p>
                                <p className={`text-xs ${activeCategory === cat.nameEn ? 'text-slate-300' : 'text-slate-500'}`}>
                                    {cat.desc}
                                </p>
                            </button>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};