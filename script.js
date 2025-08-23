// script.js
const products = [
  { id: 1, name: "Wireless Headphones", price: 3499, img: "https://via.placeholder.com/300x200" },
  { id: 2, name: "Ergonomic Chair", price: 8999, img: "https://via.placeholder.com/300x200" },
  { id: 3, name: "Smart TV 50\"", price: 27999, img: "https://via.placeholder.com/300x200" },
  { id: 4, name: "Gaming Mouse", price: 1299, img: "https://via.placeholder.com/300x200" }
];

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

let cart = [];

function updateCartBtn() {
  $(".btn-outline-light").text(`Cart(${cart.length})`);
}

$(document).on("click", ".add-to-cart", function () {
  const id = $(this).data("id");
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCartBtn();
});

$(document).ready(function () {
  renderProducts();
});