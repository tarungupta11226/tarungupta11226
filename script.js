/* =========================================================
   Tarun Gupta — Portfolio
   Edit the PROFILE and PROJECTS objects below to update content.
   ========================================================= */

const PROFILE = {
  linkedin:  "https://www.linkedin.com/in/tarun-gupta-3634213a2/",
  github:    "https://github.com/tarungupta11226",
  instagram: "https://www.instagram.com/thet4run?igsh=ZXNlM3V2dTRhb3Fs",
};

const PROJECTS = [
  {
    name: "Inventory Demand Forecaster",
    tag: "Linear Regression & Random Forest",
    stack: "Python · scikit-learn · pandas",
    status: "Shipped",
    description:
      "A machine learning model that predicts future demand for products in an inventory system. It uses historical sales data to train a linear regression and random forest model, providing accurate forecasts to optimize stock levels.",
    github: "https://github.com/tarungupta11226/inventory-demand-forecaster",
  },
  {
    name: "Live Port Weather Checker",
    tag: "Open-Meteo API · Streamlit",
    stack: "Python · requests · pandas",
    status: "Shipped",
    description:
      "A simple web application that fetches and displays current weather data for various ports around the world using the Open-Meteo API.",
    github: "https://github.com/tarungupta11226/port-weather-checker",
  },
  {
    name: "Parts Criticality Tagger",
    tag: "Rule-based Classifier",
    stack: "OpenCV · pandas",
    status: "Shipped",
    description:
      "Rule-based parts criticality tagger for marine inventory. Reads stock lists (.xlsx/.csv), applies regex keyword matching across part names and system categories, and auto-tags each item as CRITICAL, IMPORTANT, or STANDARD. Exports a colour-coded Excel report.",
    github: "https://github.com/tarungupta11226/stock-tagger",
  },
  {
    name: "My Progress",
    tag: "Personal Dashboard",
    stack: "Machine Learning · DSA · Data Science",
    status: "Ongoing",
    description:
      "A personal dashboard to track my progress in learning machine learning, data science, and data structures & algorithms. It visualizes my learning journey, completed projects, and upcoming goals.",
    github: "https://github.com/tarungupta11226/my-progress",
  },
];

/* ---------- render socials ---------- */
document.getElementById("link-linkedin").href  = PROFILE.linkedin;
document.getElementById("link-github").href    = PROFILE.github;
document.getElementById("link-instagram").href = PROFILE.instagram;

/* ---------- render projects ---------- */
const grid = document.getElementById("projectGrid");
PROJECTS.forEach((p, i) => {
  const card = document.createElement("article");
  card.className = "project-card";
  card.innerHTML = `
    <div class="pidx">// 0${i + 1}</div>
    <div class="pname">${p.name}</div>
    <div class="ptags">${p.tag}</div>
    <div class="parrow">›</div>
  `;
  card.addEventListener("click", () => openModal(p));
  grid.appendChild(card);
});

/* ---------- modal ---------- */
const modal       = document.getElementById("modal");
const modalTitle  = document.getElementById("modalTitle");
const modalDesc   = document.getElementById("modalDesc");
const modalTag    = document.getElementById("modalTag");
const modalStack  = document.getElementById("modalStack");
const modalStatus = document.getElementById("modalStatus");
const modalGit    = document.getElementById("modalGithub");

function openModal(p){
  modalTitle.textContent  = p.name;
  modalDesc.textContent   = p.description;
  modalTag.textContent    = `// ${p.tag}`;
  modalStack.textContent  = p.stack;
  modalStatus.textContent = p.status;
  modalGit.href           = p.github;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeModal(){
  modal.hidden = true;
  document.body.style.overflow = "";
}
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ---------- year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- experience expand/collapse ---------- */
document.querySelectorAll(".exp-card").forEach(card => {
  card.addEventListener("click", () => {
    card.closest(".exp-item").classList.toggle("open");
  });
});

/* ---------- photo flip on click ---------- */
const photoCard = document.querySelector(".photo-card");
if (photoCard) {
  photoCard.addEventListener("click", () => {
    photoCard.classList.toggle("flipped");
  });
}

/* ---------- soft reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".section, .project-card, .exp-card-head").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(16px)";
  el.style.transition = "opacity .6s ease, transform .6s ease";
  io.observe(el);
});