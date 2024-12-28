import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointLeft, faHandPointRight } from '@fortawesome/free-regular-svg-icons';

import SliderImage1 from "../../images/home/slider/1701896986896.jpg";
import SliderImage2 from "../../images/home/slider/1678977900026.jpg";
import SliderImage3 from "../../images/home/slider/1701896981357.jpg";
import SliderImage4 from "../../images/home/slider/1712693880374.jpg";
import SliderImage5 from "../../images/home/slider/1688762373611.jpg";
import SliderImage6 from "../../images/home/slider/1712693906444.webp";

const images = [
    { id: 1, url: SliderImage1 },
    { id: 2, url: SliderImage2 },
    { id: 3, url: SliderImage3 },
    { id: 4, url: SliderImage4 },
    { id: 5, url: SliderImage5 },
    { id: 6, url: SliderImage6 },
];

const CarouselSlider = () => {
    const [popupImage, setPopupImage] = useState(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const openPopup = (image) => {
        setPopupImage(image);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    const handleNext = () => {
        if (popupImage) {
            const currentIndex = images.findIndex(img => img.id === popupImage.id);
            const nextIndex = (currentIndex + 1) % images.length;
            setPopupImage(images[nextIndex]);
        }
    };

    const handlePrev = () => {
        if (popupImage) {
            const currentIndex = images.findIndex(img => img.id === popupImage.id);
            const prevIndex = (currentIndex - 1 + images.length) % images.length;
            setPopupImage(images[prevIndex]);
        }
    };

    return (
        <section ref={sectionRef} className="pt-12">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full px-4 sm:px-6 lg:px-8 "
            >
                <Swiper
                    modules={[Autoplay]} // Removed Pagination module
                    spaceBetween={16}
                    slidesPerView={2}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    {images.map((img) => (
                        <SwiperSlide key={img.id}>
                            <div
                                className="flex  justify-center items-center cursor-grabbing"
                                onClick={() => openPopup(img)}
                            >
                                <img
                                    src={img.url}
                                    alt={`Slide ${img.id}`}
                                    className="rounded-xl shadow-lg object-cover w-full h-64"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>

            {
                popupImage && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        onClick={closePopup}
                    >
                        <motion.div
                            className="p-6 rounded-xl shadow-lg max-w-4xl mx-4 relative"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <button
                                className="absolute left-2 sm:left-8 top-1/2 transform -translate-y-1/2 bg-[#4991cc] text-white p-2 rounded-md shadow-lg"
                                onClick={handlePrev}
                            >
                                <FontAwesomeIcon icon={faHandPointLeft} />

                            </button>
                            <img
                                src={popupImage.url}
                                alt={`Popup ${popupImage.id}`}
                                className="rounded-xl w-full h-auto object-cover"
                            />
                            <button
                                className="absolute right-2 sm:right-8 top-1/2 transform -translate-y-1/2 bg-[#4991cc] text-white p-2 rounded-md shadow-lg"
                                onClick={handleNext}
                            >
                                <FontAwesomeIcon icon={faHandPointRight} />
                            </button>
                        </motion.div>
                    </motion.div>
                )
            }
        </section >
    );
};

export default CarouselSlider;
