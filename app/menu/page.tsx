import MenuCard from "../components/others/MenuCard";

export default function Menu() {
  return (
    <>
      <main className="h-auto w-screen bg-black/95 pt-12">
        <MenuCard />
        <section className="flex h-100 w-full flex-col p-2 sm:h-80 sm:flex-row">
          <div className="flex h-full w-full items-center sm:flex-col">
            <h1 className="p-2 ">O</h1>
            <h2 className="p-1 ">Openness</h2>
            <p className="p-2 text-xs">Honesty accountability transparency</p>
          </div>
          <div className="flex h-full w-full items-center sm:flex-col">
            <h1 className="p-2">R</h1>
            <h2 className="p-1">Reliable</h2>
            <p className="p-2 text-xs">
              Trustworthy,We deliver what we promise
            </p>
          </div>
          <div className="flex h-full w-full items-center sm:flex-col">
            <h1 className="p-2">I</h1>
            <h2 className="p-1">Ingenuity</h2>
            <p className="p-2 text-xs">
              The power of creative imagination-We purpose to continuously
              improve quality of our products and services
            </p>
          </div>
          <div className="flex h-full w-full items-center sm:flex-col">
            <h1 className="p-2">G</h1>
            <h2 className="p-1">Great</h2>
            <p className="p-2 text-xs">
              We aspire to exceed expectations everyday to create out of this
              world moments
            </p>
          </div>
          <div className="flex h-full w-full items-center sm:flex-col">
            <h1 className="p-2">I</h1>
            <h2 className="p-1">Inspire</h2>
            <p className="p-2 text-xs">
              Be the best you can be.Leave it better than you found it.
            </p>
          </div>
          <div className="flex h-full w-full items-center sm:flex-col">
            <h1 className="p-2">N</h1>
            <h2 className="p-1">Nurturing</h2>
            <p className="p-2 text-xs">
              We believe in taking care of others;our guests,staff,suppliers and
              partners.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
