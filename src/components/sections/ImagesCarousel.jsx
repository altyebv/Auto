import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../../assets/images/image.png';
import img2 from '../../assets/images/image2.png';
import img3 from '../../assets/images/image3.png';
import img4 from '../../assets/images/image4.png';
import img5 from '../../assets/images/image5.png';

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { id: 1, src: img1, title: 'محركات وقطع المحرك' },
        { id: 2, src: img2, title: 'نظام الفرامل' },
        { id: 3, src: img3, title: 'إطارات وجنوط' },
        { id: 4, src: img4, title: 'نظام التبريد' },
        { id: 5, src: img5, title: 'قطع التعليق' }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
                <div className="relative aspect-video">
                    {images.map((image, idx) => (
                        <div
                            key={image.id}
                            className={`absolute inset-0 transition-all duration-700 ${
                                idx === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
                            }`}
                        >
                            <img src={image.src} alt={image.title} className="w-full h-full object-cover" />

                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="text-center text-white bg-black/40 px-4 py-3 rounded-md">
                                    <h3 className="text-2xl md:text-4xl font-bold mb-2">{image.title}</h3>
                                    <p className="text-md md:text-xl opacity-90">متوفر الآن بأفضل الأسعار</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Previous"
            >
                <ChevronRight className="w-6 h-6 text-slate-900" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Next"
            >
                <ChevronLeft className="w-6 h-6 text-slate-900" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-3 rounded-full transition-all ${
                            idx === currentIndex ? 'bg-slate-900 w-8' : 'bg-slate-300 w-3'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;