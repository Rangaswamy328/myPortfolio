import React from "react";
import { navBarItems } from "@/constants/constant";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./icons";
import { Link } from "react-scroll";

const MotionLink = motion(Link);

const CustomLink = ({ dragTo, text, className = "" }) => {
  return (
    <Link to={dragTo} 
        smooth={true}
        offset={-100}
        className={`${className} relative group hover:cursor-pointer`}>
      {text}
      <span
        className="h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300"
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 z-10 font-medium flex justify-between items-center fixed backdrop-blur-md bg-opacity-50 bg-red lg:px-16 z-1 md:px-12 sm:px-8">
      <nav>
        {navBarItems.map(({ dragTo, text }, ind) => (
          <CustomLink
            className={`${ind == 0 ? "mr-5 md:mr-3" : "mx-5 md:mx-3"}`}
            key={ind}
            dragTo={dragTo}
            text={text}
          />
        ))}
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a className="mr-5 h-6 w-6"
          href={"https://github.com/vinov1999"}
          target={"_blank"}
          whileTap={{scale:0.9}}
          whileHover={{y: -2,}}>
          <GithubIcon className={"w-6"} />
        </motion.a>
        <motion.a className="mr-5 h-6 w-6"
          href={"https://www.linkedin.com/in/vinoth-kumar-v281099/"}
          target={"_blank"}
          whileTap={{scale:0.9}}
          whileHover={{y: -2,}}>
          <LinkedInIcon className={"w-6"} />
        </motion.a>
        <motion.a className="mr-5 h-6 w-6"
          href={"https://twitter.com/Vinoth281099"}
          target={"_blank"}
          whileTap={{scale:0.9}}
          whileHover={{y: -2,}}>
          <TwitterIcon className={"w-6"} />
        </motion.a>
      </nav>
    </header>
  );
};

export default NavBar;
