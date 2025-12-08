// FILTER BUTTONS
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// SEARCH BAR
const searchInput = document.getElementById('productSearch');

searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase();

  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    // Only show cards that match the search
    if (name.includes(query)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});

// Ensure Add to Cart button navigates without conflicts
document.querySelectorAll('.card-button').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation(); // prevents card-level click events
    // product data can be stored if needed
    const card = this.closest('.card');
    const product = {
      title: card.querySelector('.product-title').textContent,
      desc: card.querySelector('.product-desc').textContent,
      price: card.querySelector('.price').textContent,
      image: card.querySelector('img').getAttribute('src')
    };
    localStorage.setItem('selectedProduct', JSON.stringify(product));
  });
});


