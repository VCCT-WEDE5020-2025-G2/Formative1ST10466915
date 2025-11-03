const filterBtns = document.querySelectorAll('.filter-btn');
  const menuItems = document.querySelectorAll('.menu-grid .card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      menuItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

    document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const item = card.dataset.item;
      const price = card.dataset.price;
      window.location.href = `menulanding.html?item=${encodeURIComponent(item)}&price=${encodeURIComponent(price)}`;
    });
  });

  // When a card is clicked, save its info to localStorage and go to product page
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      const product = {
        title: card.querySelector(".product-title").textContent,
        desc: card.querySelector(".product-desc").textContent,
        price: card.querySelector(".price").textContent,
        image: card.querySelector("img").getAttribute("src")
      };
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "menulanding.html";
    });
  });