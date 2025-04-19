// Get Product Details from URL Params
const params = new URLSearchParams(window.location.search);
const productName = params.get('name') || "Product Name";
const productPrice = params.get('price') || "0";
const productImage = params.get('image') || "default.jpg";
const productDescription = params.get('description') || "No description available.";

// Populate Product Details Dynamically
document.getElementById('product-name').textContent = productName;
document.getElementById('product-price').textContent = `Price: ₹${productPrice}`;
document.getElementById('product-description').textContent = `Description: ${productDescription}`;
document.getElementById('product-image').src = productImage;

// Add Product Reviews
const reviews = [
  "Great product, loved it! Highly recommended.",
  "Very useful and good quality. Definitely worth the price.",
  "Not bad, but could be improved. Could use a better finish."
];
document.getElementById('review-text').textContent = reviews[Math.floor(Math.random() * reviews.length)];

// Add to Cart functionality
document.getElementById('add-to-cart').addEventListener('click', function () {
  alert(`${productName} added to your cart!`);
});

// Product Data for Explore More
const exploreMoreProducts = [
  { name: "Gas Exchange", price: 1500, image: "gasxchange.jpg" },
  { name: "Old Car", price: 1200, image: "carxchange.jpg" },
  { name: "Travel Bag", price: 1700, image: "bag3.jpg" },
  { name: "Typewriter", price: 1100, image: "type.jpg" },
  { name: "Cement", price: 1100, image: "cementsell.jpeg" },
  { name: "Wall Clock", price: 1100, image: "clockschange.jpg" },
  { name: "Storage Rack", price: 1100, image: "rackxchange.jpeg" }
];

// Populate Explore More Section
const sliderItems = document.querySelector(".slider-items");

exploreMoreProducts.forEach(product => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="card-info">
      <h4>${product.name}</h4>
      <p class="price">₹${product.price}</p>
      <button class="btn">Add to Cart</button>
    </div>
  `;

  sliderItems.appendChild(productCard);
});

// Image Slider Logic
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let index = 0;
const slideWidth = 220 + 10; // Image width + margin

function updateSlider() {
  sliderItems.style.transform = `translateX(-${index * slideWidth}px)`;
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index >= sliderItems.children.length - 3;
}

nextBtn.addEventListener("click", function () {
  if (index < sliderItems.children.length - 3) {
    index++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", function () {
  if (index > 0) {
    index--;
    updateSlider();
  }
});

updateSlider();
