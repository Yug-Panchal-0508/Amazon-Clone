const products = [
  { id:1, name:"Wireless Headphones", price:3499, img:"https://www.google.com/imgres?q=wireless%20headphones&imgurl=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0057%2F8938%2F4802%2Ffiles%2F425.png%3Fv%3D1645772065&imgrefurl=https%3A%2F%2Fwww.boat-lifestyle.com%2Fproducts%2Frockerz-425-wireless-bluetooth-headphone%3Fsrsltid%3DAfmBOoowbK8GoAubLNcD5VHaphzHOgX5by6u8rEhA_Y5w1E1l9emElvG&docid=Z4KzvQ-V9LcuHM&tbnid=DBQGiuyILY3KmM&vet=12ahUKEwi12LfihqCPAxUmk1YBHTnvMN8QM3oECB0QAA..i&w=600&h=600&hcb=2&itg=1&ved=2ahUKEwi12LfihqCPAxUmk1YBHTnvMN8QM3oECB0QAA" },
  { id:2, name:"Ergonomic Chair", price:8999, img:"https://www.google.com/imgres?q=ergonomic%20chair&imgurl=https%3A%2F%2Fimages.woodenstreet.de%2Fimage%2Fdata%2FAquila-Chair%2FGrey%2FNew-Images%2FNew-InfoDimen%2FModel-Images%2FFinal-Images%2F19.jpg&imgrefurl=https%3A%2F%2Fwww.woodenstreet.com%2Fproduct%2Faquila-mid-back-mesh-ergonomic-desk-chair-with-comfortable-seat-knee-tilting-mechanism-durable-nylon-base-grey%3Fsrsltid%3DAfmBOoqlfEIcXeLGBdRAZgyR9bpbrY1ct-d1SaS2qE4lKApbMatJhOK9&docid=2BtPvW7x6TsRbM&tbnid=dpM99lORNtEvJM&vet=12ahUKEwiR9eWMh6CPAxVzqFYBHRPWMgMQM3oECCYQAA..i&w=1500&h=1300&hcb=2&ved=2ahUKEwiR9eWMh6CPAxVzqFYBHRPWMgMQM3oECCYQAA" },
  { id:3, name:"Smart TV 50\"", price:27999, img:"https://www.google.com/imgres?q=smart%20tv&imgurl=https%3A%2F%2Fimages.samsung.com%2Fis%2Fimage%2Fsamsung%2Fp6pim%2Fin%2Fua43t5450akxxl%2Fgallery%2Fin-fhd-t5310-428860-ua43t5450akxxl-532972981%3F%24684_547_PNG%24&imgrefurl=https%3A%2F%2Fwww.samsung.com%2Fin%2Ftvs%2Ffull-hd-tv%2Ft5450-43-inch-full-hd-smart-tv-ua43t5450akxxl%2F%3Fsrsltid%3DAfmBOoq-RCV0QSvyNxv7LoeG1i8FycjDGz-jE40x5kKPGscnv50pLzE7&docid=plxa3F64BaGmmM&tbnid=okxW8qesBgRUFM&vet=12ahUKEwiguYOjh6CPAxXZklYBHeboO7wQM3oECCAQAA..i&w=684&h=547&hcb=2&ved=2ahUKEwiguYOjh6CPAxXZklYBHeboO7wQM3oECCAQAA"},
  { id:4, name:"Gaming Mouse", price:1299, img:"https://www.google.com/imgres?q=Gaming%20Mouse&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61qN9d08hgL._UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FRisoPhy-Gaming-Mouse-PC365A%2Fdp%2FB0BCJC3GCY&docid=QxafKEYhDeOW_M&tbnid=puX8mJBibASnGM&vet=12ahUKEwjx79KfiKCPAxVC1TgGHa6NELMQM3oECBYQAA..i&w=1000&h=1000&hcb=2&ved=2ahUKEwjx79KfiKCPAxVC1TgGHa6NELMQM3oECBYQAA"},
  { id:5, name:"Laptop Stand", price:799, img:"https://www.google.com/imgres?q=Laptop%20Sound&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F619LwRaxkiL._UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FBIG-Laptop-Computer-Speaker-Portable%2Fdp%2FB0D94L2KT4&docid=Adw-XqTSHBeGRM&tbnid=9coRE5_4e_8B3M&vet=12ahUKEwiSyoe6iKCPAxW6zDgGHTs0E6kQM3oECD0QAA..i&w=1000&h=1000&hcb=2&ved=2ahUKEwiSyoe6iKCPAxW6zDgGHTs0E6kQM3oECD0QAA" },
];

let cart = [];

// Render products
function renderProducts(filter="") {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  products
    .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
        <button data-id="${p.id}">Add to Cart</button>
      `;
      list.appendChild(card);
    });
}

// Update cart
function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, idx) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      ${item.name} x${item.qty} - ₹${item.price*item.qty}
      <button data-idx="${idx}">Remove</button>
    `;
    cartItems.appendChild(div);
    total += item.price*item.qty;
  });
  document.getElementById("cart-total").innerText = total;
}

// Add to cart
document.addEventListener("click", function(e){
  if(e.target.tagName==="BUTTON" && e.target.dataset.id){
    const id = parseInt(e.target.dataset.id);
    const product = products.find(p=>p.id===id);
    const existing = cart.find(c=>c.id===id);
    if(existing) existing.qty++;
    else cart.push({...product, qty:1});
    updateCart();
  }
  if(e.target.dataset.idx){
    const idx = parseInt(e.target.dataset.idx);
    cart.splice(idx,1);
    updateCart();
  }
});

// Cart toggle
const cartSidebar = document.getElementById("cart-sidebar");
document.getElementById("cart-button").addEventListener("click", ()=>cartSidebar.classList.remove("hidden"));
document.getElementById("close-cart").addEventListener("click", ()=>cartSidebar.classList.add("hidden"));

// Search filter
document.getElementById("search").addEventListener("input", e=>renderProducts(e.target.value));

// Init
renderProducts();
updateCart();