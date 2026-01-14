import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, Package, Shield, Truck, Wrench, Car, DollarSign, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Reusable Components
const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 justify-center";
    const variants = {
        primary: "bg-gradient-to-r from-slate-800 to-slate-900 text-white hover:from-slate-700 hover:to-slate-800 shadow-lg hover:shadow-xl",
        secondary: "bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-50",
        whatsapp: "bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl"
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

const SectionTitle = ({ children, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{children}</h2>
        {subtitle && <p className="text-slate-600 text-lg">{subtitle}</p>}
    </div>
);

const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}>
        {children}
    </div>
);

// Carousel Component
const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    // Placeholder images - replace with actual image paths
    const images = [
        { id: 1, url: '/images/part1.jpg', alt: 'قطعة غيار 1', placeholder: '🔧' },
        { id: 2, url: '/images/part2.jpg', alt: 'قطعة غيار 2', placeholder: '⚙️' },
        { id: 3, url: '/images/part3.jpg', alt: 'قطعة غيار 3', placeholder: '🛞' },
        { id: 4, url: '/images/part4.jpg', alt: 'قطعة غيار 4', placeholder: '💧' },
        { id: 5, url: '/images/part5.jpg', alt: 'قطعة غيار 5', placeholder: '🔩' }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (carouselRef.current) {
            gsap.fromTo(
                carouselRef.current,
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
            );
        }
    }, [currentIndex]);

    return (
        <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
                <div ref={carouselRef} className="relative aspect-video bg-gradient-to-br from-slate-200 to-slate-300">
                    {/* Placeholder - Replace with actual images */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-9xl mb-4">{images[currentIndex].placeholder}</div>
                            <p className="text-2xl font-bold text-slate-700">{images[currentIndex].alt}</p>
                            <p className="text-slate-500 mt-2">استبدل بصورك الحقيقية في: {images[currentIndex].url}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            >
                <ChevronRight className="w-6 h-6 text-slate-900" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            >
                <ChevronLeft className="w-6 h-6 text-slate-900" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-slate-900 w-8' : 'bg-slate-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

// Main App Component
export default function SilverAutoPartsLanding() {
    const [activeCategory, setActiveCategory] = useState('all');
    const heroRef = useRef(null);
    const servicesRef = useRef(null);
    const brandsRef = useRef(null);
    const categoriesRef = useRef(null);

    // GSAP Animations
    useEffect(() => {
        // Hero Animation
        const heroTimeline = gsap.timeline();
        heroTimeline
            .from('.hero-badge', { opacity: 0, y: -30, duration: 0.6, ease: 'back.out' })
            .from('.hero-title', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.3')
            .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
            .from('.hero-buttons', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
            .from('.hero-stats', { opacity: 0, y: 30, stagger: 0.1, duration: 0.6 }, '-=0.3');

        // Services Cards Animation
        gsap.from('.service-card', {
            scrollTrigger: {
                trigger: servicesRef.current,
                start: 'top 80%',
            },
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out'
        });

        // Brands Animation
        gsap.from('.brand-card', {
            scrollTrigger: {
                trigger: brandsRef.current,
                start: 'top 80%',
            },
            opacity: 0,
            scale: 0.8,
            stagger: 0.1,
            duration: 0.6,
            ease: 'back.out'
        });

        // Categories Animation
        gsap.from('.category-card', {
            scrollTrigger: {
                trigger: categoriesRef.current,
                start: 'top 80%',
            },
            opacity: 0,
            rotateY: 90,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power2.out'
        });

        // Floating Animation for Icons
        gsap.to('.float-icon', {
            y: -10,
            duration: 2,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
            stagger: 0.2
        });

    }, []);

    const brands = [
        'تويوتا', 'هيونداي', 'كيا', 'نيسان', 'ميتسوبيشي', 'شيفروليه'
    ];

    const categories = [
        { icon: '🔧', name: 'محرك', nameEn: 'engine' },
        { icon: '🛞', name: 'فرامل', nameEn: 'brakes' },
        { icon: '❄️', name: 'مكيف', nameEn: 'ac' },
        { icon: '⚡', name: 'كهرباء', nameEn: 'electrical' },
        { icon: '🔩', name: 'مساعدات', nameEn: 'suspension' },
        { icon: '🛢️', name: 'زيوت', nameEn: 'oils' }
    ];

    const services = [
        {
            icon: <Package className="w-8 h-8" />,
            title: 'قطع جديدة',
            desc: 'قطع غيار أصلية جديدة بأفضل الأسعار'
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'مستعملة أصلية',
            desc: 'قطع مستوردة أصلية بحالة ممتازة'
        },
        {
            icon: <Wrench className="w-8 h-8" />,
            title: 'بديلة تجارية',
            desc: 'قطع بديلة بجودة عالية وأسعار منافسة'
        }
    ];

    const paymentMethods = [
        { name: 'بنكك', available: true },
        { name: 'بنك الراجحي', available: true },
        { name: 'الدفع عند الإستلام', available: true },
        { name: 'تحويل دولار', available: true }
    ];

    const features = [
        { icon: <Truck className="w-6 h-6" />, text: 'توصيل لجميع أنحاء السودان' },
        { icon: <Shield className="w-6 h-6" />, text: 'ضمان على القطع' },
        { icon: <Clock className="w-6 h-6" />, text: 'توصيل خلال 24-72 ساعة' },
        { icon: <DollarSign className="w-6 h-6" />, text: 'أسعار تنافسية' }
    ];

    const sampleProducts = [
        {
            id: 1,
            name: 'فلتر زيت تويوتا',
            brand: 'تويوتا',
            condition: 'جديد',
            price: '45,000',
            image: '🔧'
        },
        {
            id: 2,
            name: 'كراسي ماكينة هيونداي',
            brand: 'هيونداي',
            condition: 'مستعمل أصلي',
            price: '120,000',
            image: '⚙️'
        },
        {
            id: 3,
            name: 'طرمبة ماء كيا',
            brand: 'كيا',
            condition: 'جديد',
            price: '85,000',
            image: '💧'
        },
        {
            id: 4,
            name: 'فحمات فرامل نيسان',
            brand: 'نيسان',
            condition: 'تجاري',
            price: '55,000',
            image: '🛞'
        }
    ];

    return (
        <div dir="rtl" className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
            {/* Header */}
            <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-white text-slate-900 p-2 rounded-lg float-icon">
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

            {/* Hero Section */}
            <section ref={heroRef} className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="hero-badge inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                            <p className="text-sm md:text-base">🚗 جميع قطع غيار السيارات في مكان واحد</p>
                        </div>

                        <h2 className="hero-title text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            قطع غيار أصلية
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                بأفضل الأسعار
                            </span>
                        </h2>

                        <p className="hero-subtitle text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                            نوفر قطع غيار جديدة ومستعملة أصلية لجميع أنواع السيارات
                            <br />
                            مع توصيل سريع لكل أنحاء السودان
                        </p>

                        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
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
                                <div key={idx} className="hero-stats bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                    <div className="text-blue-400 mb-2 flex justify-center float-icon">{feature.icon}</div>
                                    <p className="text-sm text-slate-300">{feature.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Carousel Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle subtitle="شاهد بعض من قطع الغيار المتوفرة لدينا">
                        معرض الصور
                    </SectionTitle>
                    <ImageCarousel />
                </div>
            </section>

            {/* Services Section */}
            <section ref={servicesRef} className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <SectionTitle subtitle="نوفر لك جميع أنواع القطع">
                        خدماتنا
                    </SectionTitle>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, idx) => (
                            <Card key={idx} className="service-card p-8 hover:scale-105 transition-transform">
                                <div className="bg-gradient-to-br from-slate-100 to-slate-200 w-16 h-16 rounded-2xl flex items-center justify-center text-slate-800 mb-6 float-icon">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brands Section */}
            <section ref={brandsRef} className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle subtitle="نوفر قطع غيار لجميع الماركات">
                        الماركات المتوفرة
                    </SectionTitle>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {brands.map((brand, idx) => (
                            <div
                                key={idx}
                                className="brand-card bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 text-center hover:shadow-xl transition-all cursor-pointer border-2 border-slate-200 hover:border-slate-900"
                            >
                                <Car className="w-8 h-8 mx-auto mb-3 text-slate-700" />
                                <p className="font-bold text-slate-900">{brand}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section ref={categoriesRef} className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <SectionTitle subtitle="ابحث حسب نوع القطعة">
                        الأقسام
                    </SectionTitle>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveCategory(cat.nameEn)}
                                className={`category-card p-6 rounded-xl text-center transition-all hover:scale-105 ${activeCategory === cat.nameEn
                                        ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl'
                                        : 'bg-white hover:shadow-lg'
                                    }`}
                            >
                                <div className="text-4xl mb-3">{cat.icon}</div>
                                <p className="font-semibold">{cat.name}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sample Products */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle subtitle="أحدث القطع المتوفرة">
                        منتجات مميزة
                    </SectionTitle>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sampleProducts.map((product) => (
                            <Card key={product.id} className="overflow-hidden hover:scale-105 transition-transform">
                                <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-48 flex items-center justify-center text-6xl">
                                    {product.image}
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                            {product.brand}
                                        </span>
                                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                            {product.condition}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-3">{product.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <p className="text-2xl font-bold text-slate-900">{product.price}</p>
                                        <span className="text-sm text-slate-600">جنيه</span>
                                    </div>
                                    <a href="https://wa.me/249966141496" className="w-full mt-4 block">
                                        <Button variant="primary" className="w-full">
                                            استفسر الآن
                                        </Button>
                                    </a>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Payment Methods */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <SectionTitle subtitle="طرق دفع متعددة ومرنة">
                        طرق الدفع
                    </SectionTitle>

                    <div className="max-w-3xl mx-auto">
                        <Card className="p-8">
                            <div className="grid md:grid-cols-2 gap-4">
                                {paymentMethods.map((method, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                                            ✓
                                        </div>
                                        <span className="font-semibold text-slate-900">{method.name}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <SectionTitle subtitle="نحن هنا لخدمتك">
                        <span className="text-white">تواصل معنا</span>
                    </SectionTitle>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {/* Sudan Contact */}
                        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <MapPin className="w-6 h-6 text-blue-400 float-icon" />
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
                                <MapPin className="w-6 h-6 text-green-400 float-icon" />
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

            {/* Footer */}
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

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/249966141496"
                className="fixed bottom-6 left-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 md:hidden float-icon"
            >
                <MessageCircle className="w-6 h-6" />
            </a>
        </div>
    );
}