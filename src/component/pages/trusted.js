import React from "react";
import { motion } from "framer-motion";
import ECO from "../../images/home/trusted/1.png";
import Hes from "../../images/home/trusted/2.png";
import Opi from "../../images/home/trusted/3.png";
import Medi from "../../images/home/trusted/4.png";
import TowM from "../../images/home/trusted/5.png";
import Map from "../../images/home/trusted/6.png";
import Snrt from "../../images/home/trusted/7.png";

function Trusted() {
    const logos = [
        { alt: "ECO.ma logo", src: ECO },
        { alt: "Hespress logo", src: Hes },
        { alt: "2M logo", src: TowM },
        { alt: "L'Opinion logo", src: Opi },
        { alt: "Medi logo", src: Medi },
        { alt: "Map logo", src: Map },
        { alt: "Snrt News logo", src: Snrt },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };


    return (
        <div className="relative pt-20 pb-10 flex flex-col items-center">
            <motion.p
                className="text-center text-sm hidden text-[#6b7280] sm:mb-10 sm:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                Trusted by companies
            </motion.p>
            <motion.div
                className="max-w-6xl w-full inline-flex flex-wrap justify-center overflow-hidden"
                style={{
                    maskImage:
                        "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 0) 100%)",
                }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {logos.map((logo, index) => (
                    <motion.figure
                        key={index}
                        className="mb-4 sm:mb-2 md:mb-4 lg:mb-0"
                        variants={itemVariants}
                    >
                        <img
                            alt={logo.alt}
                            loading="lazy"
                            width="150"
                            height="50"
                            decoding="async"
                            src={logo.src}
                            className="w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16 lg:w-36 lg:h-18"
                            style={{
                                color: "transparent",
                                filter: "grayscale(100%)",
                            }}
                        />
                        <figcaption className="sr-only">{logo.alt}</figcaption>
                    </motion.figure>
                ))}
            </motion.div>
        </div>
    );
}

export default Trusted;
