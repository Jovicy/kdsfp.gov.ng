document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const overlay = document.querySelector('.overlay');

  hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', function () {
      navMenu.classList.remove('active');
      overlay.classList.remove('active');
  });
});


// Gallery
function calculateAspectRatio() {
    const images = document.querySelectorAll('.gallery-img img');
    const aspectRatio = images[0].naturalHeight / images[0].naturalWidth;
  
    images.forEach(img => {
      img.parentElement.style.paddingBottom = containerHeight;
    });
}
  
window.onload = calculateAspectRatio;

// Accordion
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".acc-item");

  accordionItems.forEach((item) => {
    const title = item.querySelector(".acc-item h3");
    const content = item.querySelector(".acc-item p");
    const chevron = item.querySelector(".acc-chevron");

    title.addEventListener("click", () => {
      const isExpanded = content.style.display === "block";

      // Close all accordion items
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.querySelector(".acc-item p").style.display = "none";
          otherItem.querySelector(".acc-chevron").style.transform =
            "rotate(0deg)";
        }
      });

      // Toggle the clicked accordion item
      content.style.display = isExpanded ? "none" : "block";
      chevron.style.transform = isExpanded ? "rotate(0deg)" : "rotate(180deg)";
    });
  });
});
  