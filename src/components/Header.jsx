import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sling as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import Navlink from "@/components/Navlink";

export default function Header() {
  const [isVisible, setIsVisible] = React.useState(true);
  const [isOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    //on  scroll down direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > window.innerHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      <header className="w-full h-[4.5rem] flex items-center justify-between py-2 fixed z-[25] border-b-[1.5px] bg-soothing_black/30 border-gray/30 backdrop-blur-lg transition-all duration-300 ease-in-out" style={{ transform: isVisible ? "translateY(0)" : "translateY(-100%)" }}>
        <div className="ml-2 md:ml-4 z-[26]" style={{ opacity: isOpen ? 0 : 1 }}>
          <Hamburger
            color="white"
            label="Show menu"
            direction="right"
            size={25}
            rounded={true}
            toggle={setOpen}
            toggled={isOpen}
          />
        </div>
        
        <button className="px-11 py-3 bg-main_primary text-white font-semibold font-clash rounded-md shadow-lg hover:bg-white  hover:text-main_primary transition-colors duration-300 mr-5 hidden xl:block">
          <a href="/Brochure.pdf" download> BROCHURE </a>
        </button>
        {/* <progress max="100" value="0"></progress> */}
      </header>

      {isOpen && (
        <motion.div
          className="fixed top-0 menuPop left-0 w-[80vw] max-w-[400px] md:w-[50vh] h-screen bg-black/50 z-[26] backdrop-blur-xl border-r-2 border-y-2 border-gray/20"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 18 }}
        >
          <div className="relative flex flex-col h-full">
            <div className="z-[26] h-[4.5rem] flex items-center border-b-[1.5px] border-gray/20">
              <div className="pl-4">
                <Hamburger
                  color="white"
                  label="Show menu"
                  direction="right"
                  size={30}
                  rounded={true}
                  toggle={setOpen}
                  toggled={isOpen}
                />
              </div>
              <div className="ml-4 border-l-[1.5px] border-gray/20 h-full"></div>
            </div>
            <div className="text-2xl sm:text-3xl font-clash font-black flex flex-col flex-grow">
              {/* Reordered navigation with larger touch targets */}
              <div className="relative bg-white/20 text-white w-full text-left pl-4 pr-6 py-4">
                <Navlink name={"HOME"} link={"/"} setToggle={setOpen} />
                <p className="absolute right-4 top-3 text-xs font-bold text-white">PAGE 01</p>
              </div>

              <div className="relative hackNav hover:bg-white/10 text-white w-full text-left pl-4 pr-6 py-4">
                <Navlink name={"EVENTS"} link={"/events"} setToggle={setOpen} />
                <p className="absolute right-4 top-3 text-xs font-bold text-transparent navPageNo">PAGE 02</p>
              </div>

              <div className="relative hackNav hover:bg-white/10 text-white w-full text-left pl-4 pr-6 py-4">
                <Navlink name={"ABOUT"} link={"/#about"} setToggle={setOpen} />
                <p className="absolute right-4 top-3 text-xs font-bold text-transparent navPageNo">PAGE 03</p>
              </div>

              <div className="relative hackNav hover:bg-white/10 text-white w-full text-left pl-4 pr-6 py-4">
                <Navlink name={"TEAMS"} link={"/teams"} setToggle={setOpen} />
                <p className="absolute right-4 top-3 text-xs font-bold text-transparent navPageNo">PAGE 04</p>
              </div>

              <div className="relative hackNav hover:bg-white/10 text-white w-full text-left pl-4 pr-6 py-4">
                <Navlink name={"GALLERY"} link={"/gallery"} setToggle={setOpen} />
                <p className="absolute right-4 top-3 text-xs font-bold text-transparent navPageNo">PAGE 05</p>
              </div>

              <div className="relative hackNav hover:bg-white/10 text-white w-full text-left pl-4 pr-6 py-4">
                <Navlink name={"MERCHANDISE"} link={"/#merchandise"} setToggle={setOpen} />
                <p className="absolute right-4 top-3 text-xs font-bold text-transparent navPageNo">PAGE 06</p>
              </div>

              <div className="relative hackNav hover:bg-white/10 text-white w-full text-left pl-4 pr-6 py-4">
                <Navlink name={"SPONSORS"} link={"/#sponsors"} setToggle={setOpen} />
                <p className="absolute right-4 top-3 text-xs font-bold text-transparent navPageNo">PAGE 07</p>
              </div>

              <div className="relative hackNav hover:bg-white/10 text-white w-full text-left pl-4 pr-6 py-4">
                <Navlink name={"FAQ"} link={"/#faq"} setToggle={setOpen} />
                <p className="absolute right-4 top-3 text-xs font-bold text-transparent navPageNo">PAGE 08</p>
              </div>

              <div className="relative hackNav hover:bg-white/10 text-white w-full text-left pl-4 pr-6 py-4">
                <Navlink name={"CONTACT"} link={"/contact"} setToggle={setOpen} />
                <p className="absolute right-4 top-3 text-xs font-bold text-transparent navPageNo">PAGE 09</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

