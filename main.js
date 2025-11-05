// Theme toggle (persisted)
const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (themeToggle) {
  const themeIcon = themeToggle.querySelector("i");

  if (currentTheme) {
    document.body.setAttribute("data-theme", currentTheme);
    if (currentTheme === "light" && themeIcon) {
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    }
  }

  themeToggle.addEventListener("click", () => {
    const theme = document.body.getAttribute("data-theme");
    if (theme === "dark") {
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      if (themeIcon) {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
      }
    } else {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      if (themeIcon) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
      }
    }
  });
}

// Hero entrance animations
document.querySelectorAll(".anim").forEach((el, i) => {
  setTimeout(() => el.classList.add("is-visible"), i * 200);
});

// Navigation & hamburger
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinksLi = document.querySelectorAll(".nav-links li");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");

    const icon = hamburger.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    }

    navLinksLi.forEach((link, index) => {
      if (link.style.animation) link.style.animation = "";
      else
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
    });
  });
}

navLinksLi.forEach((li) =>
  li.addEventListener("click", () => {
    if (navLinks) navLinks.classList.remove("active");
    const icon = document.querySelector(".hamburger i");
    if (icon) {
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-times");
    }
  })
);

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navLinks?.contains(e.target) && !hamburger?.contains(e.target)) {
    navLinks?.classList.remove("active");
    const icon = document.querySelector(".hamburger i");
    if (icon) {
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-times");
    }
  }
});

// About section reveal using IntersectionObserver
const aboutSection = document.querySelector(".about");
if (aboutSection) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(aboutSection);
}
document.addEventListener("DOMContentLoaded", () => {
  const animatedSections = document.querySelectorAll(".animate-on-scroll");
  if (animatedSections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.15,
    }
  );

  animatedSections.forEach((section) => {
    observer.observe(section);
  });
});
