import Image from "next/image";
import imageTen from "../../public/img_ten.jpg";
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
        <h2 className="z-20">OUR STORY</h2>
      </header>
      <main className="w-screen h-100  bg-black/95"></main>
    </>
  );
}
