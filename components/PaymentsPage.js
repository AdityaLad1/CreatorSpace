"use client";
import React from "react";
import Script from "next/script";
import Image from "next/image";
import animatedDungeunImage from "./icons/animatedDungeonMap.gif";
import cat2 from "./icons/cat2.jpeg";
import Razorpay from "razorpay";
import { initiate } from "@/actions/userActions";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";

export default function PaymentsPage() {
  const {data:session,user}= useSession()
  // const { username } = await params;
  const {username}= useParams()


  const pay = async (amount) => {

    let a = await initiate(amount,session?.user.name,paymentform)
    orderId = a.id
    var options = {
      key: process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits.
      currency: "INR",
      name: "CreatorSpace", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, // This is a sample Order ID. Pass the id obtained in the response of Step 1
      callback_url: `${process.env.URL}/api/razorpay`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "+919876543210", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);

    rzp1.open();
  };
  return (
    <div>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <>
        <div className="cover w-full relative h-87.5">
          <Image
            src={animatedDungeunImage}
            alt="Cover"
            fill
            className="object-cover"
            priority
            unoptimized
          />

          <div
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 border-white border-2 w-30 h-30
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
              <ul className="mx-5 text-lg ">
                <li className="my-4 flex items-center gap-2">
                  <lord-icon
                    src="https://cdn.lordicon.com/vrexohmd.json"
                    trigger="loop"
                    delay="3000"
                    stroke="bold"
                    style={{ width: 40, height: 40 }}
                  />
                  <span>
                    Ojas donated <span className="text-green-500">$500</span>{" "}
                    with a message "I support you bro with lots of ❤️"
                  </span>
                </li>
                <li className="my-4 flex items-center gap-2">
                  <lord-icon
                    src="https://cdn.lordicon.com/vrexohmd.json"
                    trigger="loop"
                    delay="3000"
                    stroke="bold"
                    style={{ width: 40, height: 40 }}
                  />
                  <span>
                    Ojas donated <span className="text-green-500">$500</span>{" "}
                    with a message "I support you bro with lots of ❤️"
                  </span>
                </li>
                <li className="my-4 flex items-center gap-2">
                  <lord-icon
                    src="https://cdn.lordicon.com/vrexohmd.json"
                    trigger="loop"
                    delay="3000"
                    stroke="bold"
                    style={{ width: 40, height: 40 }}
                  />
                  <span>
                    Ojas donated <span className="text-green-500">$500</span>{" "}
                    with a message "I support you bro with lots of ❤️"
                  </span>
                </li>
                <li className="my-4 flex items-center gap-2">
                  <lord-icon
                    src="https://cdn.lordicon.com/vrexohmd.json"
                    trigger="loop"
                    delay="3000"
                    stroke="bold"
                    style={{ width: 40, height: 40 }}
                  />
                  <span>
                    Ojas donated <span className="text-green-500">$500</span>{" "}
                    with a message "I support you bro with lots of ❤️"
                  </span>
                </li>
                <li className="my-4 flex items-center gap-2">
                  <lord-icon
                    src="https://cdn.lordicon.com/vrexohmd.json"
                    trigger="loop"
                    delay="3000"
                    stroke="bold"
                    style={{ width: 40, height: 40 }}
                  />
                  <span>
                    Ojas donated <span className="text-green-500">$500</span>{" "}
                    with a message "I support you bro with lots of ❤️"
                  </span>
                </li>
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
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105 w-full  "
                >
                  Pay
                </button>
              </form>
              <div>
                <span className="text-slate-400">
                  Or choose from this Amounts
                </span>

                <div className="flex gap-3 my-3">
                  <button onClick={()=>{pay(5)}} className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105">
                    ₹5
                  </button>
                  <button onClick={()=>{pay(10)}} className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105">
                    ₹10
                  </button>
                  <button onClick={()=>{pay(20)}} className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105">
                    ₹20
                  </button>
                  <button onClick={()=>{pay(50)}} className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105">
                    ₹50
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
