import React from 'react';
import { motion } from 'framer-motion';
import Cover1 from "../../images/home/focus/1712693906444.webp";
import Cover2 from "../../images/home/focus/1688762372543.webp";
import Cover3 from "../../images/home/focus/1701896986896.webp";

const Focus = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section>
            <motion.div
                className="bg-[#FDFDFF] mt-10 max-w-6xl relative w-full mx-auto sm:rounded-lg border border-[#EFF1FE]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={fadeInUp}
            >
                <div className="mx-auto py-8 sm:px-10 px-5 md:flex md:justify-center md:items-center">
                    <motion.div
                        className="md:w-1/2 lg:w-3/3 md:mr-8"
                        variants={fadeInUp}
                    >
                        <h1 className="text-3xl font-bold mb-4 text-[#00213E]">Focus like there’s no tomorrow™</h1>
                        <p className="text-base mb-4 text-slate-500">
                            BRECA™ is our unique training method that through a process of consciously altering your brain waves to between 8 - 13 Hz, we train your brain to enter the Alpha waves frequency on demand. This causes mental and physical relaxation, lowers your stress and anxiety levels and allows you to perform tasks with a much higher level of concentration.
                        </p>
                        <button className="rounded-xl uppercase bg-[#4991cc] hover:bg-[#2e2f68] px-10 py-3 font-medium text-white transition-all duration-200 outline-none">BOOK YOUR MASTERclass</button>
                    </motion.div>
                    <motion.div
                        className="md:w-1/2 lg:w-3/3 mt-8 md:mt-0"
                        variants={fadeInUp}
                    >
                        <img src={Cover1} alt={Cover1} className="w-full h-full object-cover rounded-xl" loading="lazy" />
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                className="bg-[#FDFDFF] mt-10 max-w-6xl relative w-full mx-auto sm:rounded-lg border border-[#EFF1FE]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={fadeInUp}
            >
                <div className="max-w-6xl mx-auto py-8 px-4 md:px-0 md:flex md:justify-center md:items-center">
                    <motion.div
                        className="md:w-1/2 lg:w-3/3 mb-8 md:mt-2 sm:pl-5 sm:pt-6"
                        variants={fadeInUp}
                    >
                        <img src={Cover2} alt="Responsive Design" className="w-full h-full object-cover rounded-xl" />
                    </motion.div>
                    <motion.div
                        className="md:w-1/2 lg:w-3/3 md:ml-8"
                        variants={fadeInUp}
                    >
                        <h1 className="text-3xl font-bold mb-4 text-[#00213E]">Read and Process like a pro™</h1>
                        <p className="text-base mb-2 text-slate-500">
                            SAPP™ and ITEM™ are our unique training methods that boost your acquisition tools. Through a process of training students to reduce regression, fixation and subvocalisation while reading, we enable students to reach reading speeds of 3x faster than their starting speed.
                        </p>
                        <p className="text-base mb-4 text-slate-500">
                            Additionally, through training students with deconstructing information and reconstructing it via neural mapping, we enable students to deepen their understanding of concepts and also organise their thoughts and tasks more effectively. This improves students’ articulation and self-confidence.
                        </p>
                        <button className="rounded-xl uppercase bg-[#4991cc] hover:bg-[#2e2f68] px-10 py-3 font-medium text-white transition-all duration-200 outline-none">BOOK YOUR MASTERclass</button>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                className="bg-[#FDFDFF] mt-10 max-w-6xl relative w-full mx-auto sm:rounded-lg border border-[#EFF1FE]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={fadeInUp}
            >
                <div className="max-w-6xl mx-auto py-8 sm:px-10 px-5 md:flex md:justify-center md:items-center">
                    <motion.div
                        className="md:w-1/2 lg:w-3/3 md:mr-8"
                        variants={fadeInUp}
                    >
                        <h1 className="text-3xl font-bold mb-4 text-[#00213E]">A Memory like you never had™</h1>
                        <p className="text-base mb-4 text-slate-500">
                            IWAVE™ is our unique training method that trains students to consciously encode any information they read or hear, moving it from their working memory through their episodic and into their semantic memory - thereby allowing them to commit whatever they want to their longterm memory and recall it easily when required.
                        </p>
                        <button className="rounded-xl uppercase bg-[#4991cc] hover:bg-[#2e2f68] px-10 py-3 font-medium text-white transition-all duration-200 outline-none">BOOK YOUR MASTERclass</button>
                    </motion.div>
                    <motion.div
                        className="md:w-1/2 lg:w-3/3 mt-8 md:mt-0"
                        variants={fadeInUp}
                    >
                        <img src={Cover3} alt="Responsive Design" className="w-full h-full object-cover rounded-xl" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Focus;
