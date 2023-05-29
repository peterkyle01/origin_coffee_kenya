import Image from "next/image";
import imageTen from "../../public/img_ten.jpg";
import MenuCard from "../components/others/MenuCard";

export default function Menu() {

  return (
    <>
      <header className="relative flex h-80 w-screen items-center justify-center">
        <div className="absolute z-10 h-full w-full bg-black/50"></div>
        <Image
          src={imageTen}
          fill
          priority
          alt="Food Image"
          sizes="max-width:2500px,max-height:1800"
        />
        <h2 className="z-20">MENU</h2>
      </header>
      <main className="h-auto w-screen bg-black/95">
        <MenuCard />
      </main>
    </>
  );
}
