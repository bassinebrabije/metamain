import React from 'react'
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';
import Ourmission from './ourmission';
import Ourvalues from './ourvalues';
import GetStarted from './getstarted';

function About() {
    return (

        <>
            {/* Helmet for minimal SEO */}
            <Helmet>
                <title>About Us | Metalearning HUB </title>
                <meta
                    name="description"
                    content="Metalearning HUB est spécialisé dans le coaching cérébral pour aider les apprenants permanents et les décideurs à reprendre le contrôle de leur esprit, en améliorant les performances cognitives grâce à la concentration, la lecture rapide, la cartographie mentale, la mémoire, l'état d'esprit et les compétences de prise de décision."
                />
                <meta property="og:title" content="Metalearning HUB - Professional Training and Coaching" />
                <meta property="og:description" content="MetaLearning HUB est spécialisé dans le coaching cérébral pour aider les apprenants permanents et les décideurs à reprendre le contrôle de leur esprit." />
            </Helmet>
            {/* Helmet for minimal SEO */}
            <div className={`fixed dotted-background h-full top-0 left-0 right-0 z-[-99] hidden lg:block`}>
                <div className="absolute left-0 right-0 bottom-0 h-[300px]"></div>
            </div>
            <section className="pt-[140px]">

                <div className="absolute inset-0 h-[480px] opacity-60 bg-gradient-to-b from-[#e4e8ff] to-transparent hidden lg:block" />
                <motion.div
                    className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="mb-5 flex justify-center ">
                        <p className="relative rounded-full px-3 py-1  text-xl leading-6">
                            <span className="relative text-[#4991cc]">What makes us stand out.
                            </span>
                        </p>
                    </div>
                    <motion.h1
                        className="max-w-2xl 2xl:max-w-5xl 2xl:text-[5rem] mx-auto text-center text-[35px] sm:text-[60px] font-bold text-[#00213E] leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        The Brains Behind  Metalearning Hub

                    </motion.h1>
                </motion.div>
            </section >
            <Ourmission />
            <Ourvalues />
            <GetStarted />
        </>
    )
}

export default About  