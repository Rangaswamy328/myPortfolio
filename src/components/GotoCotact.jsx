import React from "react";
import { Link } from "react-scroll";

const GotoCotact = () => {
  return (
    <>
      <Link
        to={"contact"}
        smooth={true}
        offset={-100}
        className="ml-4 text-lg font-medium capitalize hover:cursor-pointer text-dark underline dark:text-light md:text-base scroll-smooth"
      >
        Contact Me
      </Link>
    </>
  );
};

export default GotoCotact;
