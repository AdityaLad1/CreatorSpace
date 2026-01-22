import Image from "next/image";
import { use } from "react";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center text-white h-[44vh]">
        <div className="font-bold text-5xl flex justify-center items-center gap-3">
          Buy me a Coffee
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis eius
          cupiditate saepe doloremque a maxime{" "}
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            className="text-white    bg-gradient-to-br from-purple-600 to-blue-50 font-medium text-sm px-5 py-2 rounded-xl transition-transform duration-200    hover:scale-110    focus:ring-4 focus:ring-blue-300 "
          >
            Start here
          </button>

          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 
             hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
             focus:ring-blue-300 dark:focus:ring-blue-800 
             font-medium text-sm px-4 py-2 leading-5 rounded-xl
             transition-all duration-200 hover:scale-105"
          >
            Read more
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10 m-3 border rounded-2xl"> </div>

      <div className=" text-white container mx-auto pb-32 pt-14">
        <h1 className="text-2xl font-bold text-center mb-14">
          Your fans can buy you a chai
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center ">
            <lord-icon
              // className=" bg-slate-600 rounded-full  text-black"
              src="https://cdn.lordicon.com/vrexohmd.json"
              trigger="loop"
              delay="3000"
              stroke="bold"
              style={{ width: 75, height: 75 }}
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you{" "}
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center ">
            <lord-icon
              src="https://cdn.lordicon.com/zluevvdn.json"
              trigger="loop"
              delay="3000"
              stroke="bold"
              style={{ width: 75, height: 75 }}
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you{" "}
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
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you{" "}
            </p>
          </div>
        </div>
      </div>
            <div className="bg-white h-1 opacity-10 m-3 border rounded-2xl"> </div>
<div className=" text-white container mx-auto pb-32 pt-14">
        <h1 className="text-2xl font-bold text-center mb-14">
          Your fans can buy you a chai
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center ">
            <lord-icon
              // className=" bg-slate-600 rounded-full  text-black"
              src="https://cdn.lordicon.com/vrexohmd.json"
              trigger="loop"
              delay="3000"
              stroke="bold"
              style={{ width: 75, height: 75 }}
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you{" "}
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center ">
            <lord-icon
              src="https://cdn.lordicon.com/zluevvdn.json"
              trigger="loop"
              delay="3000"
              stroke="bold"
              style={{ width: 75, height: 75 }}
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you{" "}
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
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
