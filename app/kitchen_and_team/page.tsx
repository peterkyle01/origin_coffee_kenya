import Image from "next/image";

import image1 from "../../public/Image1.webp";
export default function page() {
  return (
    <>
      <header className="relative flex h-80 w-screen items-center justify-center">
        <div className="absolute z-10 h-full w-full bg-black/40"></div>
        <Image
          src={image1}
          fill
          priority
          alt="Food Image"
          sizes="max-width:2500px,max-height:1800"
        />
        <h2 className="z-20">KITCHEN AND TEAM</h2>
      </header>
      <main className="h-100 w-screen  bg-black/95"></main>
    </>
  );
}
