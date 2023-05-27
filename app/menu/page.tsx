import Image from "next/image";
import imageTen from "../../public/img_ten.jpg";
import MenuCard from "../components/others/MenuCard";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import superjson from "superjson";
import { AppRouter } from "@/server";

const trpc = createTRPCProxyClient<AppRouter>({
  transformer:superjson,
  links: [
    httpBatchLink({
      url: process.env.API_ENDPOINT as string,
    }),
  ],
});


export default async function Menu() {
  const foods = await trpc.meal.query()
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
        <h2 className="z-20">MENU</h2>
      </header>
      <main className="h-auto w-screen bg-black/95">
        <MenuCard data={foods}/>
      </main>
    </>
  );
}
