import React, { useEffect, useState } from "react";
import profilePic from "../public/images/developer-pic.png";
import AnimatedText from "./AnimatedText";
import { LinkArrow } from "./icons";
import Image from "next/image";
import About from "./About";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import GotoCotact from "./GotoCotact";
import { motion } from "framer-motion";


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newy = window.scrollY;
      const minscroll =  window.innerWidth <= 690 ? Math.ceil(window.innerHeight * 0.30 ) : window.innerWidth <= 690 ? Math.ceil(window.innerHeight * 0.40 ) :  Math.ceil(window.innerHeight * 0.08 );
      setIsAboutVisible(newy > minscroll);
    };

    window.addEventListener("scroll", updateWindowDimensions);

    return () => window.removeEventListener("scroll", updateWindowDimensions) 

  }, []);

  return (
    <section
      className="flex items-center justify-between w-full my-20 bg-light about lg:my-35 md:flex-col md:gap-10"
      id="home"
    >
      <div className="w-1/2 md:w-1/2 relative">
        <Image src={profilePic} alt="profile" className="w-full h-auto" onContextMenu={(e)=>e.preventDefault()}/>
        <div className="absolute w-full h-[20%] z-20 left-1/2 bottom-0  bg-light transform -translate-x-1/2 lg:hidden"></div>
      </div>
      <div className="w-1/2 flex z-9 justify-center overflow-hidden lg:w-2/3 md:w-full">
        {!isAboutVisible &&  <motion.div 
          
          className="aboutsec h-4/5 z-9 justify-center items-center lg:my-[45px]" >
            <AnimatedText
                text={"Transforming Designs into Digital Masterpieces"}
                className="!text-6xl lg:!text-5xl sm:!text-4xl" />
            <p className="my-4 text-base font-medium md:text-lg sm:text-base xs:text-sm">
                As a proficient front-end developer, I'm committed to transforming
                concepts into cutting-edge web experiences. Discover my recent
                projects and contributions, demonstrating my mastery in
                React.js and web development.
            </p>
            <div className="flex items-center">
                <a
                    href={"https://docs.google.com/document/d/13e5-PrpPVxYSMuscKbf0yp07e4HTrENvY4uPfin3340/edit?usp=sharing"}
                    target="_blank"
                    className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base ">
                    <div>Resume </div>
                    <div className={"h-5 w-5 ml-1"} ><LinkArrow /></div>
                </a>
                <GotoCotact />
            </div>
        </motion.div>}
        {isAboutVisible && <About className={`aboutsec opacity-0`}/>}
      </div>
    </section>
  );
};

export default Home;
