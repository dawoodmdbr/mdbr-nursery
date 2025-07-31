# MDBR Nursery

**Live Demo:** [Click here](https://dawoodmdbr.github.io/mdbr-nursery)
**GitHub Repo:** [Click here](https://github.com/dawoodmdbr/mdbr-nursery)

## 🌱 Overview

MDBR Nursery is a fully responsive, frontend-only prototype e-commerce site built with **React + Vite**, styled using **TailwindCSS** and custom CSS. The project is designed to simulate a modern plant nursery website, complete with dynamic product listings, a shopping cart, scroll navigation, and toast notifications.

> ⚠️ This is a prototype for educational and portfolio purposes. No actual business is involved.

---

## ✨ Features

### 🌿 Landing Page

* Hero section with CTA
* Best Sellers section (Top 6 products by sales)
* Smooth scroll-based layout with animated transitions

### 🛒 Products Page

* Products grouped into categories
* Side navigation buttons for scroll-to-section
* Search bar with keyword filtering
* Sorting dropdown (price, popularity)
* Responsive grid layout

### 🧺 Shopping Cart (Sidebar)

* Add to cart with feedback
* Dynamic cart sidebar
* Quantity controls and total price
* Toast notifications on add/remove actions

### 🎨 Styling & UX

* Modern, frosted glass UI components
* Responsive design across all screen sizes
* Subtle animations using `framer-motion`
* Font: Work Sans

### 📦 Data

* Product info sourced from `products.json`
* Prices, sold count, and images used realistically

---

## 🛠️ Tech Stack

* **React + Vite** for lightning-fast builds
* **React Router DOM** for navigation
* **Context API** for cart state
* **Framer Motion** for animations
* **TailwindCSS + custom CSS** for styling
* **react-hot-toast** for notifications
* **LocalStorage** (optional) for persistence

---

## 🧾 File Structure (Simplified)

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── CartSidebar.jsx
│   ├── LandingSection.jsx
│   ├── ProductsSection.jsx
│   └── BestSellersSection.jsx
├── context/
│   └── CartContext.jsx
├── styles/
│   ├── Footer.css
│   ├── ProductsSection.css
│   └── ...
├── data/
│   └── products.json
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/dawoodmdbr/mdbr-nursery.git
cd mdbr-nursery
npm install
npm run dev
```

---

## 🙌 Final Touches

* Footer with Gen-Z flair:
  `&copy; 2025 MDBR Nursery. Built with 💚. Real code. Fake plants. Stay rooted.`
* Fully responsive and animated.
* All cart actions show toast alerts.
* All UI built with a clean design system.

---

## 📸 Screenshots

> Include screenshots of landing page, product page, and cart here.

---

## 📬 Contact

DM me on Instagram \[@dawood.mdbr] or shoot an email at \[[MDBR](mailto:dawoodbinrafaydbr@gmail.com)].

---

## 🧠 Lessons Learned

This project helped me sharpen my skills in:

* Component-based design
* React hooks and context
* Animations and transitions
* State and props management
* UI/UX balance and responsiveness

---

## 📌 Note

Deployed on GitHub Pages using Vite config tweaks.

---

Thanks for visiting MDBR Nursery 🌱
