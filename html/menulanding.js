const product = JSON.parse(localStorage.getItem("selectedProduct"));

if (product) {
  document.getElementById("productTitle").textContent = product.title;
  document.getElementById("productDesc").textContent = product.desc;
  document.getElementById("productPrice").textContent = `${product.price}`;
  document.getElementById("productImage").src = product.image;
} else {
  document.querySelector(".product-display").innerHTML = "<p>Product not found.</p>";
}

const minusBtn = document.querySelector(".minus");
  const plusBtn = document.querySelector(".plus");
  const qtyInput = document.getElementById("quantity");

  minusBtn.addEventListener("click", () => {
    let value = parseInt(qtyInput.value);
    if (value > 1) qtyInput.value = value - 1;
  });

  plusBtn.addEventListener("click", () => {
    let value = parseInt(qtyInput.value);
    qtyInput.value = value + 1;
  });

document.querySelector(".purchase-btn").addEventListener("click", () => {
  const buyerName = document.querySelector("#buyerName").value;
  const buyerEmail = document.querySelector("#buyerEmail").value;
  const quantity = parseInt(document.querySelector("#quantity").value, 10);
  
  if (!buyerName || !buyerEmail || !quantity || quantity <= 0) {
    alert("Please fill in all fields with a valid quantity.");
    return;
  }

  // Make sure product price is a number
  const priceNumber = parseFloat(product.price.replace("R", ""));
  const total = (priceNumber * quantity).toFixed(2);

  alert(`Thank you, ${buyerName}!
  
You purchased ${quantity} x ${product.title}.
Cost per item: R${priceNumber}
Total: R${total}
Confirmation sent to ${buyerEmail}.`);





  this.reset();
});
