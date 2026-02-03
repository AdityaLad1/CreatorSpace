import React from "react";
import Image from "next/image";
import animatedDungeunImage from "../../components/icons/animatedDungeonMap.gif";
import cat2 from "../../components/icons/cat2.jpeg";

export default async function Username({ params }) {
  const { username } = await params;

  return (
    <>
      <div className="cover w-full relative h-[350px]">
        <Image
          src={animatedDungeunImage}
          alt="Cover"
          fill
          className="object-cover"
          priority
          unoptimized
        />

        <div
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 border-white border-2 w-[120px] h-[120px]
                rounded-full overflow-hidden"
        >
          <Image src={cat2} alt="Profile" fill className="object-cover" />
        </div>
      </div>
      <div className="info flex justify-center items-center my-24 flex-col gap-2">
        <div className="font-bold">@{username}</div>
        <div className="text-slate-400">
          Creating animated battle maps for D&D and fantasy tabletop games
        </div>
        <div className="text-slate-400">
          21,820 members .1,272 Posts .$12,180/month
        </div>
        <div className="payment flex gap-3 w-[80%]">
          <div className="supporters w-1/2 bg-slate-800 rounded-lg p-8">
            <h2
              className="text-2xl
         font-bold my-5"
            >
              Supporters
            </h2>
            <ul className="mx-3">
              <li className="my-2">Ojas donated $500 with a message</li>
              <li className="my-2">Ojas donated $500 with a message</li>
              <li className="my-2">Ojas donated $500 with a message</li>
              <li className="my-2">Ojas donated $500 with a message</li>
              <li className="my-2">Ojas donated $500 with a message</li>
              <li className="my-2">Ojas donated $500 with a message</li>
            </ul>
          </div>
          <div className="makepayment w-1/2 bg-slate-800 rounded-lg  p-8">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Name"
                className="p-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
              />
              <input
                type="number"
                placeholder="Amount (USD)"
                className="p-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
              />
              <input
                type="text"
                placeholder="Message (optional)"
                className="p-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105 w-fit"
              >
                Donate
              </button>
            </form>
            <div>
              choose from this Amounts
              <div className="flex gap-3 my-3">
                <button className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105">
                  $5
                </button>
                <button className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105">
                  $10
                </button>
                <button className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105">
                  $20
                </button>
                <button className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105">
                  $50
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
