import React from 'react';
import { motion } from "framer-motion";

const GetStarted = () => {
    return (

        <motion.section
            className="relative py-16 max-w-6xl px-10 sm:px-6 md:px-8  bg-[#4991cc] lg:rounded-xl justify-center items-center mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="relative">
                    <div className="flex items-center justify-center -space-x-2">
                        <img
                            width="400"
                            height="400"
                            src="https://randomuser.me/api/portraits/women/12.jpg"
                            alt="Member 1"
                            loading="lazy"
                            className="h-8 w-8 rounded-full object-cover"
                        />
                        <img
                            width="200"
                            height="200"
                            src="https://randomuser.me/api/portraits/women/45.jpg"
                            alt="Member 2"
                            loading="lazy"
                            className="h-12 w-12 rounded-full object-cover"
                        />
                        <img
                            width="200"
                            height="200"
                            src="https://randomuser.me/api/portraits/women/60.jpg"
                            alt="Member 3"
                            loading="lazy"
                            className="z-10 h-16 w-16 rounded-full object-cover"
                        />
                        <img
                            width="200"
                            height="200"
                            src="https://randomuser.me/api/portraits/women/4.jpg"
                            alt="Member 4"
                            loading="lazy"
                            className="relative h-12 w-12 rounded-full object-cover"
                        />
                        <img
                            width="200"
                            height="200"
                            src="https://randomuser.me/api/portraits/women/34.jpg"
                            alt="Member 5"
                            loading="lazy"
                            className="h-8 w-8 rounded-full object-cover"
                        />
                    </div>

                    <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
                        <h1 className="text-center text-4xl font-bold text-white  md:text-5xl">Find out more
                        </h1>
                        <p className="text-center text-xl text-white ">
                            There’s a whole new world on the other side of MetaLearning Hub. Join us on the most incredible journey of your life.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button
                                className="rounded-xl uppercase bg-white hover:scale-90 px-5 py-3 font-medium text-[#2e2f68] transition-all duration-200 outline-none"
                            >
                                Book Your Free Masterclass
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default GetStarted;
