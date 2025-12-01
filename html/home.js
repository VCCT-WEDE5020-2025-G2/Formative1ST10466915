// When a card is clicked, save product info and redirect
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const product = {
      title: card.querySelector(".product-title")?.textContent,
      desc: card.querySelector(".product-desc")?.textContent,
      price: card.querySelector(".price")?.textContent,
      image: card.querySelector("img")?.getAttribute("src")
    };
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    window.location.href = "menulanding.html";
  });
});
