// Product data
const products = [
  { id: 1, name: "Wireless Headphones", price: 3499, img: "https://via.placeholder.com/300x200" },
  { id: 2, name: "Ergonomic Chair", price: 8999, img: "https://via.placeholder.com/300x200" },
  { id: 3, name: "Smart TV 50\"", price: 27999, img: "https://via.placeholder.com/300x200" },
  { id: 4, name: "Gaming Mouse", price: 1299, img: "https://via.placeholder.com/300x200" }
];

let cart = [];

// Render products
function renderProducts() {
  let html = "";
  products.forEach(p => {
    html += `
      <div class="col-md-3 mb-4">
        <div class="card h-100">
          <img src="${p.img}" class="card-img-top" alt="${p.name}">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">₹${p.price}</p>
            <button class="btn btn-warning add-to-cart" data-id="${p.id}">Add to Cart</button>
          </div>
        </div>
      </div>`;
  });
  $("#product-list").html(html);
}

// Update cart button count
function updateCartBtn() {
  $("#cart-btn").text(`Cart (${cart.length})`);
}

// Render cart
function renderCart() {
  let html = "";
  let total = 0;
  if (cart.length === 0) {
    html = "<p>Your cart is empty</p>";
  } else {
    cart.forEach((p, i) => {
      html += `
        <div class="d-flex justify-content-between align-items-center mb-2">
          <span>${p.name}</span>
          <div>
            <button class="btn btn-sm btn-danger remove-item" data-index="${i}">x</button>
            ₹${p.price}
          </div>
        </div>`;
      total += p.price;
    });
    html += `<hr><strong>Total: ₹${total}</strong>`;
  }
  $("#cart-items").html(html);
}

// Add item to cart
$(document).on("click", ".add-to-cart", function () {
  const id = $(this).data("id");
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCartBtn();
});

// Remove item from cart
$(document).on("click", ".remove-item", function () {
  const index = $(this).data("index");
  cart.splice(index, 1);
  updateCartBtn();
  renderCart();
});

// Open cart modal
$("#cart-btn").click(function () {
  renderCart();
  $("#cartModal").modal("show");
});

// Init
$(document).ready(function () {
  renderProducts();
  updateCartBtn();
});