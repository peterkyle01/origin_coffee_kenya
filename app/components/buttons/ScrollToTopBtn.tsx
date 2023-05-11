"use client";

import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ScrollToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={`z-50 fixed bottom-20 -right-2 text-yellow-500 transition-opacity duration-300 ${
        showScrollButton ? "opacity-100" : "opacity-0"
      }`}>
        <p className="rotate-90 flex items-center text-sm "><i className="mr-2"><AiOutlineArrowLeft/></i>BACK TO TOP</p>
      
    </button>
  );
};

export default ScrollToTopButton;
