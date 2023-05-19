import Image from "next/image";
import imageTwo from "../public/img_two.jpg";
import imageFour from "../public/img_four.jpg";
import imageFive from "../public/img_five.jpg";
import imageSix from "../public/img_six.jpg";
import imageEight from "../public/img_eight.jpg";
import imageNine from "../public/img_nine.jpg";
import imageEleven from "../public/img_eleven.jpg";
import NormalBtn from "./components/buttons/NormalBtn";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <header className="w-screen h-100 relative flex justify-center items-center ">
        <div className="bg-black/40 w-full h-full absolute z-10"></div>
        <Image
          src={imageTwo}
          fill
          priority
          alt="Food Image"
          sizes="max-width:2500px,max-height:1800"
        />
        <div className="w-1/2 h-1/2 z-20 grid">
          <h1 className="text-center">Welcome</h1>
          <h2 className="text-center">ORIGIN COFFEE KENYA</h2>
          <hr className="w-1/2 h-0.5 bg-white place-self-center" />
          <h3 className=" text-center">KENYAN FOOD AND WINE</h3>
          <NormalBtn name="Order" href="#" />
        </div>
        <p className="absolute bottom-10 -left-2 z-20 rotate-90 flex items-center text-sm">
          SCROLL
          <i className="ml-2">
            <AiOutlineArrowRight />
          </i>
        </p>
      </header>
      <main className="w-screen h-auto bg-black/95">
        <section className="w-full h-auto flex flex-col bg-black/90 sm:flex-row">
          <div className="w-full h-96 grid p-4">
            <h1>Discover</h1>
            <h2>Our Story</h2>
            <p>
              Our restaurant is located in the sunny Eldoret City and cool
              Nakuru City.The ideology of the restaurant Origin Coffee Kenya was
              inspired by Kenyan Culture.The glazed facades on both sides of the
              building face the road with stunning views.
            </p>
            <NormalBtn name="About Us" href="/our_story" />
          </div>
          <div className="w-full h-96 p-4 sm:p-8">
            <div className="w-full h-full relative">
              <Image
                src={imageEight}
                fill
                priority
                alt="Food Image"
                sizes="max-width:2500px,max-height:1800"
              />
            </div>
          </div>
        </section>
        <section className="w-full h-auto flex flex-col sm:flex-row-reverse">
          <div className="w-full h-96 grid p-8">
            <h1>Tasteful</h1>
            <h2>Menu</h2>
            <p>
              If you want to enjoy the original Kenyan food and drink,then you
              are definitely at the right place,Origin Coffee Kenya!We promise
              that you and your family will not remain indifferent to our
              dishes.
            </p>
            <NormalBtn name="Menu" href="/menu" />
          </div>
          <div className="w-full h-96 p-8 grid grid-cols-2 gap-4 relative items-center">
            <div className="w-36 h-36 relative place-self-center lg:place-self-end lg:w-40 lg:h-40">
              <Image
                src={imageFour}
                fill
                alt="Food Image"
                sizes="max-width:2500px,max-height:1800"
              />
            </div>
            <div className="w-36 h-36 relative place-self-center lg:place-self-start lg:w-40 lg:h-40">
              <Image
                src={imageEleven}
                fill
                alt="Food Image"
                sizes="max-width:2500px,max-height:1800"
              />
            </div>
            <div className="w-36 h-36 relative place-self-center lg:place-self-end lg:w-40 lg:h-40">
              <Image
                src={imageEight}
                fill
                alt="Food Image"
                sizes="max-width:2500px,max-height:1800"
              />
            </div>
            <div className="w-36 h-36 relative place-self-center lg:place-self-start lg:w-40 lg:h-40">
              <Image
                src={imageNine}
                fill
                alt="Food Image"
                sizes="max-width:2500px,max-height:1800"
              />
            </div>
          </div>
        </section>
        <section className="w-full h-auto flex flex-col  bg-black/90 sm:flex-row">
          <div className="w-full h-96 grid p-8">
            <h1>Culinary</h1>
            <h2>Delight</h2>
            <p>
              We promise an intimate and relaxed dining experience that offers
              something here at Origin Coffee Kenya to local and foreig patrons
              and esures you enjoy a memorable food experience every time.
            </p>
            <NormalBtn name="Make a reservation" href="/location" />
          </div>
          <div className="w-full h-96 p-8 grid grid-cols-2 gap-4 relative items-center">
            <div className="w-full h-full relative place-self-center lg:place-self-end  lg:h-full">
              <Image
                src={imageFive}
                fill
                alt="Food Image"
                sizes="max-width:2500px,max-height:1800"
              />
            </div>
            <div className="w-full h-full relative place-self-center lg:place-self-start  lg:h-full">
              <Image
                src={imageSix}
                fill
                alt="Food Image"
                sizes="max-width:2500px,max-height:1800"
              />
            </div>
          </div>
        </section>
        <section className="w-full h-auto flex flex-col sm:flex-row-reverse">
          <div className="w-full h-96 grid p-8">
            <h1>Professional</h1>
            <h2>Team</h2>
            <p>
              Our Origin Coffee Kenya ,Peter Kyle relies on a down-to-earth
              cuisine with a basic nature,varied interpretation and first-class
              flavours,with creative sophistication and attention to detail.
            </p>
            <NormalBtn name="Kitchen & Team" href="/kitchen_and_team" />
          </div>
          <div className="w-full h-96 p-8">
            <div className="w-full h-full relative">
              <Image
                src={imageNine}
                fill
                alt="Food Image"
                sizes="max-width:2500px,max-height:1800"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
