document.addEventListener('DOMContentLoaded', () => {
    console.log('Add-to-Cart Script Loaded');

    // Attach click event to all add-to-cart buttons dynamically
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.dataset.name;
            const price = parseFloat(button.dataset.price);
            const image = button.dataset.image;

            const product = { name, price, image, quantity: 1 };
            
            let productsInCart = JSON.parse(localStorage.getItem('cartItems')) || [];

            // Check if the product already exists in the cart
            const existingProduct = productsInCart.find(p => p.name === name);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                productsInCart.push(product);
            }

            localStorage.setItem('cartItems', JSON.stringify(productsInCart));
            console.log('Product added to cart:', product);
        });
    });
});
