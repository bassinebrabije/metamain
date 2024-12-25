import React from "react";
import { motion } from "framer-motion";
import GoogleMeet from "../../images/home/GoogleMeet.webp"; // Importing the image

const BrainTrainingSection = () => {
    return (
        <section className="mt-12 lg:mt-24">
            <div
                className="relative bg-cover bg-center text-white"
                style={{
                    backgroundImage: `url(${GoogleMeet})`, // Using the imported image
                    backgroundAttachment: "fixed", // Parallax effect
                }}
            >
                {/* Black overlay with opacity */}
                <div className="absolute inset-0 bg-[#4991cc] bg-opacity-75"></div>
                <div className="container mx-auto relative z-10 py-10 text-center lg:py-20">
                    <div className="w-full px-4 lg:w-3/4 xl:w-1/2 mx-auto">
                        {/* Title Section */}
                        <motion.div
                            className="mb-8"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6">
                                Metalearning HUB is the world’s most complete brain training programme
                            </h2>
                            <p className="text-base sm:text-lg lg:text-xl pb-4">
                                There are 3 phases of training that are scientifically designed
                                to boost your cognitive abilities and ultimately improve the
                                quality of your life.
                            </p>
                        </motion.div>

                        {/* Phases Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-lg md:text-xl font-bold">Foundation</h3>
                                <p className="mt-2 text-sm md:text-base">
                                    Assessment, cognitive evaluation and preparation.
                                </p>
                            </motion.div>

                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-lg md:text-xl font-bold">Mastery</h3>
                                <p className="mt-2 text-sm md:text-base">
                                    90 days guided homework and access to team and community.
                                </p>
                            </motion.div>

                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-lg md:text-xl font-bold">Implementation</h3>
                                <p className="mt-2 text-sm md:text-base">
                                    4 full days immersive training in-person or online.
                                </p>
                            </motion.div>
                        </div>

                        {/* Call-to-Action Button */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <button className="rounded-xl uppercase bg-white hover:scale-90 px-6 sm:px-10 py-3 font-medium text-[#2e2f68] transition-all duration-200 outline-none">
                                BOOK YOUR MASTERCLASS
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrainTrainingSection;
