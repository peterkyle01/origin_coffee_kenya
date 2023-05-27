"use client";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { useState } from "react";
import {
  createTRPCProxyClient,
  httpBatchLink,
  TRPCClientError,
} from "@trpc/client";
import { AppRouter } from "@/server";

export function isTRPCClientError(
  cause: unknown
): cause is TRPCClientError<AppRouter> {
  return cause instanceof TRPCClientError;
}

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});
const Links: { name: string }[] = [
  {
    name: "AllMeals",
  },
  {
    name: "Breakfast",
  },
  {
    name: "OriginPizza",
  },
  {
    name: "LunchAndDinner",
  },
  {
    name: "SodaAndWater",
  },
  {
    name: "Drinks",
  },
];

type Food = {
  id: number;
  title: string;
  add_ons: string | null;
  price: number;
  category: string;
}[];

const MenuCard = () => {
  const [divName, setDivName] = useState("AllMeals");
  const [meals, setMeals] = useState<Food | null>(null);

  async function handleData(name: string) {
    try {
      const res = await trpc.meal.query();

      const meals_ = res.filter((meal) => {
        if (name == "AllMeals") {
          return res;
        } else {
          return meal.category == name;
        }
      });
      setMeals(meals_);
    } catch (cause) {
      if (isTRPCClientError(cause)) {
        alert(cause.data);
      }
    }
  }

  return (
    <>
      <section className="scroll_section grid h-32 w-screen">
        <div className="flex items-center overflow-x-scroll md:justify-evenly md:overflow-x-hidden">
          {Links.map((link) => (
            <button
              key={link.name}
              className="mx-2 text-lg text-white"
              onClick={() => {
                setDivName(link.name);
                handleData(link.name);
              }}
            >
              {link.name}
            </button>
          ))}
        </div>
        <p className="place-self-center text-xl font-black tracking-widest text-white ">
          {divName}
        </p>
      </section>
      <section className="grid h-100 w-screen grid-cols-2 gap-1 overflow-y-scroll p-1 sm:grid-cols-3 lg:grid-cols-4">
        {meals && meals.map((item) => (
          <div className="grid h-72 w-full bg-black/50" key={item.id}>
            <div className="relative h-48 bg-white">
              <Image
                src={Logo}
                fill
                priority
                alt="Logo Image"
                sizes="max-width:2500px,max-height:1800"
              />
            </div>
            <p className="text-lg font-extrabold uppercase">{item.title}</p>
            <p className="text-center text-sm uppercase text-gray-400">
              {item.add_ons}
            </p>
            <hr className="w-3/4 place-self-center" />
            <p className="font-bold text-orange-300">Ksh{item.price}</p>
          </div>
        ))}
      </section>
    </>
  );
};
export default MenuCard;
