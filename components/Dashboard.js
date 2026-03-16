"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchuser, updateProfile } from "@/actions/userActions";
import { ToastContainer, toast, Bounce } from "react-toastify";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    coverPic: "",
    profilePic: "",
    razorpaykeyid: "",
    razorpaykeysecret: "",
  });

  const canEdit = session?.user?.username === form.username; 

  const getData = async () => {
    let u = await fetchuser(session?.user?.username);
    if (u) setForm(u);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if (!canEdit) return; 
    await updateProfile(form, session?.user?.username);
    toast("Profile Updated", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") router.push("/login");
    if (status === "authenticated") getData();
  }, [status]);

  if (status === "loading") {
    return <div className="text-white p-10">Loading...</div>;
  }

  const inputClass = `w-full p-3 md:p-4 mt-4 md:mt-6 rounded-lg bg-neutral-800 text-white 
    focus:outline-none focus:ring-2 focus:ring-blue-500 
    disabled:opacity-50 disabled:cursor-not-allowed`;

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="container mx-auto py-5 px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
          Welcome to your Dashboard, {session?.user?.name || "Guest"}!
        </h1>

        {!canEdit && form.username && (
          <p className="text-red-400 text-sm text-center mt-4">
            You can only edit your own profile.
          </p>
        )}

        <form className="max-w-2xl mx-auto" action={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={inputClass}
            onChange={handleChange}
            id="Name"
            value={form.name || session?.user?.name || ""}
            disabled={!canEdit}
          />

          <input
            type="text"
            name="email"
            placeholder="Email"
            className={inputClass}
            onChange={handleChange}
            id="email"
            value={form.email || session?.user?.email || ""}
            disabled={!canEdit}
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            className={inputClass}
            onChange={handleChange}
            id="username"
            value={form.username || session?.user?.username || ""}
            disabled={!canEdit}
          />

          <input
            type="text"
            name="coverPic"
            placeholder="Cover Pic URL"
            className={inputClass}
            onChange={handleChange}
            id="coverPic"
            value={form.coverPic || ""}
            disabled={!canEdit}
          />

          <input
            type="text"
            name="profilePic"
            placeholder="Profile Pic URL"
            className={inputClass}
            onChange={handleChange}
            id="profilePic"
            value={form.profilePic || ""}
            disabled={!canEdit}
          />

          <input
            type="text"
            name="razorpaykeyid"
            placeholder="Razorpay Key ID"
            className={inputClass}
            onChange={handleChange}
            id="razorpayid"
            value={form.razorpaykeyid || ""}
            disabled={!canEdit}
          />

          <input
            type="password"
            name="razorpaykeysecret"
            placeholder="Razorpay Key Secret"
            className={inputClass}
            onChange={handleChange}
            id="razorpaysecret"
            value={form.razorpaykeysecret || ""}
            disabled={!canEdit}
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105 w-full mt-6 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            disabled={!canEdit}
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}
