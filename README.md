# ☕ CreatorSpace

**🌐 Live:** [patreon-clone-v2.vercel.app](https://patreon-clone-v2.vercel.app)

A full-stack creator support platform where fans can back their favourite creators instantly — no complicated setups, no hidden fees.

> Previously developed as "Patreon Clone V2". The project has been renamed to **CreatorSpace** to better reflect its identity and purpose.

---

## 🚀 Why CreatorSpace?

I had previously built a Patreon clone, but:

* ❌ The codebase had multiple bugs
* ❌ The architecture was not well structured
* ❌ Commit history was not professional
* ❌ Many parts were rushed or experimental

Instead of patching an unstable foundation, I decided to **rebuild the project from scratch** with better engineering discipline and ship it as a real, production-deployed application.

---

## ✨ Features

* 🔐 GitHub & Google OAuth login via NextAuth
* 👤 Creator profile pages with cover & profile photos
* 💸 Razorpay payment integration
* 🧾 Payment history & supporter list
* ⚙️ Creator dashboard to manage profile & payment settings
* 📱 Fully responsive UI (mobile + desktop)
* 🗄️ MongoDB Atlas database (cloud-hosted)
* 🚀 Deployed on Vercel

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Frontend | React, Tailwind CSS |
| Auth | NextAuth.js (GitHub, Google) |
| Database | MongoDB + Mongoose |
| Payments | Razorpay |
| Hosting | Vercel |
| DB Hosting | MongoDB Atlas |

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/creatorspace.git
cd creatorspace

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your values in .env.local

# Run the development server
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the root with the following:

```env
GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=

NEXT_PUBLIC_URL=http://localhost:3000

MONGODB_URI=

NEXT_PUBLIC_KEY_ID=
KEY_ID=
KEY_SECRET=
```

---

## 🧪 Development Philosophy

* Small, meaningful commits
* No copy-paste development
* Code readability over shortcuts
* Mobile-first responsiveness
* Incremental feature delivery
* Long-term maintainability

---

## 📌 Notes

* This project is an intentional rebuild of the original Patreon clone.
* The previous version contained bugs and non-professional commits and has been archived.
* Renamed from **Patreon Clone V2** → **CreatorSpace** to reflect a real product identity.

---

## 👤 Author

**Aditya Lad**

---

> This project demonstrates real-world full-stack engineering — from auth and payments to database integration and production deployment.