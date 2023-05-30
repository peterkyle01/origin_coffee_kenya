import Image from "next/image";
import imageTen from "../../public/img_ten.jpg";
import { DatePicker } from "../components/buttons/DatePicker";
import { TimeSelect } from "../components/buttons/TimeSelect";
import { PeopleSelect } from "../components/buttons/PeopleSelect";
import { Button } from "../components/ui/button";

export default function page() {
  return (
    <>
      <header className="relative flex h-80 w-screen items-center justify-center">
        <div className="absolute z-10 h-full w-full bg-black/40"></div>
        <Image
          src={imageTen}
          fill
          priority
          alt="Food Image"
          sizes="max-width:2500px,max-height:1800"
        />
        <h2 className="z-20">LOCATION</h2>
      </header>
      <main className="h-auto w-screen bg-black/95 p-1 ">
        <section className="flex h-auto w-screen flex-col sm:flex-row">
          <div className="h-80 w-full">
            <h3 className="m-1">Make A Reservation</h3>
            <div className="grid h-3/4 w-full place-items-center">
              <DatePicker />
              <TimeSelect />
              <PeopleSelect />
              <Button>Book a Table</Button>
            </div>
          </div>
          <div className="relative h-80 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3989.767460677117!2d36.0521125!3d-0.2892999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18290ba5b6ddcf83%3A0x65b1167f746bb292!2sOrigin%20Coffee%20Nakuru!5e0!3m2!1sen!2ske!4v1685456322089!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        <section className="flex h-auto w-screen flex-col sm:flex-row-reverse">
          <div className="relative h-80 w-full">
            <Image
              src={imageTen}
              fill
              priority
              alt="Food Image"
              sizes="max-width:2500px,max-height:1800"
            />
          </div>
          <div className="relative h-80 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6654987637985!2d35.268287773513336!3d0.5014813637183229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17810115ab2f9963%3A0xca035aa6cb339b65!2sOrigin%20Coffee%20Eldoret!5e0!3m2!1sen!2ske!4v1684487461117!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
