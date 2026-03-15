"use client";
import React, { useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import animatedDungeunImage from "./icons/animatedDungeonMap.gif";
import cat2 from "./icons/cat2.jpeg";
import { fetchPayments, initiate, fetchuser } from "@/actions/userActions";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function PaymentsPage() {
  const { data: session, user } = useSession();
  const { username } = useParams();
  const [paymentform, setpaymentform] = useState({
    name: "",
    amount: "",
    message: "",
  });
  const [currentUser, setCurrentUser] = useState({});
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    getData();
    console.log(paymentform.amount);
  }, []);
  const handleChange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    console.log(username);
    let name = username;
    const u = await fetchuser(name);
    console.log(u);

    if (!u) {
      console.log("User does not exist");
      return;
    }

     setCurrentUser({
      ...u,
      coverPic: u.coverPic || "./icons/animatedDungeonMap.gif",
      profilePic: u.profilePic ||"./icons/cat2.jpeg",
    });

    const dbPayments = await fetchPayments(username);
    console.log(dbPayments);

    setPayments(dbPayments);
  };

  const pay = async (amt) => {
    let amount = amt * 100;

    let a = await initiate(amount, username, paymentform);

    let orderId = a.id;
    var options = {
      key: currentUser.razorpaykeyid,
      amount: amount,
      currency: "INR",
      name: "CreatorSpace",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId,
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
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
    var rzp1 = new window.Razorpay(options);

    rzp1.open();
  };
  return (
    <div>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
      ></Script>
      <>
        <div className="cover w-full relative h-87.5">
          {currentUser.coverPic && 
          <Image
          src={currentUser.coverPic}
          alt="Cover"
          fill
          className="object-center"
          // priority
          loading="eager"
          unoptimized
          sizes="100vw"
          />
        }

          <div
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 border-white border-2 w-50 h-50
                      rounded-full overflow-hidden"
          >
            {currentUser.profilePic && 
            <Image
            src={currentUser.profilePic}
            alt="Profile"
            fill
            className="object-cover"
            sizes="120px"
            priority
            />
          }
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
                {payments.length ==0 && <li>No payments yet</li>}
                {payments.map((p) => {
                  return (
                    <li key={p._id} className="my-4 flex items-center gap-2">
                      <lord-icon
                        src="https://cdn.lordicon.com/vrexohmd.json"
                        trigger="loop"
                        delay="3000"
                        stroke="bold"
                        style={{ width: 40, height: 40 }}
                      />
                      <span>
                        {p.name} donated{" "}
                        <span className="text-green-500">₹{p.amount}</span> with
                        a message "{p.message}"
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="makepayment w-1/2 bg-slate-800 rounded-lg  p-8 flex flex-col gap-3">
              <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
              <form className="flex flex-col gap-3">
                <input
                  onChange={handleChange}
                  value={paymentform.name}
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="p-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                />
                <input
                  onChange={handleChange}
                  value={paymentform.amount}
                  name="amount"
                  type="number"
                  placeholder="Amount (INR)"
                  className="p-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                />
                <input
                  onChange={handleChange}
                  value={paymentform.message}
                  name="message"
                  type="text"
                  placeholder="Message (optional)"
                  className="p-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                />
              </form>
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105 w-full  "
                onClick={() => {
                  pay(Number(paymentform.amount));
                }}
              >
                Pay
              </button>
              <div>
                <span className="text-slate-400">
                  Or choose from this Amounts
                </span>

                <div className="flex gap-3 my-3">
                  <button
                    onClick={() => {
                      pay(5);
                    }}
                    className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    ₹5
                  </button>
                  <button
                    onClick={() => {
                      pay(10);
                    }}
                    className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    ₹10
                  </button>
                  <button
                    onClick={() => {
                      pay(20);
                    }}
                    className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    ₹20
                  </button>
                  <button
                    onClick={() => {
                      pay(50);
                    }}
                    className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105"
                  >
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
