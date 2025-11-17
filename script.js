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

// Basic swipe handling
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
    // Prevent vertical scroll from feeling weird if swipe is mostly horizontal
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

  const threshold = 50; // px needed to trigger swipe
  if (diff > threshold) {
    // swipe right -> previous
    showSlide(currentIndex - 1);
  } else if (diff < -threshold) {
    // swipe left -> next
    showSlide(currentIndex + 1);
  }
});

// Optional: click-to-change on desktop (for testing)
phoneScreen.addEventListener("click", () => {
  showSlide((currentIndex + 1) % totalSlides);
});
