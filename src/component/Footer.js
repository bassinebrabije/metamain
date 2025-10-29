import React from "react";
import metalogo from '../images/metalogo.svg';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="mx-auto w-full pt-10 max-w-container px-4 sm:px-6 lg:px-8">
                <div className="border-t border-slate-900/5 py-10">
                    <img
                        src={metalogo}
                        alt={metalogo}
                        className="mx-auto h-16 w-auto text-slate-900"
                    />
                    <p className="mt-5 text-center text-sm leading-6 text-slate-500">
                        © {currentYear} Metalearning HUB. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;