import React, { useEffect, useState } from "react";

const TypewriterLoader = () => {
    const words = ["I am a metalearner,", "I am a lifelong learner"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    useEffect(() => {
        if (hasFinished) return;
        const type = () => {
            const currentWord = words[currentWordIndex];
            if (isDeleting) {
                setCurrentText((prev) => prev.slice(0, -1));
                if (currentText.length === 0) {
                    setIsDeleting(false);
                    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                    if (currentWordIndex + 1 === words.length) {
                        setHasFinished(true);
                        return;
                    }
                }
            } else {
                setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
                if (currentText.length === currentWord.length) {
                    setIsDeleting(true);
                }
            }
        };
        const timeoutId = setTimeout(type, 76); // Typing and deleting speed
        return () => clearTimeout(timeoutId);
    }, [currentText, isDeleting, currentWordIndex, hasFinished /* words is constant */]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <div className="bg-white fixed dotted-background h-full top-0 left-0 right-0 z-[999]  block">
                <div className="absolute left-0 right-0 bottom-0 h-[300px]"></div>
            </div>
            <div className=" fixed top-0 left-0 w-full h-full flex justify-center items-center z-[9999]">
                <div className="text-center">
                    <h1 id="typewriter" className="text-2xl sm:text-6xl text-[#2e2f68] uppercase  leading-tight font-bold ">
                        {currentText}
                    </h1>
                </div>
            </div>
        </>

    );
};

export default TypewriterLoader;
