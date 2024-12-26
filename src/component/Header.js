import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import metalogo from "../images/metalogo.svg";


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Track scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header
                className={`fixed top-0  w-full transition-all duration-300 py-2 sm:py-0 
                ${scrolled
                        ? "backdrop-blur-[20px] bg-[#FFF]"
                        : menuOpen
                            ? "backdrop-blur-[20px] bg-[#FFF]/50"
                            : "bg-transparent md:backdrop-blur-0"
                    }`}
                style={{ zIndex: 999 }}
            >
                <div
                    className={`bg-[#4991cc] text-white text-center py-3 
                ${scrolled ? "sm:hidden" : "block"} 
                hidden sm:block`}
                >
                    <h1 className="text-xs font-bold">
                        🚀 Unlock Your Potential.{" "}
                        <button className="underline cursor-pointer">
                            Book Your Masterclass Today!
                        </button>{" "}
                        🚀
                    </h1>
                </div>


                <div className="flex flex-col  md:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto md:items-center md:justify-between md:flex-row md:px-6  2xl:px-1">
                    <div className="p-4 flex flex-row items-center justify-between">
                        <NavLink to="/">
                            <img
                                src={metalogo}
                                className="mx-auto h-auto w-32"
                                alt="Metalearning Hub logo"
                                loading="lazy"
                                onClick={closeMenu}
                                title="Metalearning Hub"
                            />
                        </NavLink>
                        <button
                            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <svg fill="#4991cc" viewBox="0 0 20 20" className="w-6 h-6">
                                {!menuOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                )}
                            </svg>
                        </button>
                    </div>
                    <nav
                        className={`flex-col flex-grow pb-4 px-4 md:pb-0 ${menuOpen ? "flex" : "hidden"
                            } md:flex md:justify-end md:flex-row`}
                    >
                        <NavLink
                            to="/about"
                            end
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `px-4 py-2 mt-2 text-sm font-normal rounded-lg md:mt-0 md:ml-4 hover:bg-[#4991cc]  hover:text-white focus:shadow-outline ${isActive ? "bg-[#4991cc]  text-white" : "text-[#1f2937]"
                                }`
                            }
                        >
                            About us
                        </NavLink>
                        <NavLink
                            to="/courses"
                            end
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `px-4 py-2 mt-2 text-sm font-normal  rounded-lg md:mt-0 md:ml-4 hover:bg-[#4991cc]  hover:text-white focus:shadow-outline ${isActive ? "bg-[#4991cc]  text-white" : "text-[#1f2937]"
                                }`
                            }
                        >
                            Courses
                        </NavLink>
                        <NavLink
                            to="/science"
                            end
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `px-4 py-2 mt-2 text-sm  font-normal  rounded-lg md:mt-0 md:ml-4 hover:bg-[#4991cc]  hover:text-white focus:shadow-outline ${isActive ? "bg-[#4991cc]  text-white" : "text-[#1f2937]"
                                }`
                            }
                        >
                            The Science
                        </NavLink>
                        <NavLink
                            to="/reviews"
                            end
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `px-4 py-2 mt-2 text-sm  font-normal rounded-lg md:mt-0 md:ml-4 hover:bg-[#4991cc]  hover:text-white focus:shadow-outline ${isActive ? "bg-[#4991cc]  text-white" : "text-[#1f2937]"
                                }`
                            }
                        >
                            Reviews
                        </NavLink>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
