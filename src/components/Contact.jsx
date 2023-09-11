"use client"
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import EmailJSResponseStatus from "./EmailSuccessPopup.jsx"
import EmailJSResponseError from "./EmailJSResponseError.jsx";
import AnimatedText from "./AnimatedText.jsx";
import {motion} from 'framer-motion'

const Contact = () => {
  const form = useRef();
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [inView, setInView] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [errormsg, setErrorMsg] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newy = window.scrollY;
      const multiplier = window.innerWidth < 640 ? 0.9 : 1 ;
      console.log('newy : ', newy);
      console.log(window.innerHeight)
      if(newy > Math.ceil((window.innerHeight * 2) * multiplier)) setInView(newy > Math.ceil((window.innerHeight * 2) * multiplier));
      if(newy < 1000 ) setInView(false);
    };

    window.addEventListener("scroll", updateWindowDimensions);

    return () => window.removeEventListener("scroll", updateWindowDimensions) 

  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    if(showErrorMsg || showErrorMsg) return;
    if(!e.target.user_name.value){
      setErrorMsg('Kindly enter your Name');
      setShowErrorMsg(true);
          setTimeout(() => {
            setShowErrorMsg(false);
            setErrorMsg('');
          }, 2500);
      return;
    }
    if(!e.target.user_email.value){
      setErrorMsg('Kindly enter your Email');
      setShowErrorMsg(true);
          setTimeout(() => {
            setErrorMsg('');
            setShowErrorMsg(false);
          }, 2500);
      return;
    } 
    if(!e.target.message.value){
      setErrorMsg('Kindly leave some message to me!');
      setShowErrorMsg(true);
          setTimeout(() => {
            setErrorMsg('');
            setShowErrorMsg(false);
          }, 2500);
      return;
    }
    setUserName(e.target.user_name.value);
    emailjs
      .sendForm(
        "service_wrz34yh",
        "template_rd3tb9x",
        form.current,
        "yAJBktu26a-WB5DcI"
      )
      .then(
        (result) => {
          e.target.user_name.value = '';
          e.target.user_email.value = '';
          e.target.message.value = '';
          setShowSuccessMsg(true);
          setTimeout(() => {
            setShowSuccessMsg(false);
            setUserName('');
          }, 4500);
        },
        (error) => {
          setShowErrorMsg(true);
          setTimeout(() => {
            setShowErrorMsg(false);
          }, 4500);
        }
      );
  };
  return (
    <section className="my-20"
      id="contact"
    >
      <div className="mt-16">
          <h2 className="font-bold text-8xl mb-32 w-full text-center lg:text-6xl xs:text-4xl md:mb-16">
            Contact me
          </h2>
      </div>
      <div className="w-full flex gap-4 items-center md:flex-col-reverse">  
        <div className="w-1/2 h-full flex flex-col lg:w-full md:w[90%] md:w-full">
          <form className="w-full h-full flex flex-col" ref={form} onSubmit={sendEmail} >
            <div className="w-auto flex flex-col mx-5 my-3 mt-2 gap-2">
              <label>Name</label>
              <input type="text" name="user_name" className="w-full h-[35px] focus:outline-none focus:outline-dark rounded-lg px-3" />
            </div>
            <div className="w-auto flex flex-col mx-5 my-3 mt-2 gap-2 lg:w[80%]">
              <label>Email</label>
              <input type="email" name="user_email" className="w-full h-[35px] focus:outline-none focus:outline-dark rounded-lg px-3"/>
            </div>
            <div className="w-auto flex flex-col mx-5 my-5 mt-2 gap-2 lg:w[90%]">
              <label>Message</label>
              <textarea name="message" className="w-full h-[200px] focus:outline-none focus:outline-dark rounded-lg p-3"/>
            </div>
            <div className="flex flex-col mx-5 my-5 mt-2 lg:w[90%]">
              <input className="flex w-fit items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base " type="submit" value="Send" />
            </div>
          </form>
        </div>
        <div className="w-1/2 h-full flex ml-6 justify-center items-center lg:w-[80%] lg:mb-[30px] md:w-full">
          {inView && <AnimatedText text="Share your dream, we'll make it a breathtaking reality together" className="!text-5xl text-center lg:!text-4xl sm:text-sm xs:text-xs"/>}
        </div>
      </div>    

      <EmailJSResponseStatus sender={userName} isVisible={showSuccessMsg}/>
      <EmailJSResponseError errorMsg={errormsg} isVisible={showErrorMsg}/>
    </section>
  );
};

export default Contact;
