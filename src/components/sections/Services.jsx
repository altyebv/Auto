import React from 'react';
import { Package, Shield, Wrench, CheckCircle } from 'lucide-react';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';

const Services = () => {
    const services = [
        {
            icon: <Package className="w-8 h-8" />,
            title: 'قطع جديدة أصلية',
            desc: 'قطع غيار جديدة من الوكالة بضمان كامل وجودة عالية',
            features: ['ضمان الوكالة', 'جودة أصلية', 'أسعار منافسة']
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'مستعملة أصلية',
            desc: 'قطع مستوردة أصلية مفحوصة بعناية وبحالة ممتازة',
            features: ['فحص دقيق', 'حالة ممتازة', 'أسعار مخفضة']
        },
        {
            icon: <Wrench className="w-8 h-8" />,
            title: 'بديلة تجارية',
            desc: 'قطع بديلة عالية الجودة بأسعار تنافسية جداً',
            features: ['جودة عالية', 'أسعار ممتازة', 'متوفرة دائماً']
        }
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <SectionTitle subtitle="نوفر لك جميع أنواع القطع">
                        خدماتنا
                    </SectionTitle>
                </AnimatedSection>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, idx) => (
                        <AnimatedSection key={idx} delay={idx * 150}>
                            <Card className="p-8 hover:scale-105 transition-transform h-full">
                                <div className="bg-gradient-to-br from-slate-100 to-slate-200 w-16 h-16 rounded-2xl flex items-center justify-center text-slate-800 mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">{service.desc}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;