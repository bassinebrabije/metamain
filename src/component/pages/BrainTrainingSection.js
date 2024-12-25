import React from "react";
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
                <div className="absolute inset-0 bg-[#2e2f68] bg-opacity-75"></div>
                <div className="container mx-auto relative z-10 py-10 text-center lg:py-20">
                    <div className="w-full px-4 lg:w-1/2 lg:px-0 mx-auto">
                        {/* Title Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl sm:text-5xl font-bold mb-10">
                                Metalearning HUB is the world’s most complete brain training programme
                            </h2>
                            <p className="text-lg lg:text-xl pb-4">
                                There are 3 phases of training that are scientifically designed
                                to boost your cognitive abilities and ultimately improve the
                                quality of your life
                            </p>
                        </div>

                        {/* Phases Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="text-center">
                                <h3 className="text-xl font-bold">Foundation</h3>
                                <p className="mt-2">
                                    Assessment, cognitive evaluation and preparation
                                </p>
                            </div>

                            <div className="text-center">
                                <h3 className="text-xl font-bold">Mastery</h3>
                                <p className="mt-2">
                                    90 days guided homework and access to team and community
                                </p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold">Implementation</h3>
                                <p className="mt-2">
                                    4 full days immersive training in-person or online
                                </p>
                            </div>
                        </div>

                        {/* Call-to-Action Button */}
                        <div>
                            <button className="rounded-xl uppercase bg-white hover:scale-90 px-10 py-3 font-medium text-[#2e2f68] transition-all duration-200 outline-none">
                                BOOK YOUR MASTERCLASS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrainTrainingSection;
