import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialData = [
    {
        id: 1,
        name: "Sarah Johnson",
        position: "CEO",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 4.9,
        content: "This platform has completely transformed how we approach learning and development."
    },
    {
        id: 2,
        name: "Michael Chen",
        position: "Student",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 4.8,
        content: "The learning methods are revolutionary. I've seen significant improvements in my studies."
    },
    {
        id: 3,
        name: "Emma Wilson",
        position: "Professional",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 5.0,
        content: "Incredible tool for professional development. The results speak for themselves."
    },
    {
        id: 4,
        name: "Emma Wilson",
        position: "Professional",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 5.0,
        content: "Incredible tool for professional development. The results speak for themselves."
    }
];

const TestimonialSection = () => {
    return (
        <section >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-6xl flex-col items-center  text-center pb-10" >
                    <h2 className="font-bold text-3xl sm:text-5xl sm:leading-tight text-[#00213E]">
                        What our students say
                    </h2>
                </div>
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
                        1024: { slidesPerView: 3 }
                    }}
                    className="pb-16"
                >
                    {testimonialData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className=" p-8 rounded-xl hover:cursor-pointer border border-[#EFF1FE]   shadow-ms hover:shadow-xl transition-shadow duration-300 ">
                                <div className="flex items-center gap-4 mb-6">
                                    <img
                                        src={item.avatar}
                                        alt={item.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-900">
                                            {item.name}
                                        </h3>
                                        <p className="text-slate-500">{item.position}</p>
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

                                <p className="text-gray-600 leading-relaxed">
                                    {item.content}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialSection;