const params = new URLSearchParams(window.location.search);
  const item = params.get("item");
  const price = params.get("price");

  document.querySelector("#itemName").textContent = item;
  document.querySelector("#itemPrice").textContent = `Price: R${price}`;

  // Retrieve product data and display
    const product = JSON.parse(localStorage.getItem("selectedProduct"));
    if (product) {
      document.getElementById("productTitle").textContent = product.title;
      document.getElementById("productDesc").textContent = product.desc;
      document.getElementById("productPrice").textContent = product.price;
      document.getElementById("productImage").src = product.image;
    } else {
      document.querySelector(".product-display").innerHTML = "<p>Product not found.</p>";
    }

    // Example purchase action
    document.querySelector(".purchase-btn").addEventListener("click", () => {
      alert("Thank you for purchasing " + product.title + "!");
    });