import React from 'react';
import { Star } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';

const Products = () => {
    const sampleProducts = [
        {
            id: 1,
            name: 'فلتر زيت أصلي تويوتا',
            brand: 'تويوتا',
            condition: 'جديد',
            price: '45,000',
            image: '🔧',
            rating: 5,
            stock: 'متوفر'
        },
        {
            id: 2,
            name: 'كراسي ماكينة هيونداي',
            brand: 'هيونداي',
            condition: 'مستعمل أصلي',
            price: '120,000',
            image: '⚙️',
            rating: 5,
            stock: 'متوفر'
        },
        {
            id: 3,
            name: 'طرمبة ماء كيا أصلية',
            brand: 'كيا',
            condition: 'جديد',
            price: '85,000',
            image: '💧',
            rating: 5,
            stock: 'متوفر'
        },
        {
            id: 4,
            name: 'فحمات فرامل نيسان',
            brand: 'نيسان',
            condition: 'تجاري',
            price: '55,000',
            image: '🛞',
            rating: 4,
            stock: 'متوفر'
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <SectionTitle subtitle="أحدث القطع المتوفرة">
                        منتجات مميزة
                    </SectionTitle>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sampleProducts.map((product, idx) => (
                        <AnimatedSection key={product.id} delay={idx * 100}>
                            <Card className="overflow-hidden hover:scale-105 transition-transform group">
                                <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-48 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                                    {product.image}
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                            {product.brand}
                                        </span>
                                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                            {product.condition}
                                        </span>
                                        <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                                            {product.stock}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">{product.name}</h3>
                                    <div className="flex items-center gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${
                                                    i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <p className="text-2xl font-bold text-slate-900">{product.price}</p>
                                            <span className="text-sm text-slate-600">جنيه سوداني</span>
                                        </div>
                                    </div>
                                    <a href="https://wa.me/249966141496" className="w-full block">
                                        <Button variant="primary" className="w-full">
                                            استفسر الآن
                                        </Button>
                                    </a>
                                </div>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;