// Dark/light toggle, simple load animations, nav toggle, and scroll reveal
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  const themeIcon = themeToggle.querySelector("i");
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    document.body.setAttribute("data-theme", currentTheme);
    if (themeIcon) {
      themeIcon.classList.toggle("fa-moon", currentTheme === "light");
      themeIcon.classList.toggle("fa-sun", currentTheme !== "light");
    }
  }

  themeToggle.addEventListener("click", () => {
    const theme =
      document.body.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (themeIcon) {
      themeIcon.classList.toggle("fa-moon", theme === "light");
      themeIcon.classList.toggle("fa-sun", theme !== "light");
    }
  });
}

// Hero/staggered load animations
const animatedElements = Array.from(document.querySelectorAll(".anim"));
animatedElements.forEach((el, i) =>
  setTimeout(() => el.classList.add("is-visible"), i * 200)
);

// Navigation / hamburger
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinksLi = document.querySelectorAll(".nav-links li");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");
    const icon = hamburger.querySelector("i");
    if (icon) icon.classList.toggle("fa-times");
    // animate links inline if list items exist
    navLinksLi.forEach((link, idx) => {
      link.style.animation = link.style.animation
        ? ""
        : `navLinkFade 0.5s ease forwards ${idx / 7 + 0.3}s`;
    });
  });

  // close when clicking outside
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove("active");
      const icon = hamburger.querySelector("i");
      if (icon) icon.classList.remove("fa-times");
    }
  });

  // close on link click
  navLinksLi.forEach((li) =>
    li.addEventListener("click", () => {
      navLinks.classList.remove("active");
      const icon = hamburger.querySelector("i");
      if (icon) icon.classList.remove("fa-times");
    })
  );
}

// Scroll reveal helper
function observeSection(selector, options = { threshold: 0.15 }) {
  const section = document.querySelector(selector);
  if (!section) return;
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        o.unobserve(entry.target);
      }
    });
  }, options);
  obs.observe(section);
}

observeSection(".about", { threshold: 0.3 });
observeSection(".skills", { threshold: 0.15 });
