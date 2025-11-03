// =========== DARK/LIGHT MODE TOGGLE ===========
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");
const currentTheme = localStorage.getItem("theme");

// Apply saved theme on load
if (currentTheme) {
  document.body.setAttribute("data-theme", currentTheme);
  if (currentTheme === "light") {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
}
``;
// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  let theme = document.body.getAttribute("data-theme");
  if (theme === "dark") {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  } else {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
});

// =========== HERO SECTION ANIMATION ON LOAD ===========
const animatedElements = document.querySelectorAll(".anim");

// Staggered animation effect
animatedElements.forEach((el, index) => {
  setTimeout(() => {
    el.classList.add("is-visible");
  }, index * 200); // 200ms delay between each element
});

// =========== NAVIGATION & HAMBURGER MENU ===========
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinksLi = document.querySelectorAll(".nav-links li");

// Toggle hamburger menu
hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent event bubbling

  // Toggle navigation
  navLinks.classList.toggle("active");

  // Toggle hamburger icon
  const icon = hamburger.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");

  // Animate links
  navLinksLi.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });
});

// Close menu when clicking a link
navLinksLi.forEach((li) => {
  li.addEventListener("click", () => {
    navLinks.classList.remove("active");
    const icon = hamburger.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove("active");
    const icon = hamburger.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  }
});

// About Section Scroll Animation
const aboutSection = document.querySelector(".about");

const observerOptions = {
  threshold: 0.3,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

observer.observe(aboutSection);
