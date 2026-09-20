/* =========================================================
   Tarun Gupta — Portfolio
   ========================================================= */

/* ---------- mobile nav toggle ---------- */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
  navMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navMenu.classList.remove("show"));
  });
}

/* ---------- scroll progress bar ---------- */
const progressBar = document.getElementById("progressBar");
if (progressBar) {
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + "%";
  };
  window.addEventListener("scroll", updateProgress);
  updateProgress();
}

/* ---------- active nav link on scroll ---------- */
const navLinks = document.querySelectorAll(".nav-menu a");
const sections = Array.from(navLinks)
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);
if (navLinks.length && sections.length) {
  const setActive = () => {
    let current = sections[0];
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec;
    });
    navLinks.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current.id);
    });
  };
  window.addEventListener("scroll", setActive);
  setActive();
}

/* ---------- experience accordion ---------- */
document.querySelectorAll(".experience-head").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".experience-item");
    if (!item) return;
    const isOpen = item.classList.toggle("open");
    const plus = btn.querySelector(".plus");
    if (plus) plus.textContent = isOpen ? "−" : "+";
  });
});

/* ---------- education accordion ---------- */
document.querySelectorAll(".education-head").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".education-item");
    if (!item) return;
    const isOpen = item.classList.toggle("open");
    const plus = btn.querySelector(".plus");
    if (plus) plus.textContent = isOpen ? "−" : "+";
    btn.setAttribute("aria-expanded", isOpen);
  });
});

/* ---------- footer year ---------- */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();