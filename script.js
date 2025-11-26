//NAV BAR
fetch("/partials/nav.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("nav-placeholder").innerHTML = data;
  });
//END OF NAV

document.addEventListener("DOMContentLoaded", function () {
  const faqButtons = document.querySelectorAll(".faq-item");

  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
    });
  });
});

//FOOTER
fetch("/partials/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });
//END OF FOOTER

//MODAL
(function () {
  const section = document.querySelector(".section-two");
  if (!section) return;

  const characterButtons = section.querySelectorAll(".character-card");
  const infoBlocks = section.querySelectorAll(".character-info");

  characterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");

      characterButtons.forEach((b) => b.classList.remove("active-card"));
      btn.classList.add("active-card");

      infoBlocks.forEach((block) => {
        block.classList.toggle("active-info", block.id === targetId);
      });
    });
  });
})();
//END OF MODAL

const slides = document.getElementById("slides");
const phoneScreen = document.getElementById("phoneScreen");
const descriptions = document.querySelectorAll(".person-description");

const totalSlides = slides.children.length;
let currentIndex = 0;

function showSlide(index) {
  // Clamp index
  if (index < 0) index = 0;
  if (index >= totalSlides) index = totalSlides - 1;
  currentIndex = index;

  // Move slides
  const offset = -index * 100;
  slides.style.transform = `translateX(${offset}%)`;

  // Toggle descriptions
  descriptions.forEach((desc) => {
    const descIndex = Number(desc.dataset.index);
    desc.classList.toggle("active", descIndex === currentIndex);
  });
}

let startX = 0;
let isSwiping = false;

phoneScreen.addEventListener("touchstart", (e) => {
  if (e.touches.length !== 1) return;
  startX = e.touches[0].clientX;
  isSwiping = true;
});

phoneScreen.addEventListener(
  "touchmove",
  (e) => {
    if (!isSwiping) return;
    const deltaX = e.touches[0].clientX - startX;
    if (Math.abs(deltaX) > 10) {
      e.preventDefault();
    }
  },
  { passive: false }
);

phoneScreen.addEventListener("touchend", (e) => {
  if (!isSwiping) return;
  isSwiping = false;

  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  const threshold = 50;
  if (diff > threshold) {
    showSlide(currentIndex - 1);
  } else if (diff < -threshold) {
    showSlide(currentIndex + 1);
  }
});

// Optional: click-to-change on desktop (for testing)
phoneScreen.addEventListener("click", () => {
  showSlide((currentIndex + 1) % totalSlides);
});
