"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../public/logo.png";

const links = [
  { name: "Home", url: "/", icon: <></> },
  { name: "Menu", url: "/menu", icon: <></> },
  { name: "Our Story", url: "/our_story", icon: <></> },
  { name: "Contact Us", url: "/contact_us", icon: <></> },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  let menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let handler = (e: Event) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="w-full h-full flex">
      <div className="w-1/2 h-full flex justify-start items-center pl-2">
        <Link href="/">
          <Image src="/logo.png" width={40} height={40} alt="Logo Image" />
        </Link>
      </div>
      <div className="w-1/2 h-full flex justify-end items-center pr-2 sm:hidden">
        <i onClick={() => setShowMenu(!showMenu)} className="sm:hidden">
          {showMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
        </i>
        {showMenu && (
          <div
            className="w-3/4 h-auto p-4 absolute top-14 rounded-md bg-white"
            ref={menuRef}>
            <div className="w-6 h-6 bg-white absolute rotate-45 right-1.5 -top-0"></div>
            <div className="w-full h-1/2 flex justify-center items-center px-2">
              <hr className="w-1/2 h-0.5 bg-orange-300" />
              <Image
                className="mx-4 animate-bounce"
                src={logo}
                width={30}
                height={30}
                alt="logo image"
              />
              <hr className="w-1/2 h-0.5 bg-orange-300" />
            </div>
            <ul>
              {links.map((link) => (
                <Link
                  className="w-full sm:hidden"
                  href={link.url}
                  key={link.name}>
                  <span
                    className="p-2 flex justify-start items-center"
                    onClick={() => {
                      setShowMenu(false);
                    }}>
                    <li className="font-bold">{link.name}</li>
                    <i>{link.icon}</i>
                  </span>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div
        className="hidden relative sm:w-1/2 sm:h-full sm:flex sm:justify-center"
        ref={menuRef}>
        <ul className="sm:w-full sm:flex sm:justify-evenly sm:items-center">
          {links.map((link) => (
            <Link className="px-1" href={link.url} key={link.name}>
              <span
                className="sm:flex sm:justify-start sm:items-center sm:text-black hover:text-orange-300"
                onClick={() => {
                  setShowMenu(false);
                }}>
                <li className="sm:font-bold">{link.name}</li>
                <i className="sm:pr-0.5 ">{link.icon}</i>
              </span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
