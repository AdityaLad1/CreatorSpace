import Image from "next/image";
import { use } from "react";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center text-white h-[44vh]">
        <div className="font-bold text-5xl flex justify-center items-center gap-3">
          Buy me a Coffee{" "}
          <span>
            <lord-icon
              src="https://cdn.lordicon.com/oyxqonng.json"
              trigger="loop"
              stroke="bold"
              state="loop-cycle"
              style={{ width: 50, height: 50 }}
            />
          </span>
        </div>
        <p>
          Build, create, and ship without worrying about funding. Your
          supporters can back your journey instantly — no complicated setups, no
          hidden fees.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            className="text-white    bg-gradient-to-br from-purple-600 to-blue-500 font-medium text-sm px-5 py-2 rounded-xl transition-transform duration-200    hover:scale-110    focus:ring-4 focus:ring-blue-300 "
          >
            Get Started
          </button>

          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 
             hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
             focus:ring-blue-300 dark:focus:ring-blue-800 
             font-medium text-sm px-4 py-2 leading-5 rounded-xl
             transition-all duration-200 hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10 m-3 border rounded-2xl"> </div>

      <div className=" text-white container mx-auto pb-32 pt-14">
        <h1 className="text-3xl font-bold text-center mb-14">
          Your supporters power your journey
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center ">
            <lord-icon
              // className=" bg-slate-600 rounded-full  text-black"
              src="https://cdn.lordicon.com/bcrbahnt.json"
              trigger="loop"
              delay="3000"
              stroke="bold"
              style={{ width: 75, height: 75 }}
            />
            <p className="font-bold">Get Funded Instantly</p>
            <p className="text-center">
              Receive support directly from your fans with fast and secure
              payments. No delays, no complicated approvals.
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center ">
            <lord-icon
              src="https://cdn.lordicon.com/wyaqzesp.json"
              trigger="loop"
              delay="3000"
              stroke="bold"
              style={{ width: 75, height: 75 }}
            />
            <p className="font-bold">Build Your Community</p>
            <p className="text-center">
              Connect with supporters who believe in your work and grow a loyal
              audience around your passion.
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center ">
            <lord-icon
              src="https://cdn.lordicon.com/vrexohmd.json"
              trigger="loop"
              delay="3000"
              stroke="bold"
              style={{ width: 75, height: 75 }}
            />
            <p className="font-bold">Create Without Limits</p>
            <p className="text-center">
              Focus on building amazing products, content, and ideas while your
              community supports your growth.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10 m-3 border rounded-2xl"> </div>
      <div className=" text-white container mx-auto pb-32 pt-14">
        <h1 className="text-3xl font-bold text-center mb-14">
          Everything you need to grow as a creator
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center ">
            <lord-icon
              // className=" bg-slate-600 rounded-full  text-black"
              src="https://cdn.lordicon.com/mnlnsxhq.json"
              trigger="loop"
              delay="3000"
              stroke="bold"
              style={{ width: 75, height: 75 }}
            />
            <p className="font-bold">Custom Creator Pages</p>
            <p className="text-center">
              Create a personalized page where fans can support you and follow
              your journey.
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center ">
            <lord-icon
              src="https://cdn.lordicon.com/mzcaikdp.json"
              trigger="loop"
              delay="3000"
              stroke="bold"
              style={{ width: 75, height: 75 }}
            />
            <p className="font-bold">Transparent Payments</p>
            <p className="text-center">
              Track every contribution clearly with real-time insights and
              analytics.
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center ">
            <lord-icon
              src="https://cdn.lordicon.com/jgeruqwm.json"
              trigger="loop"
              delay="3000"
              stroke="bold"
              style={{ width: 75, height: 75 }}
            />
            <p className="font-bold">Global Support</p>
            <p className="text-center">
              Accept support from anyone, anywhere in the world — seamlessly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
