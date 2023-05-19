import Image from "next/image";
import imageTen from "../../public/img_ten.jpg";
import { DatePicker } from "../components/buttons/DatePicker";
import { TimeSelect } from "../components/buttons/TimeSelect";
import { PeopleSelect } from "../components/buttons/PeopleSelect";
import { Button } from "../components/ui/button";

export default function page() {
  return (
    <>
      <header className="w-screen h-80 relative flex justify-center items-center">
        <div className="bg-black/40 w-full h-full absolute z-10"></div>
        <Image
          src={imageTen}
          fill
          priority
          alt="Food Image"
          sizes="max-width:2500px,max-height:1800"
        />
        <h2 className="z-20">LOCATION</h2>
      </header>
      <main className="w-screen h-auto flex flex-col p-1 bg-black/95 sm:flex-row">
        <section className="w-full h-80">
          <h3 className="m-1">Make A Reservation</h3>
          <div className="w-full h-3/4 grid place-items-center">
            <DatePicker />
            <TimeSelect />
            <PeopleSelect/>
            <Button>Book a Table</Button>
          </div>
        </section>
        <section className="w-full h-80 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6654987637985!2d35.268287773513336!3d0.5014813637183229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17810115ab2f9963%3A0xca035aa6cb339b65!2sOrigin%20Coffee%20Eldoret!5e0!3m2!1sen!2ske!4v1684487461117!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </main>
    </>
  );
}
