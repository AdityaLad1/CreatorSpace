import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white">
      <section className="relative flex flex-col items-center justify-center text-center min-h-[88vh] px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-purple-900/20 pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full">
            Support Creators You Love ☕
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Fund the work that{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              moves you
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Build, create, and ship without worrying about funding. Your
            supporters can back your journey instantly — no complicated setups,
            no hidden fees.
          </p>

          <div className="flex gap-4 mt-2">
            <Link href="/login">
              <button className="bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-900/30">
                Get Started →
              </button>
            </Link>
            <Link href="/about">
              <button className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-700/50 font-semibold px-7 py-3 rounded-xl transition-all duration-200 hover:scale-105">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mx-8" />

      <section className="container mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your supporters power your journey
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Everything you need to start receiving support from your community —
            in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "https://cdn.lordicon.com/bcrbahnt.json",
              title: "Get Funded Instantly",
              desc: "Receive support directly from your fans with fast and secure payments. No delays, no complicated approvals.",
              accent: "from-blue-500/20 to-blue-600/5",
              border: "hover:border-blue-500/40",
            },
            {
              icon: "https://cdn.lordicon.com/wyaqzesp.json",
              title: "Build Your Community",
              desc: "Connect with supporters who believe in your work and grow a loyal audience around your passion.",
              accent: "from-purple-500/20 to-purple-600/5",
              border: "hover:border-purple-500/40",
            },
            {
              icon: "https://cdn.lordicon.com/vrexohmd.json",
              title: "Create Without Limits",
              desc: "Focus on building amazing products, content, and ideas while your community supports your growth.",
              accent: "from-pink-500/20 to-pink-600/5",
              border: "hover:border-pink-500/40",
            },
          ].map((f) => (
            <div
              key={f.title}
              className={`bg-gradient-to-br ${f.accent} bg-slate-800 border border-slate-700 ${f.border} rounded-2xl p-8 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="bg-slate-700/50 rounded-2xl p-4">
                <lord-icon
                  src={f.icon}
                  trigger="loop"
                  delay="3000"
                  stroke="bold"
                  style={{ width: 60, height: 60 }}
                />
              </div>
              <h3 className="text-xl font-bold">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mx-8" />


      <section className="container mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to grow as a creator
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A full toolkit to manage your creator journey — from payments to
            your personal page.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "https://cdn.lordicon.com/mnlnsxhq.json",
              title: "Custom Creator Pages",
              desc: "Create a personalized page where fans can support you and follow your journey.",
            },
            {
              icon: "https://cdn.lordicon.com/mzcaikdp.json",
              title: "Transparent Payments",
              desc: "Track every contribution clearly with real-time insights and analytics.",
            },
            {
              icon: "https://cdn.lordicon.com/jgeruqwm.json",
              title: "Global Support",
              desc: "Accept support from anyone, anywhere in the world — seamlessly.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-slate-800 border border-slate-700 hover:border-slate-500 rounded-2xl p-8 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-slate-700/50 rounded-2xl p-4">
                <lord-icon
                  src={f.icon}
                  trigger="loop"
                  delay="3000"
                  stroke="bold"
                  style={{ width: 60, height: 60 }}
                />
              </div>
              <h3 className="text-xl font-bold">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-6 mb-20 rounded-3xl bg-gradient-to-br from-blue-600/20 via-slate-800 to-purple-600/20 border border-slate-700 p-16 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Ready to get started?</h2>
        <p className="text-slate-400 mb-8 text-lg max-w-md mx-auto">
          Join thousands of creators already using CreatorSpace to fund their
          passion.
        </p>
        <Link href="/login">
          <button className="bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-xl shadow-blue-900/30">
            Create Your Page →
          </button>
        </Link>
      </section>
    </div>
  );
}
