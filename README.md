# Modern & Responsive Personal Portfolio Website

![Portfolio Screenshot][./img/forReadmi.png]

A clean, modern, and fully responsive personal portfolio website template built from scratch with HTML, CSS, and Vanilla JavaScript. This project was designed to be easily customizable and showcases a variety of modern web development techniques.

**[Live Demo]([https://codealpha-porfolio.netlify.app/])**

---

## Features

This portfolio is packed with features designed to provide a professional and smooth user experience:

- **Fully Responsive Design:** Looks great on all devices, from mobile phones to desktops (Mobile-First Approach).
- **Dark/Light Mode Toggle:** A theme switcher that remembers the user's choice in their browser via `localStorage`.
- **Smooth Scrolling:** Seamless navigation between sections using native CSS `scroll-behavior`.
- **Scroll-Triggered Animations:** Elements gracefully fade in as they enter the viewport.
- **Modular, Component-Based Sections:**
  - Hero Section with a typing effect and call-to-action buttons.
  - About Me section with feature cards.
  - Skills section with progress indicators.
  - Resume section with a two-column layout for Experience and Education.
  - Projects section with a responsive grid and links.
  - Contact section with info cards and a functional form.
- **Responsive Navigation:** A clean top navigation bar that collapses into a hamburger menu on smaller screens.
- **Clean & Semantic Code:** Built with semantic HTML5 tags for better accessibility and SEO.
- **Easy Customization:** Uses CSS Custom Properties (variables) for easy theme and color changes.
- **No Frameworks:** Built with pure HTML, CSS, and JavaScript to demonstrate fundamental web development skills.

---

## Tech Stack

- **HTML5:** Semantic markup for structure and accessibility.
- **CSS3:**
  - Flexbox & CSS Grid for modern, responsive layouts.
  - CSS Custom Properties for easy theming and maintenance.
  - Transitions & Animations for interactive UI elements.
- **JavaScript (ES6+):**
  DOM Manipulation for interactivity (e.g., hamburger menu, theme toggle).
- **Font Awesome:** For clean and scalable icons.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You just need a web browser and a code editor (like VS Code,Sublime text, etc).

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Danielambrose-web/CodeAlpha-Porfolio.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd [CodeAlpha-Porfolio]
    ```
3.  **Open `index.html` in your browser:**
    - You can simply double-click the `index.html` file.
    - Or, if you use VS Code, you can use an extension like **Live Server** to view the site with hot-reloading.

---

## 🎨 Customization Guide

This template was built to be your own. Here’s how you can easily customize it:

### 1. Update Content (HTML)

All the content is located in the `index.html` file. Open it and edit the text and links within each `<section>` block:

- **Hero Section:** Change the name, title, and bio in the `.hero-content` div.
- **About Me:** Replace the placeholder text and update the feature cards in the `.about-features` grid.
- **Skills:** Update the `.skill-card` elements with your own skills. You can change the `width` of the `.skill-level` div to adjust the progress bar.
- **Resume:** Edit the `.resume-card` elements in the "Experience" and "Education" columns.
- **Projects:** Replace the placeholder project details in each `.project-card`. Don't forget to update the `src` for the image and the `href` for the "Code" and "Demo" buttons.
- **Contact & Footer:** Update your email, phone, and social media links.

### 2. Change Colors & Fonts (CSS)

All theme colors are defined as CSS variables at the top of the `style.css` file.

```css
/* style.css */
:root {
  --primary-color: #007bff;
  --secondary-color: #28a745;
  --bg-color: #121212;
  --bg-color2: #1e1e1e; /* Changed for better contrast */
  --accent-color: #2a2a2a;
  --text-color: #e0e0e0;
  --text-muted: rgba(224, 224, 224, 0.7);
  --border-color: #333;
  --border-color-subtle: rgba(255, 255, 255, 0.1);
  --shadow-color: rgba(0, 0, 0, 0.25);
  --primary-rgb: 0, 123, 255;
  --secondary-rgb: 40, 167, 69;
}

[data-theme="light"] {
  --primary-color: #0056b3;
  --secondary-color: #218838;
  --bg-color: #f4f4f9;
  --bg-color2: #ffffff;
  --accent-color: #f8f9fa;
  --text-color: #121212;
  --text-muted: #6c757d;
  --border-color: #ddd;
  --border-color-subtle: rgba(0, 0, 0, 0.075);
  --shadow-color: rgba(0, 0, 0, 0.1);
}
```
