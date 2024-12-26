import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Memory from "../../images/home/concept-growth-mind.webp";
import Focus from "../../images/home/text-focus-cubes.webp";
import Processing from "../../images/home/people-reading-together.webp";

const Programme = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

    const Card = [
        {
            id: 1,
            imgSrc: Memory,
            title: "Improve your Memory",
            description: "Rapidly memorise anything and remember it forever",
        },
        {
            id: 2,
            imgSrc: Focus,
            title: "Enhance your Focus",
            description: "Activate full concentration, reduce anxiety and stress and improve your mood",
        },
        {
            id: 3,
            imgSrc: Processing,
            title: "Improve your Processing",
            description: "Read faster, deeply understand and organise",
        },
    ];

    return (
        <section className="pb-20" ref={ref}>
            <motion.div
                className="mx-auto flex max-w-6xl flex-col items-center text-center py-10"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 3, ease: "easeOut" }}
            >
                <h2 className="font-bold text-2xl sm:text-5xl sm:leading-tight text-[#00213E]">
                    The Lovebrain programme trains your 3 cognitive performance areas with the most advanced techniques in the world
                </h2>
            </motion.div>
            <motion.div
                className="mx-auto max-w-6xl grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.4,
                        },
                    },
                }}
            >
                {Card.map((Card) => (
                    <motion.div
                        key={Card.id}
                        className="group bg-[#FDFDFF] rounded-xl hover:cursor-pointer border border-[#EFF1FE] shadow-ms overflow-hidden flex flex-col justify-between"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    >
                        <div>
                            <img
                                className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
                                src={Card.imgSrc}
                                alt={Card.imgSrc}
                                loading="lazy"
                            />
                            <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">
                                {Card.category}
                            </h2>
                            <div className="py-1 px-6">
                                <h1 className="title-font mb-3 inline-block cursor-pointer text-xl font-extrabold tracking-wide text-gray-800">
                                    {Card.title}
                                </h1>
                                <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">
                                    {Card.description}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center px-6 pt-1 pb-4">
                            <button className="rounded-xl uppercase bg-[#4991cc] hover:bg-[#2e2f68] px-10 py-3 font-medium text-white transition-all duration-200 outline-none">
                                the science
                            </button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <div className="flex items-center justify-center px-6 pt-10 " >
                <button className="rounded-xl uppercase bg-[#4991cc] hover:bg-[#2e2f68] px-10 py-3 font-medium text-white transition-all duration-200 outline-none">
                    Book your masterclass
                </button>
            </div>
        </section>
    );
};

export default Programme;

