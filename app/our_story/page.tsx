import Image from "next/image";
import imageTen from "../../public/img_ten.jpg";
import { IoTrophyOutline, IoFastFoodOutline } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";

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
        <h2 className="z-20">OUR STORY</h2>
      </header>
      <main className="h-auto w-screen  bg-black/95">
        <section className="flex h-auto w-screen flex-col p-4 sm:flex-row">
          <div className="h-auto w-full md:h-80">
            <h1 className="my-2">Who are we</h1>
            <p>
              We are a Homegrown Kenyan authentic Fusion restaurant showcasing
              global cuisine using fresh local ingredients. Our brand features a
              Coffee shop,Restaurant,BBQ Steak House,Artisan Pizza,Wine &
              Cocktail Bar and a Bakery. Our Journey began 2018 when a concept
              Casual coffee shop was born and evolved into a foodie destination
              for our guests to experience the love for food. We are all about
              crafting unique Great Culinary Moments for our guests
            </p>
          </div>
          <div className="h-auto w-full md:h-80">
            <div className="h-auto w-full">
              <h1 className="my-1">Our Vision</h1>
              <p>
                To be the preferred hospitality company in the ownership and
                management of Hospitality outlets in key markets of Africa.
              </p>
            </div>
            <div className="h-auto w-full">
              <h1 className="my-1">Mission Statement</h1>
              <p>
                To be the most hospitable company in the world by creating
                heartfelt experiences for our Guests, meaningful opportunities
                for our Associates,high value for Owners and positive impact in
                our communities.
              </p>
            </div>
          </div>
        </section>
        <section className="flex h-auto w-screen flex-col sm:flex-row">
          <div className="grid h-80 w-full sm:h-100">
            <div className="grid h-40 w-40 place-content-center place-self-center rounded-full border-2 border-orange-300 p-4">
              <i>
                <IoTrophyOutline color="rgb(253 186 116)" size={50} />
              </i>
            </div>
            <h3 className="italic">QUALITY ASSURANCE</h3>
            <p className="text-sm font-thin">
              At Origin Coffee Kenya Restaurant,we source our meals from local
              farmers who follow organic and sustainable practices. We train our
              staff to serve our customers with professionalism and courtesy. We
              strive to provide you with the best food experience possible.
            </p>
          </div>
          <div className="grid h-80 w-full sm:h-100">
            <div className="grid h-40 w-40 place-content-center place-self-center rounded-full  border-2 border-orange-300 p-4">
              <i>
                <GiSandsOfTime color="rgb(253 186 116)" size={50} />
              </i>
            </div>
            <h3 className="italic">MINIMUM WAITING TIME</h3>
            <p className="text-sm font-thin">
              We are pleased to inform you that we have reduced the minimum
              waiting time at Origin Coffee Kenya Restaurant. You can now enjoy
              our delicious coffee and food in less than 15 minutes. Thank you
              for choosing us and we hope to see you soon.
            </p>
          </div>
          <div className="grid h-80 w-full sm:h-100">
            <div className="grid h-40 w-40 place-content-center place-self-center rounded-full border-2 border-orange-300 p-4">
              <i>
                <IoFastFoodOutline color="rgb(253 186 116)" size={50} />
              </i>
            </div>
            <h3 className="italic">LOCAL FRESH INGREDIENTS</h3>
            <p className="text-sm font-thin">
              Our chefs from Origin Coffee Kenya source the best produce from
              nearby farms and markets, and prepare them with care and
              creativity. Come and experience the authentic flavors of Kenyan
              cuisine at Origin Coffee Kenya.
            </p>
          </div>
        </section>
        <section className="grid h-80 w-screen grid-cols-2 p-4 lg:h-100">
          <div className="relative">
            <Image
              src={imageTen}
              fill
              priority
              alt="Food Image"
              sizes="max-width:2500px,max-height:1800"
            />
          </div>
          <div className="relative">
            <Image
              src={imageTen}
              fill
              priority
              alt="Food Image"
              sizes="max-width:2500px,max-height:1800"
            />
          </div>
        </section>
        <section className="flex h-100 w-full flex-col p-2 sm:flex-row sm:h-80">
          <div className="flex h-full w-full items-center sm:flex-col">
            <h1 className="p-2 ">O</h1>
            <h2 className="p-1 ">Openness</h2>
            <p className="text-xs p-2">Honesty accountability transparency</p>
          </div>
          <div className="flex h-full items-center w-full sm:flex-col">
            <h1 className="p-2">R</h1>
            <h2 className="p-1">Reliable</h2>
            <p className="text-xs p-2"> Trustworthy,We deliver what we promise</p>
          </div>
          <div className="flex h-full items-center w-full sm:flex-col">
            <h1 className="p-2">I</h1>
            <h2 className="p-1">Ingenuity</h2>
            <p className="text-xs p-2">
              The power of creative imagination-We purpose to continuously
              improve quality of our products and services
            </p>
          </div>
          <div className="flex h-full items-center w-full sm:flex-col">
            <h1 className="p-2">G</h1>
            <h2 className="p-1">Great</h2>
            <p className="text-xs p-2">
              We aspire to exceed expectations everyday to create out of this
              world moments
            </p>
          </div>
          <div className="flex h-full items-center w-full sm:flex-col">
            <h1 className="p-2">I</h1>
            <h2 className="p-1">Inspire</h2>
            <p className="text-xs p-2">
              Be the best you can be.Leave it better than you found it.
            </p>
          </div>
          <div className="flex h-full items-center w-full sm:flex-col">
            <h1 className="p-2">N</h1>
            <h2 className="p-1">Nurturing</h2>
            <p className="text-xs p-2">
              We believe in taking care of others;our guests,staff,suppliers and
              partners.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
