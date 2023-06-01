import Image from "next/image";
import image1 from "../public/Image1.webp";
import image3 from "../public/Image3.webp";
import image4 from "../public/Image4.webp";
import image5 from "../public/Image5.webp";
import image6 from "../public/Image6.webp";
import image7 from "../public/Image7.webp";
import image8 from "../public/Image8.webp";
import image9 from "../public/Image9.webp";
import image10 from "../public/Image10.webp";
import NormalBtn from "./components/buttons/NormalBtn";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <header className="relative flex h-100 w-screen items-center justify-center ">
        <div className="absolute z-10 h-full w-full bg-black/20"></div>
        <Image
          src={image1}
          fill
          priority
          alt="Food Image"
          sizes="max-width:2500px,max-height:1800"
        />
        <div className="z-20 grid h-1/2 w-1/2">
          <h1 className="text-center">Welcome</h1>
          <h2 className="text-center">ORIGIN COFFEE KENYA</h2>
          <hr className="h-0.5 w-1/2 place-self-center bg-white" />
          <h3 className=" text-center">KENYAN FOOD AND WINE</h3>
          <NormalBtn name="Order" href="tel:0795100000" />
        </div>
        <p className="absolute -left-2 bottom-10 z-20 flex rotate-90 items-center text-sm">
          SCROLL
          <i className="ml-2">
            <AiOutlineArrowRight />
          </i>
        </p>
      </header>
      <main className="h-auto w-screen bg-black/95">
        <section className="flex h-auto w-full flex-col bg-black/90 sm:flex-row">
          <div className="grid h-96 w-full p-4">
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
          <div className="h-96 w-full p-4 sm:p-8">
            <div className="relative h-full w-full">
              <Image
                src={image3}
                fill
                priority
                alt="Food Image"
                sizes="max-width:2500px,max-height:1800"
              />
            </div>
          </div>
        </section>
        <section className="flex h-auto w-full flex-col sm:flex-row-reverse">
          <div className="grid h-96 w-full p-8">
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
          <div className="relative grid h-96 w-full grid-cols-2 items-center gap-4 p-8">
            <div className="relative h-36 w-36 place-self-center lg:h-40 lg:w-40 lg:place-self-end">
              <Image
                src={image5}
                fill
                alt="Food Image"
                sizes="max-width:2500px,max-height:1800"
              />
            </div>
            <div className="relative h-36 w-36 place-self-center lg:h-40 lg:w-40 lg:place-self-start">
              <Image
                src={image8}
                fill
                alt="Food Image"
                sizes="max-width:2500px,max-height:1800"
              />
            </div>
            <div className="relative h-36 w-36 place-self-center lg:h-40 lg:w-40 lg:place-self-end">
              <Image
                src={image9}
                fill
                alt="Food Image"
                sizes="max-width:2500px,max-height:1800"
              />
            </div>
            <div className="relative h-36 w-36 place-self-center lg:h-40 lg:w-40 lg:place-self-start">
              <Image
                src={image10}
                fill
                alt="Food Image"
                sizes="max-width:2500px,max-height:1800"
              />
            </div>
          </div>
        </section>
        <section className="flex h-auto w-full flex-col  bg-black/90 sm:flex-row">
          <div className="grid h-96 w-full p-8">
            <h1>Culinary</h1>
            <h2>Delight</h2>
            <p>
              We promise an intimate and relaxed dining experience that offers
              something here at Origin Coffee Kenya to local and foreig patrons
              and esures you enjoy a memorable food experience every time.
            </p>
            <NormalBtn name="Make a reservation" href="/location" />
          </div>
          <div className="relative grid h-96 w-full grid-cols-2 items-center gap-4 p-8">
            <div className="relative h-full w-full place-self-center lg:h-full  lg:place-self-end">
              <Image
                src={image6}
                fill
                alt="Food Image"
                sizes="max-width:2500px,max-height:1800"
              />
            </div>
            <div className="relative h-full w-full place-self-center lg:h-full  lg:place-self-start">
              <Image
                src={image7}
                fill
                alt="Food Image"
                sizes="max-width:2500px,max-height:1800"
              />
            </div>
          </div>
        </section>
        <section className="flex h-auto w-full flex-col sm:flex-row-reverse">
          <div className="grid h-96 w-full p-8">
            <h1>Professional</h1>
            <h2>Team</h2>
            <p>
              Our Origin Coffee Kenya ,Peter Kyle relies on a down-to-earth
              cuisine with a basic nature,varied interpretation and first-class
              flavours,with creative sophistication and attention to detail.
            </p>
            <NormalBtn name="Kitchen & Team" href="/kitchen_and_team" />
          </div>
          <div className="h-96 w-full p-8">
            <div className="relative h-full w-full">
              <Image
                src={image4}
                fill
                alt="Food Image"
                sizes="max-width:2500px,max-height:1800"
              />
            </div>
          </div>
        </section>
        <section className="flex h-100 w-full flex-col p-2 sm:h-80 sm:flex-row">
          <div className="flex h-full w-full items-center sm:flex-col">
            <h1 className="p-2 ">O</h1>
            <h2 className="p-1 ">Openness</h2>
            <p className="p-2 text-xs">Honesty accountability transparency</p>
          </div>
          <div className="flex h-full w-full items-center sm:flex-col">
            <h1 className="p-2">R</h1>
            <h2 className="p-1">Reliable</h2>
            <p className="p-2 text-xs">
              Trustworthy,We deliver what we promise
            </p>
          </div>
          <div className="flex h-full w-full items-center sm:flex-col">
            <h1 className="p-2">I</h1>
            <h2 className="p-1">Ingenuity</h2>
            <p className="p-2 text-xs">
              The power of creative imagination-We purpose to continuously
              improve quality of our products and services
            </p>
          </div>
          <div className="flex h-full w-full items-center sm:flex-col">
            <h1 className="p-2">G</h1>
            <h2 className="p-1">Great</h2>
            <p className="p-2 text-xs">
              We aspire to exceed expectations everyday to create out of this
              world moments
            </p>
          </div>
          <div className="flex h-full w-full items-center sm:flex-col">
            <h1 className="p-2">I</h1>
            <h2 className="p-1">Inspire</h2>
            <p className="p-2 text-xs">
              Be the best you can be.Leave it better than you found it.
            </p>
          </div>
          <div className="flex h-full w-full items-center sm:flex-col">
            <h1 className="p-2">N</h1>
            <h2 className="p-1">Nurturing</h2>
            <p className="p-2 text-xs">
              We believe in taking care of others;our guests,staff,suppliers and
              partners.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
