import React, { useState } from "react";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqItems = [
        {
            header: "How unique is Metalearning Hub's brain coaching?",
            text: "At Metalearning Hub, we don't just teach techniques. We guide you on a true cognitive transformation journey. Through our personalized approach, we help you develop lasting mental skills that will allow you to constantly adapt to an ever-changing world. Our coaching goes beyond simple memorization; it gives you the keys to optimize your intellectual potential."
        },
        {
            header: "How does brain coaching improve decision-making?",
            text: "Metalearning Hub's brain coaching will allow you to develop greater clarity of mind, better manage stress, and make more informed decisions. By improving your ability to analyze information, assess risks, and anticipate opportunities, you will be able to make more strategic choices and achieve your goals faster."
        },
        {
            header: "Is brain coaching suitable for everyone?",
            text: "Absolutely! Whether you are a student, a professional, an entrepreneur, or simply someone looking to optimize their cognitive abilities, Metalearning Hub's brain coaching can provide significant benefits. Our programs are designed to adapt to your specific needs and learning pace."
        },
        {
            header: "Do I need to be 'smart' already for Metalearning HUB to work?",
            text: "Absolutely not! Metalearning HUB is for everyone, no matter your current skill level. We're here to help you improve, wherever you're starting from. We focus on teaching you practical skills and strategies to use your brain more effectively, not on testing how 'smart' you are."
        },
        {
            header: "What results can I expect from brain coaching?",
            text: "The results of brain coaching are often surprising. Our clients generally report a significant improvement in their concentration, memory, creativity, and ability to learn new things. In addition, they develop greater self-confidence and better stress management. Results may vary from person to person, but all our clients benefit from an enriching and transformative experience."
        },

        {
            header: "How much time will I need to put in to see results with Metalearning HUB? ",
            text: "The time commitment will vary depending on your goals and the specific program you choose. However, even small, consistent efforts can lead to noticeable improvements. We'll work with you to create a plan that fits your schedule and helps you make steady progress. It's about making learning a habit, not cramming everything in at once."
        }
    ];
    return (
        <section className="relative z-20 overflow-hidden bg-white pt-16 px-5">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="mx-auto flex max-w-6xl flex-col items-center text-center pb-8">
                        <span className="mb-2 block text-lg font-semibold text-[#4991cc]">
                            FAQ
                        </span>
                        <h2 className="font-bold text-2xl sm:text-5xl sm:leading-tight text-[#00213E]">
                            Any Questions ? Look Here
                        </h2>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2">
                        {faqItems.slice(0, 4).map((item, index) => (
                            <AccordionItem
                                key={index}
                                header={item.header}
                                text={item.text}
                                isActive={activeIndex === index}
                                onToggle={() => handleToggle(index)}
                            />
                        ))}
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        {faqItems.slice(2).map((item, index) => (
                            <AccordionItem
                                key={index + 2}
                                header={item.header}
                                text={item.text}
                                isActive={activeIndex === index + 2}
                                onToggle={() => handleToggle(index + 2)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const AccordionItem = ({ header, text, isActive, onToggle }) => {
    return (
        <div className="mb-8 w-full rounded-lg bg-[#FDFDFF] border border-[#EFF1FE] p-4 sm:p-8 lg:px-6 xl:px-8 ">
            <button
                className="faq-btn flex w-full text-left"
                onClick={(e) => {
                    e.preventDefault();
                    onToggle();
                }}
            >
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg">
                    <svg
                        className={`fill-[#4991cc] duration-200 ease-in-out ${isActive ? "rotate-180" : ""}`}
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill=""
                            stroke=""
                        />
                    </svg>
                </div>
                <div className="w-full">
                    <h4 className="mt-1 font-semibold text-lg text-[#00213E] line-clamp-2">
                        {header}
                    </h4>
                </div>
            </button>

            <div
                className={`pl-[62px] duration-200 ease-in-out ${isActive ? "block" : "hidden"}`}
            >
                <p className="py-3 text-slate-500 text-base">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Accordion;