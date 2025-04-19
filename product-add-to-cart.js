document.addEventListener('DOMContentLoaded', () => {
    console.log('Product Page Add-to-Cart Script Loaded');

    function addProductToCart(product) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Check if product already exists
        const existingProduct = cartItems.find(p => p.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            product.quantity = 1;
            cartItems.push(product);
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log('Product added to cart:', product);
        
        // ✅ Show toast instead of alert
        showToast(`${product.name} added to cart!`, "success");
    }

    // Function to show toast messages
    function showToast(message, type = "success") {
        const toast = document.getElementById("toast");
        toast.textContent = message;
        toast.style.backgroundColor = type === "error" ? "#e74c3c" : "#333"; // Red for error, black for success
        toast.className = "show";

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }

    // Get product details from URL parameters
    function getProductFromURL() {
        const params = new URLSearchParams(window.location.search);
        return {
            id: params.get('id'),
            name: decodeURIComponent(params.get('name')),
            price: parseFloat(params.get('price')),
            image: params.get('image'),
            description: decodeURIComponent(params.get('description') || '')
        };
    }

    // Attach event listener to "Add to Cart" button
    const addToCartButton = document.querySelector('.btn');
    if (addToCartButton) {
        const product = getProductFromURL();
        addToCartButton.addEventListener('click', () => addProductToCart(product));
    }
});
