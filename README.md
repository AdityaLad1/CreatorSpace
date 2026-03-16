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

## 📸 Screenshots

### 🏠 Home
![Home 1](./screenshots/Home-1.png)
![Home 2](./screenshots/Home-2.png)
![Home 3](./screenshots/Home-3.png)
![Home 4](./screenshots/Home-4.png)

### 👤 Creator Profile
![User 1](./screenshots/User-1.png)
![User 2](./screenshots/User-2.png)

### ⚙️ Dashboard
![Dashboard](./screenshots/Dashboard.png)

### 📖 About
![About 1](./screenshots/About-1.png)
![About 2](./screenshots/About-2.png)
![About 3](./screenshots/About-3.png)

### 🔐 Login
![Login](./screenshots/Login.png)

---

## 🧱 Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.1.4 |
| Frontend | React | 19.2.3 |
| Styling | Tailwind CSS | 4 |
| Auth | NextAuth.js (GitHub, Google) | 4.24.13 |
| Database | MongoDB + Mongoose | 9.2.1 |
| Payments | Razorpay | 2.9.6 |
| Notifications | React Toastify | 11.0.5 |
| Hosting | Vercel | — |
| DB Hosting | MongoDB Atlas | — |

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