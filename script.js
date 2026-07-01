/* =========================================================
   Tarun Gupta — Portfolio
   ========================================================= */

const PROJECTS = [
  {
    name: "Inventory Demand Forecaster",
    year: "2026",
    tag: "Linear Regression & Random Forest",
    stack: "Python · scikit-learn · pandas",
    status: "Shipped",
    description:
      "A machine learning model that predicts future demand for products in an inventory system. Uses historical sales data to train linear regression and random forest models, providing accurate forecasts to optimize stock levels.",
    github: "https://github.com/tarungupta11226/inventory-demand-forecaster",
  },
  {
    name: "Live Port Weather Checker",
    year: "2026",
    tag: "Open-Meteo API · Streamlit",
    stack: "Python · requests · pandas",
    status: "Shipped",
    description:
      "A web application that fetches and displays current weather data for ports around the world using the Open-Meteo API. Built for real maritime operations use.",
    github: "https://github.com/tarungupta11226/port-weather-checker",
  },
  {
    name: "Parts Criticality Tagger",
    year: "2026",
    tag: "Rule-based Classifier",
    stack: "pandas · openpyxl",
    status: "Shipped",
    description:
      "Rule-based parts criticality tagger for marine inventory. Reads stock lists (.xlsx/.csv), applies regex keyword matching across part names and system categories, and auto-tags each item as CRITICAL, IMPORTANT, or STANDARD. Exports a colour-coded Excel report.",
    github: "https://github.com/tarungupta11226/stock-tagger",
  },
  {
    name: "My Progress",
    year: "2026",
    tag: "Personal Dashboard",
    stack: "Machine Learning · DSA · Data Science",
    status: "Ongoing",
    description:
      "A personal dashboard to track progress in machine learning, data science, and data structures & algorithms. Visualises the learning journey, completed projects, and upcoming goals.",
    github: "https://github.com/tarungupta11226/my-progress",
  },
];

/* ---------- render projects ---------- */
const grid = document.getElementById("projectGrid");
PROJECTS.forEach((p) => {
  const entry = document.createElement("div");
  entry.className = "project-entry";
  const tags = p.tag.split(" · ").map(t =>
    `<span class="tag-pill"><span class="tag-bullet">○</span> ${t}</span>`
  ).join("");
  entry.innerHTML = `
    <div class="project-year">${p.year}</div>
    <div class="project-name">${p.name}</div>
    <div class="project-desc">${p.description}</div>
    <div class="project-tags">${tags}</div>
  `;
  entry.addEventListener("click", () => openModal(p));
  grid.appendChild(entry);
});

/* ---------- modal ---------- */
const modal       = document.getElementById("modal");
const modalTitle  = document.getElementById("modalTitle");
const modalDesc   = document.getElementById("modalDesc");
const modalTag    = document.getElementById("modalTag");
const modalStack  = document.getElementById("modalStack");
const modalStatus = document.getElementById("modalStatus");
const modalGit    = document.getElementById("modalGithub");

function openModal(p) {
  modalTitle.textContent  = p.name;
  modalDesc.textContent   = p.description;
  modalTag.textContent    = `○ ${p.tag}`;
  modalStack.textContent  = p.stack;
  modalStatus.textContent = p.status;
  modalGit.href           = p.github;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ---------- experience expand/collapse ---------- */
document.querySelectorAll(".exp-card").forEach(card => {
  card.addEventListener("click", () => {
    card.closest(".exp-item").classList.toggle("open");
  });
});

/* ---------- photo flip ---------- */
const photoCard = document.getElementById("photoCard");
if (photoCard) {
  photoCard.addEventListener("click", () => {
    photoCard.classList.toggle("flipped");
  });
}

/* ---------- year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- scroll reveal ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = "1";
      e.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(".project-entry, .exp-card-head, .bio-card, .meta-table, .skill-pill").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(12px)";
  el.style.transition = "opacity .5s ease, transform .5s ease";
  io.observe(el);
});