import React from 'react'
import { Link } from 'react-router-dom'
function Reviews() {
    return (
        <>
            <div className={`fixed dotted-background h-full top-0 left-0 right-0 z-[-99] hidden lg:block`}>
                <div className="absolute left-0 right-0 bottom-0 h-[300px]"></div>
            </div>

            <div className="flex flex-col items-center justify-center mt-52  mb-32 px-4 text-center">
                <h1 className="text-5xl sm:text-7xl font-bold text-[#00213E] mb-4">
                    Coming Soon
                </h1>
                <p className="text-gray-600 text-base sm:text-lg mb-8">
                    We're working hard to bring it. Stay tuned!
                </p>
                <div className="flex space-x-4">
                    <Link
                        to="/"
                        className="bg-[#4991cc] text-white py-2 px-6 rounded-xl shadow-lg transition duration-300 hover:bg-[#357bb2]"
                    >
                        Back Home
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Reviews