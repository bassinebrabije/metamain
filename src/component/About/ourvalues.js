import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const valuesData = [
    {
        id: 1,
        title: "Constant improvement in everything we are and do",
        description:
            "It’s very easy to become complacent, especially when things are going well. We believe the secret to our rapid growth over the past few years is our constant desire to innovate and improve everything we are and do. We are wholeheartedly grateful for each step in our growth to date and for the significant impact we are making across the globe, but we’re never satisfied.",
    },
    {
        id: 2,
        title: "Overpromise and massively overdeliver",
        description:
            "We feel it’s easy to 'under promise and over deliver'. The real skill is to promise way beyond the clients’ desires and then deliver something that totally blows their mind. If you check out our 1,000+ 5* reviews on Google and TrustPilot, they pretty much all say the same thing; they came to improve their focus, reading, processing and/or memory – but what they left with is totally life-changing. We’re addicted to our students’ success.",
    },
    {
        id: 3,
        title: "Build the vision while enjoying the journey",
        description:
            "This is more for our team. We want to ensure that although we’re constantly pushing ourselves and the team to help our students achieve incredible results, we structure what we do in a way that improves the lives of our team too. There’s nothing worse than selling the dream life to a potential client when your own team is struggling. We practise what we preach – cognitive efficiency – to boost the quality of your life, starting with our team.",
    },
    {
        id: 4,
        title: "Brutal honesty",
        description:
            "Something that the founders believe in strongly is being up-front – no games, just transparency and total, often painful, honesty. This is the best way to grow a team and create an ethical and scalable business. We ask our students and anyone we interact with for real feedback – and we take that very seriously. Ask us anything, and we’ll surprise you with how straight-up we are. Brutal for some, refreshing for most.",
    },
    {
        id: 5,
        title: "Aim higher",
        description:
            "We aim as high as we possibly can, and then we raise the bar even higher. This goes for our team and our students too. If you choose to embark on our programme, know that we’ll push you beyond your wildest imagination. Great just isn’t great enough for us. Whatever you can dream is still limited by who you believe you are not. We remove boundaries and reset possibilities.",
    },
    {
        id: 6,
        title: "Impact over profit",
        description:
            "We’re not a charity, but we’re not a typical business either. We do what we do because we absolutely love it. Our drive comes from making a real, deep, lasting, and powerful difference. Every decision we make, everything we process, every team member we put into place – we place impact far over profit. And from our combined experience, we find that this is the natural winning strategy. Profit follows the quality of impact.",
    },
];

const OurValues = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

    return (
        <section
            className="max-w-7xl mx-auto px-4 py-8 space-y-6 sm:px-6 lg:px-8"
            ref={ref}
        >
            <motion.div
                className="mx-auto flex max-w-6xl flex-col sm:items-center text-left sm:text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <h1 className="font-bold text-3xl sm:text-5xl sm:leading-tight text-[#00213E]">
                    Our Values
                </h1>
            </motion.div>
            <motion.div
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
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
                {valuesData.map((value) => (
                    <motion.div
                        key={value.id}
                        className="relative flex flex-col bg-[#FDFDFF] p-8 rounded-xl border border-[#EFF1FE] shadow-sm hover:shadow-xl transition-shadow duration-300"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <h2 className="text-xl font-bold mb-4 text-[#4991cc]">
                            {value.title}
                        </h2>
                        <p className="text-sm leading-normal text-slate-500">
                            {value.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default OurValues;
