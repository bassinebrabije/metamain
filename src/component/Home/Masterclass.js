import React from "react";
import { motion } from "framer-motion";
import humanbrain from "../../images/home/human-brain-ouq.webp";

const MasterclassSection = () => {
    return (
        <section
            className="pt-14 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative">
                <motion.div
                    className="shadow rounded-xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="grid overflow-hidden text-white shadow-xl md:grid-cols-2 bg-[#4991cc] rounded-xl">
                        {/* Left Image */}


                        {/* Right Content */}
                        <motion.aside
                            className="p-8 space-y-4 md:p-16"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="tracking-tight text-3xl font-bold font-headline">
                                Book your free live Masterclass to find out how to boost your cognitive abilities
                            </h2>
                            <p className="text-base pb-5">
                                The 6 hour In-Person Lovebrain Masterclass will show you how to drastically improve your personal, professional and academic life
                            </p>
                            <button
                                className="rounded-xl uppercase bg-white hover:scale-90 px-10 py-3 font-medium text-[#2e2f68] transition-all duration-200 outline-none"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                viewport={{ once: true }}
                            >
                                BOOK YOUR MASTERCLASS
                            </button>
                        </motion.aside>
                        <motion.aside
                            className="relative items-center justify-center hidden md:flex"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <img
                                className="rounded-xl"
                                src={humanbrain}
                                alt={humanbrain}
                                loading="lazy"
                            />
                        </motion.aside>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MasterclassSection;
