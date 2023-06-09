"use client";

import { useEffect, useState } from "react";
import {
  createTRPCProxyClient,
  httpBatchLink,
  TRPCClientError,
} from "@trpc/client";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import { AppRouter } from "@/server";

function isTRPCClientError(
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
    name: "JuicesAndDesert",
  },
  {
    name: "SoupAndSalads",
  },
  {
    name: "KiddieMenu",
  },
  {
    name: "Cocktails",
  },
  {
    name: "PitchersAndShakes",
  },
  {
    name: "BeerAndShooters",
  },
  {
    name: "WinesAndChampagne",
  },
  {
    name: "WhiskeyAndGin",
  },
  {
    name: "OtherDrinks",
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
    getData();
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
      <section className="grid h-32 w-screen relative">
        <div className="absolute z-30 flex h-0 top-4 w-full items-start justify-between bg-red-300/50 text-orange-300">
          <i>
            <BiCaretLeft size={30} />
          </i>
          <i>
            <BiCaretRight size={30} />
          </i>
        </div>
        <div className=" flex items-center overflow-x-scroll px-4">
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
      <section className="grid h-100 w-screen grid-cols-3 gap-1 overflow-y-scroll p-1 sm:grid-cols-4 lg:grid-cols-6">
        {meals &&
          meals.map((item) => (
            <div
              className="grid h-56 w-full rounded bg-black/50 p-2"
              key={item.id}
            >
              <p className="font-extrabold uppercase">{item.title}</p>
              <p className="text-center text-xs uppercase text-gray-400">
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
