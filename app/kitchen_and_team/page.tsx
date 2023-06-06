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
      <main className="h-100 w-screen  bg-black/95">
        <h1 className="my-1">Chef and Team</h1>
        <p>
          The chef and team of Origin Coffee Kenya are passionate about creating
          fusion dishes that showcase the best of local and global cuisine. They
          use fresh ingredients from local farmers and suppliers, and prepare
          them with skill and creativity. The chef has over 10 years of
          experience in the hospitality industry, and has trained with some of
          the best chefs in the world. The team consists of talented and
          friendly staff who are dedicated to providing excellent service and
          memorable experiences to their guests. Origin Coffee Kenya is more
          than just a coffee shop, it is a destination for food lovers who
          appreciate quality and diversity.
        </p>
      </main>
    </>
  );
}
