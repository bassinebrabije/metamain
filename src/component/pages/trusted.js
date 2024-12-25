import React from "react";
import ECO from "../../images/home/trusted/1.png";
import Hes from "../../images/home/trusted/2.png";
import Opi from "../../images/home/trusted/3.png";
import Medi from "../../images/home/trusted/4.png";
import TowM from "../../images/home/trusted/5.png";
import Map from "../../images/home/trusted/6.png";
import Snrt from "../../images/home/trusted/7.png";

function Trusted() {
    function LogoList() {
        const logos = [
            { alt: "ECO.ma", src: ECO },
            { alt: "Hespress", src: Hes },
            { alt: "2m", src: TowM },
            { alt: "l'Opinion", src: Opi },
            { alt: "Medi", src: Medi },
            { alt: "Map", src: Map },
            { alt: "Snrt News", src: Snrt },
        ];

        return (
            <ul className="flex flex-wrap items-center justify-center gap-2">
                {logos.map((logo, index) => (
                    <li key={index} className="mb-4 sm:mb-2 md:mb-4 lg:mb-0">
                        <img
                            alt={logo.alt}
                            loading="lazy"
                            width="150"
                            height="50"
                            decoding="async"
                            src={logo.src}
                            className="w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16 lg:w-36 lg:h-18"
                            style={{ color: "transparent", filter: "grayscale(100%)" }}
                        />
                    </li>
                ))}
            </ul>
        );
    }
    return (
        <div className="relative pt-20 pb-20 flex flex-col items-center">
            <p className="text-center text-sm hidden  sm:mb-10 sm:block">Trusted by companies</p>
            <div className="max-w-6xl w-full inline-flex flex-wrap justify-center overflow-hidden" style={{ maskImage: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 0) 100%)' }}>
                <LogoList />
            </div>
        </div>
    );
}

export default Trusted;