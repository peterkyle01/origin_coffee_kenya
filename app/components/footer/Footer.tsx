import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="h-auto w-screen bg-black/90">
      <div className="h-auto w-full sm:inline-flex">
        <div className="h-auto w-full sm:h-80">
          <p className="py-8 text-2xl font-semibold text-orange-300">
            ORIGIN COFFEE KENYA
          </p>
          <p className="py-1 font-thin">
            Origin Coffee Kenya - The Kenyan restaurant
          </p>
          <p className="py-1 font-thin">Eldoret & Nakuru,Kenya</p>
          <p className="py-1 font-thin">Africa</p>
        </div>
        <div className="grid h-auto w-full py-8 sm:h-80">
          <p className="py-2 font-thin">
            Phone:
            <Link href={"tel:0795100000"} className="text-orange-300">
              0795100000
            </Link>
          </p>
          <p className="py-2 font-thin">
            Email:
            <Link
              href={"mailto:info@origincoffee.co.ke"}
              className="text-orange-300"
            >
              info@origincoffee.co.ke
            </Link>
          </p>
          <p className="py-2 font-thin">Mon-Sat:from 9:00 am</p>
          <p className="py-2 font-thin">Sun:from 12 pm to 4 pm</p>
        </div>
        <div className="h-auto w-full py-8 sm:h-80">
          <p className="py-2 font-semibold">LATEST JOBS</p>
          <p className="py-2 font-thin">
            Looking for a great,fun workplace?Join the Origin Coffee Kenya by
            sharing your resume of the position interested to:
            <Link
              href={"mailto:cv@origincoffee.co.ke"}
              className="text-orange-300"
            >
              cv@origincoffee.co.ke
            </Link>
          </p>
          <p className="py-2 font-thin">
            This Website was developed by Peterkyle:
            <Link href={"tel:0758685974"} className="text-orange-300">
              0758685974
            </Link>
          </p>
        </div>
      </div>
      <div className="h-24 w-full">
        <span className="m-2 flex">
          <Link
            href={"https://web.facebook.com/OrigincoffeeKenya/"}
            target="_blank"
            className="m-2 text-3xl text-white"
          >
            <FaFacebookSquare />
          </Link>
          <Link
            href={
              "https://www.instagram.com/origincoffeeke/?igshid=19tngv6dk7437"
            }
            target="_blank"
            className="m-2 text-3xl text-white"
          >
            <FaInstagramSquare />
          </Link>
          <Link
            href={"https://twitter.com/kenya_origin"}
            target="_blank"
            className="m-2 text-3xl text-white"
          >
            <FaTwitterSquare />
          </Link>
        </span>
        <p className="my-2 font-semibold tracking-wider">
          @ 2023 Origin Coffee Kenya , All rights reserved
        </p>
      </div>
    </footer>
  );
}
