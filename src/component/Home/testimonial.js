import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import LinkedIn from "../../images/home/LinkedIn.webp";
import Google from "../../images/home/google.webp";

const testimonialData = [
    {
        id: 1,
        name: "Sarah Johnson",
        position: "2 months ago",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 4.9,
        content: "The learning methods are revolutionary. I've seen significant improvements.....",
        fullContent: "The learning methods are revolutionary. I've seen significant improvements in my studies.The learning methods are revolutionary.",
        reviewsin: Google,
        title: "Posted in Google"
    },
    {
        id: 2,
        name: "Michael Chen",
        position: "22 Days ago",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 4.8,
        content: "The learning methods are revolutionary. I've seen significant improvements.....",
        fullContent: "The learning methods are revolutionary. I've seen significant improvements in my studies.",
        reviewsin: LinkedIn,
        title: "Posted in LinkedIn"
    },
    {
        id: 3,
        name: "Sarah Johnson",
        position: "2 years ago",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 4.9,
        content: "The learning methods are revolutionary. I've seen significant improvements.....",
        fullContent: "The learning methods are revolutionary. I've seen significant improvements in my studies.",
        reviewsin: Google,
        title: "Posted in Google"
    },
    {
        id: 4,
        name: "Michael Chen",
        position: "2 months ago",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 4.8,
        content: "The learning methods are revolutionary. I've seen significant improvements.....",
        fullContent: "The learning methods are revolutionary. I've seen significant improvements in my studies.",
        reviewsin: LinkedIn,
        title: "Posted in LinkedIn"
    },
];

const TestimonialSection = () => {
    const [modalContent, setModalContent] = useState(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

    const openModal = (item) => {
        setModalContent(item);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <motion.section
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="py-12"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="mx-auto flex max-w-6xl flex-col items-center text-center pb-10"
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <h2 className="font-bold text-3xl sm:text-5xl sm:leading-tight text-[#00213E]">
                        What our students say
                    </h2>
                </motion.div>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={32}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-16"
                >
                    {testimonialData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <motion.div
                                className="bg-[#FDFDFF] p-8 rounded-xl hover:cursor-pointer border border-[#EFF1FE] shadow-ms hover:shadow-xl transition-shadow duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                onClick={() => openModal(item)}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <img
                                        src={item.avatar}
                                        alt={item.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                        loading="lazy"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-900">
                                            {item.name}
                                        </h3>
                                        <p className="text-slate-500 text-sm">{item.position}</p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-4">
                                    <span className="text-amber-500 mr-2">{item.rating}</span>
                                    <div className="flex">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                className="w-5 h-5 text-amber-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-[#6b7280] leading-relaxed">
                                    {item.content}{" "}
                                    <button
                                        className="text-[#4991cc] text-xs underline"
                                        onClick={() => openModal(item)}
                                    >
                                        Read More
                                    </button>
                                </p>
                                <img
                                    src={item.reviewsin}
                                    alt={item.title}
                                    className="w-auto h-5 mt-4"
                                    title={item.title}
                                />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Modal */}
            {modalContent && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={closeModal}
                >
                    <motion.div
                        className="bg-[#FDFDFF] p-8 rounded-xl border border-[#EFF1FE] shadow-xl transition-shadow duration-300 max-w-lg mx-4"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <img
                                src={modalContent.avatar}
                                alt={modalContent.name}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900">
                                    {modalContent.name}
                                </h3>
                                <p className="text-slate-500">{modalContent.position}</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <span className="text-amber-500 mr-2">{modalContent.rating}</span>
                            <div className="flex">
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        className="w-5 h-5 text-amber-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-4">
                            {modalContent.fullContent}
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </motion.section>
    );
};

export default TestimonialSection;
