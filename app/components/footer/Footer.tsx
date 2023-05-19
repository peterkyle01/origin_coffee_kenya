import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-screen h-auto bg-black/90">
      <div className="w-full h-auto sm:inline-flex">
        <div className="w-full h-auto sm:h-80">
          <p className="text-orange-300 font-semibold text-2xl py-8">
            ORIGIN COFFEE KENYA
          </p>
          <p className="py-1 font-thin">
            Origin Coffee Kenya - The Kenyan restaurant
          </p>
          <p className="py-1 font-thin">Eldoret & Nakuru,Kenya</p>
          <p className="py-1 font-thin">Africa</p>
        </div>
        <div className="w-full h-auto sm:h-80 grid py-8">
          <p className="py-2 font-thin">Phone:0795100000</p>
          <p className="py-2 font-thin">Email:info@origincoffee.co.ke</p>
          <p className="py-2 font-thin">Wed-Sat:from 9:00 am</p>
          <p className="py-2 font-thin">Sun:from 12 am to 3 pm</p>
        </div>
        <div className="w-full h-auto sm:h-80 py-8">
          <p className="py-2 font-semibold">LATEST JOBS</p>
          <p className="py-2 font-thin">
            Looking for a great,fun workplace?Join the Origin Coffee Kenya by
            sharing your resume of the position interested to:
            <Link href={"mailto:cv@origincoffee.co.ke"} className="text-orange-300">
              cv@origincoffee.co.ke
            </Link>
          </p>
        </div>
      </div>
      <div className="w-full h-24">
        <span className="m-2 flex">
          <i className="text-3xl text-white m-2">
            <FaFacebookSquare />
          </i>
          <i className="text-3xl text-white m-2">
            <FaInstagramSquare />
          </i>
          <i className="text-3xl text-white m-2">
            <FaTwitterSquare />
          </i>
        </span>
        <p className="my-2 font-semibold tracking-wider">
          @ 2023 Origin Coffee Kenya , All rights reserved
        </p>
      </div>
    </footer>
  );
}
