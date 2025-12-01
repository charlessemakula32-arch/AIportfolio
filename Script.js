// Mobile menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Load More Projects
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
