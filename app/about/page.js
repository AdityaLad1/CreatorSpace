import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-purple-900/20 pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <span className="relative z-10 text-sm font-semibold tracking-widest uppercase text-blue-400 mb-4">
          About CreatorSpace
        </span>
        <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Built for Creators,
          <br />
          By Creators
        </h1>
        <p className="relative z-10 text-lg text-slate-400 max-w-xl">
          A platform where your supporters can back your journey — simply,
          directly, and without the middleman taking too much.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          CreatorSpace was built with one goal in mind — give every creator a
          dead-simple way to receive support from the people who love their
          work. No complicated setups, no bloated dashboards. Just you, your
          supporters, and a direct line between them.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🎯",
              title: "Creator First",
              desc: "Every decision we make starts with one question — does this make life easier for creators?",
            },
            {
              icon: "🔒",
              title: "Transparency",
              desc: "No hidden fees, no surprise cuts. You know exactly what you earn and what we take.",
            },
            {
              icon: "⚡",
              title: "Simplicity",
              desc: "Set up your page in minutes. Share it anywhere. Start receiving support instantly.",
            },
          ].map((val) => (
            <div
              key={val.title}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col gap-4 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300"
            >
              <span className="text-4xl">{val.icon}</span>
              <h3 className="text-xl font-semibold">{val.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-24 px-6">
        <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-slate-400 mb-8 text-lg">
          Join thousands of creators already using CreatorSpace.
        </p>
        <a
          href="/login"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 hover:scale-105"
        >
          Create Your Page →
        </a>
      </section>
    </div>
  );
}
export const metadata = {
  title: "About | CreatorSpace",
  description: "Learn about CreatorSpace — a platform built for creators to receive support simply, directly, and without hidden fees.",
};