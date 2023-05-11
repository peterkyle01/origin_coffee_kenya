"use client";

import Link from "next/link";

const NormalBtn = ({ name, href }: { name: string; href: string }) => {
  return (
    <Link
      href={href}
      className="w-1/2 bg-slate-800 flex justify-center items-center py-2 rounded-sm hover:bg-blue-950 place-self-center">
      <i className="p-1 text-sm text-white tracking-widest font-semibold">{name}</i>
    </Link>
  );
};
export default NormalBtn;
