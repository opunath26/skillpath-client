```markdown
# 🚀 SkillPath – Personalized Learning Platform

SkillPath is a modern, career-oriented e-learning platform designed to help users explore courses, access personalized skill roadmaps, manage their learning progress, and interact with a vibrant community. Built with a focus on seamless UI/UX, fast navigation, and secure data handling.

🌐 **Live Demo:** [https://skillpath-25.vercel.app](https://skillpath-25.vercel.app)  
🖥️ **Server Repository:** [https://github.com/opunath26/skillpath-server](https://github.com/opunath26/skillpath-server)

---

## ✨ Key Features

- **🔐 Robust Authentication:** Secure User Login, Registration, and Google One-Tap Sign-In powered by Firebase Authentication.
- **🧭 Protected Routes:** Restricts unauthorized access to user dashboards, personalized roadmaps, and private features.
- **📚 Dynamic Course Explorer:** Category-based filtering and dynamic API-driven loading for course collections.
- **📖 Comprehensive Course Details:** Deep-dive into curriculum breakdowns, instructor insights, and interactive enrollment triggers.
- **📊 Learning Dashboard:** Track enrolled courses, milestone achievements, and personal roadmap progress.
- **👥 Community Showcase:** Interactive sections featuring user roadmaps, leaderboards, and Discord/Telegram community hubs.
- **📱 Ultra Responsive Design:** Pixel-perfect layout tailored for Mobile, Tablet, and Desktop screens.
- **🔔 Interactive Feedback:** Smooth alerts and notifications powered by SweetAlert2 and React Toastify.
- **⚡ Zero-Downtime Routing:** Fully optimized client-side SPA routing (`vercel.json`) preventing 404 errors on refresh.

---

## 🛠️ Tech Stack

**Frontend:**
- **Core:** React.js (Vite)
- **Styling:** Tailwind CSS, DaisyUI
- **Routing:** React Router v6
- **State Management:** React Context API
- **Icons:** React Icons, Heroicons

**Backend & Database:**
- **Server:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Auth
- **Data Fetching:** Axios

**Deployment & Hosting:**
- **Client & Server:** Vercel

---

## ⚙️ Environment Variables

To run this project locally, create a `.env.local` file in your root folder and add the following:

```text
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID
VITE_API_URL=https://skill-path-server-five.vercel.app

```

---

## 🚀 Getting Started (Local Setup)

Follow these steps to set up and run the project locally:

1. **Clone the repository:**
```bash
git clone https://github.com/opunath26/skillpath-client.git

```


2. **Navigate to the project directory:**
```bash
cd skillpath-client

```


3. **Install dependencies:**
```bash
npm install

```


4. **Start the development server:**
```bash
npm run dev

```


5. Open your browser and visit `http://localhost:5173`

---

## 👨‍💻 Author

**Apu Nath**

* **GitHub:** [https://github.com/opunath26](https://www.google.com/search?q=https://github.com/opunath26)

---

## 🙏 Acknowledgements

* **Programming Hero** – For guidance and foundational support.
* **Vercel** – For seamless frontend and backend hosting.

```