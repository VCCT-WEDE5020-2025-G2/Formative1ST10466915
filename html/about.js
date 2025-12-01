const track = document.querySelector('.team-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const teamItems = document.querySelectorAll('.team-member');
const totalItems = teamItems.length;

let index = 0;

function getItemWidth() {
  const style = window.getComputedStyle(teamItems[0]);
  const gap = parseInt(style.marginRight) || 30;
  return teamItems[0].offsetWidth + gap;
}

function moveCarousel() {
  const itemWidth = getItemWidth();
  track.style.transform = `translateX(-${itemWidth * index}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % totalItems;
  moveCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + totalItems) % totalItems;
  moveCarousel();
});

// Auto-slide every 5 seconds
setInterval(() => {
  index = (index + 1) % totalItems;
  moveCarousel();
}, 5000);

window.addEventListener('resize', moveCarousel);
