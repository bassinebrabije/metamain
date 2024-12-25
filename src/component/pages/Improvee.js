import React from 'react';
import Boost from "../../images/home/icons/BENEFIT+ICONS.png";
import Aceexams from "../../images/home/icons/BENEFIT+ICONS3.png";
import Speak from "../../images/home/icons/BENEFIT+ICONS2.png";
import Learn from "../../images/home/icons/BENEFIT+ICONS4.png";
import Network from "../../images/home/icons/BENEFIT+ICONS5.png";
import Start from "../../images/home/icons/BENEFIT+ICONS6.png";
import Increase from "../../images/home/icons/BENEFIT+ICONS7.png";
import Lower from "../../images/home/icons/BENEFIT+ICONS8.png";
const cardData = [
    {
        id: 1,
        image: Boost,
        title: "Boost your career progression",
        description: "Increase your productivity, perform tasks efficiently and rapidly acquire new skills to move up the career ladder"
    },
    {
        id: 2,
        image: Aceexams,
        title: "Ace exams and  qualifications",
        description: "Reduce the time and effort spent on learning and revising new information and skills and take exams with ease"
    },
    {
        id: 3,
        image: Speak,
        title: "Speak confidently in public",
        description: "Get your message across to people clearly and accurately while delivering it in an organic and confident way"
    }, {
        id: 4,
        image: Learn,
        title: "Learn more languages",
        description: "Reduce the time and effort spent on learning and revising new information and skills and take exams with ease"
    }, {
        id: 5,
        image: Network,
        title: "Network more effectively",
        description: "Remember people’s names and details they share to connect on a deeper level and create more opportunities"
    }, {
        id: 6,
        image: Start,
        title: "Start or grow your business",
        description: "Rapidly acquire vast amounts of knowledge and skills in your field to enhance your business acumen"
    }, {
        id: 7,
        image: Increase,
        title: "Increase your productivity",
        description: "Organise your thoughts and tasks effectively to improve your output efficiency and save time and energy"
    },
    {
        id: 8,
        image: Lower,
        title: "Lower your stress and anxiety",
        description: "Become more competent at achieving your goals and tasks to lower your stress and anxiety which increases your inner confidence"
    },


];

const Improvee = () => {
    return (
        <section className="container mx-auto px-4 space-y-6  sm:px-6 lg:px-8 ">
            <div className="mx-auto flex max-w-6xl flex-col items-center  text-center " >
                <h2 className="font-bold text-2xl sm:text-5xl sm:leading-tight  text-[#00213E]">
                    Improve your  professional, academic and personal life
                </h2>
            </div >
            <div className="mx-auto grid justify-center gap-5  sm:grid-cols-2 md:max-w-[64rem] sm:grid-cols-2 pt-10 ">
                {cardData.map((card) => (
                    <div key={card.id} className="relative pl-16 mb-10 ">
                        <dt className="text-base font-semibold leading-7  text-[#00213E]">
                            <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-lg bg-[#2e2f68] ">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="h-12 w-12 object-contain"
                                />
                            </div>
                            <h1 className="font-bold pl-10">{card.title}</h1>
                        </dt>
                        <dd className="pl-10 mt-2 text-base leading-7  text-slate-500">
                            {card.description}
                        </dd>
                    </div>
                ))}
            </div>
        </section >
    );
};
export default Improvee;