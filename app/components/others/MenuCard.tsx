"use client";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
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
      url: "https://origin-coffee-kenya.vercel.app/api/trpc",
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

  useEffect(() => {
    async function getData() {
      try {
        const res = await trpc.meal.query();

        setMeals(res);
      } catch (cause) {
        if (isTRPCClientError(cause)) {
          alert(cause.data);
        }
      }
    }
    getData()
  }, []);

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
      <section className="grid h-200 w-screen grid-cols-3 gap-1 overflow-y-scroll p-1 sm:grid-cols-4 lg:grid-cols-6">
        {meals &&
          meals.map((item) => (
            <div className="grid h-64 w-full bg-black/50" key={item.id}>
              <div className="relative h-44 bg-white">
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
