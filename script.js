//NAV
const nav = document.querySelector("nav.nav");
const navToggle = document.querySelector(".nav-toggle");
const dropdownTriggers = document.querySelectorAll(".dropdown-parent > a");

// toggle whole menu (hamburger)
if (nav && navToggle) {
  navToggle.addEventListener("click", function () {
    nav.classList.toggle("open");
    // console.log("nav toggled"); // you can uncomment to test
  });
}

// toggle dropdowns on mobile
dropdownTriggers.forEach((trigger) => {
  trigger.addEventListener("click", function (e) {
    const dropdown = this.parentElement.querySelector(".dropdown");

    if (window.innerWidth <= 900 && dropdown) {
      e.preventDefault(); // don't navigate yet
      dropdown.classList.toggle("show");
    }
  });
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
fetch("partials/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });
//END OF FOOTER

//LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 600);
});
//END OF LOADER

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

//SHARE BUTTON
const shareBtn = document.getElementById("shareButton");

if (shareBtn) {
  shareBtn.addEventListener("click", async () => {
    const shareData = {
      title: document.title || "Check this comic",
      text: "Read this comic!",
      url: window.location.href,
    };

    if (navigator.share) {
      // Native share (mobile / some desktops)
      try {
        await navigator.share(shareData);
      } catch (err) {
        // user canceled, do nothing
        console.log("Share canceled", err);
      }
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      // Fallback: copy link
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard ✨");
      } catch (err) {
        alert("Could not copy link. Here it is:\n" + window.location.href);
      }
    } else {
      // Super old browser fallback
      alert("Share this link:\n" + window.location.href);
    }
  });
}
// END OF SHARE BUTTON

//PHONE
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

//QUIZ
