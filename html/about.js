const track = document.querySelector('.team-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const teamItems = document.querySelectorAll('.team-member');
const totalItems = teamItems.length;

let index = 0;

// Get width of one item including gap
function getItemWidth() {
  const style = window.getComputedStyle(teamItems[0]);
  const gap = parseInt(style.marginRight) || 30;
  return teamItems[0].offsetWidth + gap;
}

// Move carousel to index
function moveCarousel() {
  const itemWidth = getItemWidth();
  track.style.transform = `translateX(-${itemWidth * index}px)`;
}

// Buttons
nextBtn.addEventListener('click', () => {
  index = (index + 1) % totalItems; // loop infinitely
  moveCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + totalItems) % totalItems; // loop backwards
  moveCarousel();
});

// Auto-slide every 4 seconds
setInterval(() => {
  index = (index + 1) % totalItems;
  moveCarousel();
}, 4000);

// Responsive adjustment
window.addEventListener('resize', moveCarousel);

