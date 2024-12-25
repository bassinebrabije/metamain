import React, { useState, useEffect } from "react";
import Metalogomessage from "../../images/metalogomessage.svg";

const PopupMessage = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Show popup after 3000 milliseconds
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 100);

        // Cleanup timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    const hideMessage = () => {
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && (
                <div
                    className="fixed z-50 bottom-0 left-5 mb-4 mr-4"
                    style={{ display: "block" }}
                >
                    <div className="rounded-lg shadow-lg p-4 bg-[#2e2f68]">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                                <img
                                    src={Metalogomessage}
                                    className="w-12 mr-8 rounded-md"
                                    alt={Metalogomessage}
                                />
                            </div>
                            <button
                                className="text-white hover:text-white focus:outline-none"
                                onClick={hideMessage}
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <p className="text-white text-base">
                            Unlock your potential . {" "}
                            <button

                                style={{ textDecoration: "underline" }}
                                className="text-white"
                            >
                                {" "} BOOK YOUR MASTERCLASS TODAY!
                            </button>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopupMessage;
