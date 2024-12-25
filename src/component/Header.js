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

    return (
        <div
            className={`fixed top-0 py-2 w-full transition-all duration-300 
            ${scrolled
                    ? "backdrop-blur-[20px] bg-[#FFF]/50"
                    : menuOpen
                        ? "backdrop-blur-[20px] bg-[#FFF]/50"
                        : "bg-transparent md:backdrop-blur-0"
                }`}
            style={{ zIndex: 999 }}
        >
            <div className="flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="p-4 flex flex-row items-center justify-between">
                    <NavLink to="/">
                        <img
                            src={metalogo}
                            className="mx-auto h-auto w-32"
                            alt="logo"
                            loading="lazy"
                            title="metalearninghub"
                        />
                    </NavLink>
                    <button
                        className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg fill="#2e2f68" viewBox="0 0 20 20" className="w-6 h-6">
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
                        className={({ isActive }) =>
                            `px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-[#47c6eb] focus:shadow-outline ${isActive ? "text-[#47c6eb]" : "text-[#00213E]"
                            }`
                        }
                    >
                        About us
                    </NavLink>
                    <NavLink
                        to="/courses"
                        end
                        className={({ isActive }) =>
                            `px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-[#47c6eb] focus:shadow-outline ${isActive ? "text-[#47c6eb]" : "text-[#00213E]"
                            }`
                        }
                    >
                        Courses
                    </NavLink>
                    <NavLink
                        to="/science"
                        end
                        className={({ isActive }) =>
                            `px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-[#47c6eb] focus:shadow-outline ${isActive ? "text-[#47c6eb]" : "text-[#00213E]"
                            }`
                        }
                    >
                        The Science
                    </NavLink>
                    <NavLink
                        to="/reviews"
                        end
                        className={({ isActive }) =>
                            `px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-[#47c6eb] focus:shadow-outline ${isActive ? "text-[#47c6eb]" : "text-[#00213E]"
                            }`
                        }
                    >
                        Reviews
                    </NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;
