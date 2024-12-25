import React from 'react';
import Loading from "../../images/home/Logo.gif"; // Update the path to your image file

const LoadingScreen = () => {
    return (
        <>

            <div className="bg-white fixed top-0 left-0 w-full h-full flex justify-center items-center z-[9999]">
                <div className="w-1/3 h-1/3 flex justify-center items-center">
                    <img
                        src={Loading}
                        alt="Loading"
                        className="object-contain w-[500px] h-[500px]"
                    />
                </div>
            </div>
        </>
    );
};

export default LoadingScreen;