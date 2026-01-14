
# Smart Meat Shop – University Web Development Project

**Author:** Haitham Abu Khaled
**Course:** Web Development (Erasmus +, Romania)
**Project Type:** Interactive Web Application / E-Commerce Simulation

---

##  Project Overview

The **Smart Meat Shop** is an interactive web application that simulates an online meat shop. It allows users to:

* Browse and filter products by category, usage, and price
* Add items to a shopping cart with quantity controls
* Generate order messages for WhatsApp
* Explore recipe suggestions for products
* Switch between light and dark mode
* Enjoy smooth animations and interactive UI elements

This project demonstrates **modern web development skills** using **HTML, CSS, and vanilla JavaScript**, without relying on external libraries or frameworks.

---

## Features

### Product Management

* Dynamic product cards with **status badges** (Fresh, Frozen, Limited)
* Display of **category, cut, price, usage tags, and recipes**
* Featured products section

### Cart System

* Add/remove products and adjust quantities
* Persist cart data using **localStorage**
* Display total cost and item count
* Open/close cart drawer

### Filters & Search

* Filter products by **category, usage, price range, and search keyword**
* Reset filters with a single button

### Interactive UI

* Animate-on-scroll effects (fade, zoom, flip)
* Product and category hover effects
* Button ripple effects
* Scroll indicator and parallax hero sections
* Page transition animations

### Modals & Suggestions

* Recipe suggestion modal with **random product and instructions**
* Add suggested product to cart directly from modal

### Dark Mode

* Toggle between light and dark themes
* Dark mode preference saved using **localStorage**

### WhatsApp Integration

* Generate pre-filled WhatsApp messages from cart or direct order
* Open WhatsApp chat in a new tab

### Utilities

* Smooth scroll for anchor links
* Back-to-top button

---

##  Tech Stack

* **HTML5** – Semantic markup
* **CSS3** – Flexbox, Grid, transitions, animations
* **JavaScript (ES6)** – DOM manipulation, event handling, state management
* **LocalStorage** – Persisting cart and theme preferences

No external libraries or frameworks were used. All functionality is implemented in **vanilla JS**.

---

##  Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Open `index.html` in a browser.
3. Start interacting with the shop:

   * Browse products
   * Apply filters
   * Add items to the cart
   * Toggle dark mode
   * Use the suggestion modal
   * Generate WhatsApp orders

No server setup is required – the project runs entirely in the browser.

---

## 🛠How I Built This

This project was **developed incrementally** as part of my university web development course:

1. **Data Layer**:
   Created a `PRODUCTS_DATA` array with detailed product information.

2. **Cart System**:
   Implemented as a JS object (`Cart`) with methods to **add, remove, update quantities, calculate totals**, and save to localStorage.

3. **Product Rendering**:
   Used JS template strings to dynamically render product cards and the cart.

4. **Filters & Search**:
   Implemented live filtering using JS array methods (`filter`, `includes`) for **category, usage, price, and keyword**.

5. **Animations & Effects**:
   Built scroll-based animations (fade, zoom, flip), hover effects, ripple buttons, parallax scrolling, and back-to-top functionality using **vanilla JS**.

6. **Modals & Suggestions**:
   Created modal management logic and a random suggestion generator for recipes.

7. **Dark Mode & Preferences**:
   Stored user theme preferences using localStorage to persist dark/light mode.

8. **WhatsApp Integration**:
   Generated pre-filled WhatsApp order messages dynamically from the cart data.

9. **Event Handling**:
   Used a centralized `EventListeners` object to manage **all click, scroll, and form events**.

---

## Learning Outcomes

* Improved **DOM manipulation** and **event handling** in JavaScript
* Practiced **state management** with arrays and objects
* Learned to create **interactive UI components** without libraries
* Gained experience in **persisting data** using localStorage
* Implemented **animations, modals, and smooth scrolling**
* Built a **responsive and user-friendly web interface**

---

## Notes 

* This project is intended for educational purposes and demonstrates **front-end web development concepts**.
* All product data is simulated; no real transactions are performed.
* The WhatsApp integration opens a chat with a dummy phone number for simulation.

