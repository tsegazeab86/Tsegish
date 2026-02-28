// Mobile menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Typed.js (initialized after script loads)
if (typeof Typed !== "undefined") {
  new Typed(".typed-text", {
    strings: [
      "Front-end Developer (in training)",
      "3rd year CS student",
      "3+ projects completed",
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1500,
    loop: true,
  });
} else {
  // if script fails to load
  document.querySelector(".typed-text").innerText =
    "Front-end Developer (in training)";
}

// Scroll reveal
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let r of reveals) {
    const windowHeight = window.innerHeight;
    const revealTop = r.getBoundingClientRect().top;
    const revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) r.classList.add("active");
    else r.classList.remove("active");
  }
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Progress bar
const progressBar = document.getElementById("progressBar");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (scrollTop / docHeight) * 100 + "%";
});

// Loading screen
window.addEventListener("load", () => {
  const ls = document.getElementById("loadingScreen");
  ls.classList.add("fade-out");
  setTimeout(() => (ls.style.display = "none"), 500);
});

 
// Service inquire prefills message (single handler)
document.querySelectorAll(".service-inquire").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const service =
      this.dataset.service ||
      this.closest(".service-card").querySelector("h3").innerText;
    document.getElementById("message").value =
      `I'm interested in your ${service} services. Please provide more information.`;
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    document.getElementById("message").focus();
  });
});

// ---------- MODAL for More Info ----------
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalTech = document.getElementById("modalTech");
const closeModal = document.getElementById("modalClose");

closeModal.addEventListener("click", () => modal.classList.remove("active"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
});

document.querySelectorAll(".more-info-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const card = link.closest(".project-card");
    const details = card.querySelector(".project-full-details");

    const title = details.querySelector(".full-title")?.innerText || "Project";
    const desc = details.querySelector(".full-description")?.innerText || "";
    const tech = details.querySelector(".full-tech")?.innerText || "";
    const imgSrc = card.querySelector(".project-img").src; // use card image

    modalImg.src = imgSrc;
    modalTitle.innerText = title;
    modalDesc.innerText = desc;
    modalTech.innerHTML = tech
      .split(",")
      .map((t) => `<span class="tech-tag">${t.trim()}</span>`)
      .join("");

    modal.classList.add("active");
  });
});

// Contact form handling (optional, you can implement your own)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const formMessage = document.getElementById("formMessage");

  // Simple validation
  if (!name || !email || !message) {
    formMessage.textContent = "Please fill all fields.";
    formMessage.className = "error";
    return;
  }

   formMessage.textContent = "Message sent successfully! (Demo mode)";
  formMessage.className = "success";
  this.reset();
  setTimeout(() => {
    formMessage.textContent = "";
    formMessage.className = "";
  }, 3000);
});
