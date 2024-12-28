import React from 'react'
import { motion } from 'framer-motion';
import Cover1 from "../../images/about/mission1.png";
export default function ourmission() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (

        <motion.section
            className=" mt-20 max-w-[76rem]  w-full mx-auto sm:rounded-lg "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={fadeInUp}
        >
            <h1
                className="font-bold px-4 sm:PX text-3xl sm:text-5xl sm:leading-tight text-[#00213E] text-left sm:text-center "
            >
                Our Mission
            </h1>
            <div className="mx-auto py-8 sm:px-10 px-5 md:flex md:justify-center md:items-center">
                <motion.div
                    className="md:w-1/2 lg:w-3/3 mb-5 block sm:hidden"
                    variants={fadeInUp}
                >
                    <img src={Cover1} alt={Cover1} className="w-full h-full object-cover rounded-xl" loading="lazy" />
                </motion.div>

                <motion.div
                    className="md:w-1/2 lg:w-3/3 md:mr-8"
                    variants={fadeInUp}
                >
                    <p className="text-xl  sm:text-3xl font-semibold italic  mb-4 text-[#4991cc]">
                        Our mission at Lovebrain is to radically improve the quality of people’s lives - whoever, wherever, and however they are.
                    </p>
                    <p className="text-base mb-4 text-slate-500">
                        We achieve this by firstly ensuring that people reconnect with the power they have within themselves, realising there is so much more to them than what they believe – allowing them to dream bigger.
                    </p>
                    <p className="text-base mb-4 text-slate-500">
                        And secondly, by enabling them to tangibly use their brain more efficiently thereby empowering them to achieve better results in their personal, professional and academic life.
                    </p>
                </motion.div>
                <motion.div
                    className="md:w-1/2 lg:w-3/3 mt-8 md:mt-0  hidden sm:block"
                    variants={fadeInUp}
                >
                    <img src={Cover1} alt={Cover1} className="w-full h-full  object-cover  rounded-xl" loading="lazy" />
                </motion.div>
            </div>
        </motion.section>

    )
}
