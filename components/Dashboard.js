import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchuser, updateProfile } from "@/actions/userActions";

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

  const getData = async () => {
    let u = await fetchuser(session?.user?.username);
    if (u) setForm(u);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    await updateProfile(form, session?.user?.username);
    alert("Profile updated");
  };
  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      router.push("/login");
    }

    if (status === "authenticated") {
      getData();
    }
  }, [status]);

  if (status === "loading") {
    return <div className="text-white p-10">Loading...</div>;
  }
  return (
    <div className="container mx-auto py-5">
      <h1 className="text-3xl font-bold text-white  text-center ">
        Welcome to your Dashboard, {session?.user?.name || "Guest"}!
      </h1>
      <form className="max-w-2xl mx-auto" action={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-4 mt-6 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          id="Name"
          value={form.name || session?.user?.name || ""}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          className="w-full p-4 mt-6 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          value={form.email || session?.user?.email || ""}
          id="email"
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-4 mt-6 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          id="username"
          value={form.username || session?.user?.username || ""}
        />
        <input
          type="text"
          name="coverPic"
          placeholder="Cover Pic URL"
          className="w-full p-4 mt-6 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          id="coverPic"
          value={form.coverPic || session?.user?.coverPic || ""}
        />
        <input
          type="text"
          name="profilePic"
          placeholder="Profile Pic URL"
          className="w-full p-4 mt-6 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          id="profilePic"
          value={form.profilePic || session?.user?.profilePic || ""}
        />
        <input
          type="text"
          name="razorpaykeyid"
          id="razorpayid"
          placeholder="Razorpay Key ID"
          className="w-full p-4 mt-6 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          value={form.razorpaykeyid || ""}
        />
        <input
          type="password"
          name="razorpaykeysecret"
          placeholder="Razorpay Key Secret"
          className="w-full p-4 mt-6 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          id="razorpaysecret"
          value={form.razorpaykeysecret || ""}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105 w-full mt-6"
        >
          Save
        </button>
      </form>
    </div>
  );
}
