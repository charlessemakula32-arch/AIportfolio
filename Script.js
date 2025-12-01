// ------------------- LOADING SCREEN -------------------
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = 0;
  setTimeout(() => loader.style.display = "none", 600);
});

// ------------------- MOBILE MENU -------------------
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// ------------------- LOAD MORE PROJECTS -------------------
const moreProjects = document.getElementById("more-projects");
const loadMoreBtn = document.getElementById("loadMore");

loadMoreBtn.addEventListener("click", () => {
  moreProjects.innerHTML = `
    <div class="project-card">
      <h3>Restaurant Website</h3>
      <p>Interactive menu + online booking sections.</p>
    </div>
    <div class="project-card">
      <h3>School Website</h3>
      <p>Clean UI + modern feature layout.</p>
    </div>
    <div class="project-card">
      <h3>Booking System UI</h3>
      <p>Professional booking interface prototype.</p>
    </div>
  `;
  loadMoreBtn.style.display = "none";
});

// ------------------- SCROLL REVEAL -------------------
const sections = document.querySelectorAll(".section, .hero-text");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 }
);
sections.forEach(sec => observer.observe(sec));

// ------------------- BACK TO TOP BUTTON -------------------
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if(window.scrollY > 300) backToTop.style.display = "flex";
  else backToTop.style.display = "none";
});
backToTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
