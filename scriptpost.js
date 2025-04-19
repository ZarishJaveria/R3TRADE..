document.addEventListener("DOMContentLoaded", function () {
    const imageInput = document.getElementById("image");
    const imagePreview = document.getElementById("imagePreview");
    const postForm = document.getElementById("postForm");
    const priceInput = document.getElementById("price");

    // Image Preview Functionality
    imageInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });

    // Ensure price input is INR formatted (Optional: Prevents negative values)
    priceInput.addEventListener("input", function () {
        if (priceInput.value < 0) {
            priceInput.value = "";
            alert("Price cannot be negative!");
        }
    });

    // Form Submission Validation
    postForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const title = document.getElementById("title").value.trim();
        const price = priceInput.value.trim();
        const image = imageInput.files[0];

        if (title && price && image) {
            alert("Post submitted successfully!");
            postForm.reset();
            imagePreview.style.display = "none";
        } else {
            alert("Please fill all fields!");
        }
    });
});
