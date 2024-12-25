import React from "react";
import WorldImage from "../../images/home/human-brain-ouq.webp"; // Update the path to your image file

const MasterclassSection = () => {
    return (
        <section
            className="pt-14 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative">
                <div className="shadow rounded-xl">
                    <div className="grid overflow-hidden text-white shadow-xl md:grid-cols-2 bg-[#4991cc] rounded-xl">
                        {/* Left Image */}


                        {/* Right Content */}
                        <aside className="p-8 space-y-4 md:p-16 ">
                            <h2 className="tracking-tight text-3xl font-bold font-headline">
                                Book your free live Masterclass to find out how to boost your cognitive abilities
                            </h2>
                            <p className="text-base pb-5">
                                The 6 hour In-Person Lovebrain Masterclass will show you how to drastically improve your personal, professional and academic life
                            </p>

                            <button className="rounded-xl uppercase bg-white  px-10 py-3 font-medium text-[#2e2f68] transition-all duration-200 outline-none">
                                BOOK YOUR MASTERCLASS
                            </button>
                        </aside>
                        <aside className="relative  items-center justify-center  hidden md:flex">
                            <img
                                className=" rounded-xl"
                                src={WorldImage}
                                alt="world"
                            />
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MasterclassSection;
