import React from "react";
import Testimonial from "./testimonial.js"
import Trusted from "./trusted.js";
import Improve from "./Improvee.js";
import Focus from "./focus.js";
import BrainTrainingSection from "./BrainTrainingSection.js";
import MasterclassSection from "./Masterclass.js";
import PopupMessage from "./PopupMessage.js";
const HeroSection = () => {
    return (
        <>
            <div class="fixed dotted-background h-full top-0 left-0 right-0 z-[-99]">
                <div class="absolute left-0 right-0 bottom-0 h-[300px]"></div>
            </div>
            <section className="pt-[140px]">
                <div className="absolute inset-0 h-[480px] opacity-60 bg-gradient-to-b from-[#e4e8ff] to-transparent" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-5 flex justify-center group cursor-pointer">
                        <p className="relative rounded-full px-3 py-1  text-sm leading-6 border border-[#000678A6] overflow-hidden hover:scale-105 transition duration-300 ease-in-out">
                            <span className="relative text-[#000678A6]">Welcome to MetaLearning Hub </span>
                        </p>
                    </div>
                    <h1 className="max-w-2xl mx-auto text-center text-[35px] sm:text-[60px] font-bold text-[#00213E] leading-tight">
                        Metalearning Hub Gives your brain tools for greatness
                    </h1>
                    <p className="max-w-xl mx-auto text-center text-sm font-normal text-[16px] text-slate-500 mt-5	 mb-9">
                        The Metalearning Hub Programme is scientifically designed to boost your memory and focus and unlock
                        your brain’s potential.
                    </p>
                    <div class="group relative inline-flex">
                        <button class="rounded-xl uppercase bg-[#2e2f68] hover:bg-[#47c6eb]  px-10 py-3 font-medium text-white transition-all duration-200 outline-none ">BOOK YOUR MASTERclass</button>
                    </div>
                </div>
            </section>
            <Trusted />
            <Improve />
            <Testimonial />
            <Focus />
            <BrainTrainingSection />
            <MasterclassSection />
            <PopupMessage />
        </>
    );
};

export default HeroSection;
