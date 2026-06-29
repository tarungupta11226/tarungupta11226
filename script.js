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
    name: "Neural Path Planner",
    tag: "Reinforcement Learning",
    stack: "Python · PyTorch · Gym",
    status: "Active",
    description:
      "A deep reinforcement learning agent that learns to navigate a 2D obstacle field. Built with PPO, trained on a custom Gym environment, and visualised through a real-time matplotlib dashboard.",
    github: "https://github.com/your-handle/neural-path-planner",
  },
  {
    name: "Vision Bot",
    tag: "Computer Vision · Robotics",
    stack: "Arduino · OpenCV · Python",
    status: "Shipped",
    description:
      "A small differential-drive robot that recognises colored markers using a webcam and OpenCV, then steers toward them. Wireless control over Wi-Fi from a Flask dashboard.",
    github: "https://github.com/your-handle/vision-bot",
  },
  {
    name: "Handwriting GAN",
    tag: "Generative ML",
    stack: "TensorFlow · Keras",
    status: "Research",
    description:
      "A DCGAN trained on the EMNIST dataset to generate human-like handwritten letters. Includes a training script, loss visualisations, and a tiny inference web demo.",
    github: "https://github.com/your-handle/handwriting-gan",
  },
  {
    name: "Voice Assistant (Edge)",
    tag: "Embedded AI",
    stack: "Raspberry Pi · Whisper · LLM",
    status: "Prototype",
    description:
      "An offline voice assistant running on a Raspberry Pi 4 — speech-to-text with Whisper, on-device LLM responses, and a hardware push-to-talk button.",
    github: "https://github.com/your-handle/edge-voice-assistant",
  },
  {
    name: "Self-Balancing Robot",
    tag: "Control Systems",
    stack: "C++ · IMU · PID",
    status: "Shipped",
    description:
      "A two-wheel self-balancing robot using an MPU-6050 IMU and a tuned PID controller. Includes a Bluetooth remote and tuning notes.",
    github: "https://github.com/your-handle/self-balancing-bot",
  },
  {
    name: "Paper Notes",
    tag: "ML Reading Log",
    stack: "Markdown · Notion API",
    status: "Ongoing",
    description:
      "My personal collection of summaries and notes on ML papers I've read — Transformers, RL, robotics learning, and more.",
    github: "https://github.com/your-handle/paper-notes",
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

/* ---------- edit mode ---------- */
const editToggle = document.getElementById("editToggle");
editToggle.addEventListener("click", () => {
  const on = document.body.classList.toggle("editing");
  document.querySelectorAll("[data-edit]").forEach(el => {
    el.contentEditable = on ? "true" : "false";
  });
  editToggle.querySelector(".edit-label").textContent = on ? "Editing" : "Edit";
});

/* ---------- photo edit ---------- */
document.querySelectorAll(".photo-edit").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.target);
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = () => {
      const file = input.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = e => { target.src = e.target.result; };
      reader.readAsDataURL(file);
    };
    input.click();
  });
});

/* ---------- soft reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".section, .project-card, .skill").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(16px)";
  el.style.transition = "opacity .6s ease, transform .6s ease";
  io.observe(el);
});
