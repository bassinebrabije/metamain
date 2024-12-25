import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Testimonial from "./testimonial.js";
import Trusted from "./trusted.js";
import Improve from "./Improvee.js";
import Focus from "./focus.js";
import BrainTrainingSection from "./BrainTrainingSection.js";
import MasterclassSection from "./Masterclass.js";

import LoadingScreen from "./loading.js";

const HeroSection = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5550);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <>
            <div className={`fixed dotted-background h-full top-0 left-0 right-0 z-[-99] hidden lg:block`}>
                <div className="absolute left-0 right-0 bottom-0 h-[300px]"></div>
            </div>
            <section className="pt-[140px]">

                <div className="absolute inset-0 h-[480px] opacity-60 bg-gradient-to-b from-[#e4e8ff] to-transparent hidden lg:block" />
                <motion.div
                    className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >

                    <div className="mb-5 flex justify-center ">
                        <p className="relative rounded-full px-3 py-1  text-base leading-6">
                            <span className="relative text-[#4991cc]">Welcome to MetaLearning Hub </span>
                        </p>
                    </div>
                    <motion.h1
                        className="max-w-2xl 2xl:max-w-5xl 2xl:text-[5rem] mx-auto text-center text-[35px] sm:text-[60px] font-bold text-[#00213E] leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Metalearning Hub Gives your brain tools for greatness
                    </motion.h1>
                    <motion.p
                        className="max-w-xl mx-auto text-center text-sm font-normal text-[16px] text-[#6b7280] mt-5 mb-9"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        The Metalearning Hub Programme is scientifically designed to boost your memory and focus and unlock
                        your brain’s potential.
                    </motion.p>
                    <motion.div
                        className="group relative inline-flex"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <button className="rounded-xl uppercase bg-[#4991cc] hover:bg-[#2e2f68] px-10 py-3 font-medium text-white transition-all duration-200 outline-none">
                            Book your masterclass
                        </button>
                    </motion.div>
                </motion.div>
            </section >
            <Trusted />
            <Improve />
            <Testimonial />
            <Focus />
            <BrainTrainingSection />
            <MasterclassSection />
        </>
    );
};

export default HeroSection;
