
// ------------------------------
// 🎯 Cursor tracking animation (Mouse follows a ball)
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const ball = document.querySelector(".ball");

    if (ball) {
        document.addEventListener("mousemove", (e) => {
            ball.style.transform = `translate(${e.pageX - 4}px, ${e.pageY - 4}px)`;
        });
    }
});

// search ka code
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const dropdown = document.getElementById("dropdown");
    const searchButton = document.getElementById("searchButton");
    const defaultOptions = document.querySelector(".default-options");
    const searchSuggestions = document.querySelector(".search-suggestions");

    // 🔍 Product categories & their pages
    const productCategories = {
        "cement": "sell.html",
        "brick": "sell.html",
        "shoes": "sell.html",
        "wood": "sell.html",
        "sofa": "sell.html",
        "book": "sell.html",
        "tempo": "sell.html",
        "grain": "sell.html",
        "cupboard": "xchange.html",
        "rack": "xchange.html",
        "television": "xchange.html",
        "car": "xchange.html",
        "sewing": "xchange.html",
        "chair": "xchange.html",
        "gas": "xchange.html",
        "clock": "xchange.html",
        "plastic": "upcycle.html",
        "jeans": "upcycle.html",
        "tyre": "upcycle.html",
        "cane": "upcycle.html",
        "toycar": "upcycle.html"
    };

    // 🏆 Show dropdown when clicking on search bar
    searchInput.addEventListener("click", () => {
        dropdown.style.display = "block";
    });

    // 🏆 Live search suggestions
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();
        
        if (query === "") {
            defaultOptions.style.display = "block"; // Show default options
            searchSuggestions.style.display = "none"; // Hide search suggestions
            searchSuggestions.innerHTML = ""; // Clear suggestions
        } else {
            defaultOptions.style.display = "none"; // Hide default options
            searchSuggestions.style.display = "block"; // Show search suggestions

            let matches = Object.keys(productCategories).filter(item => item.includes(query));
            
            if (matches.length > 0) {
                searchSuggestions.innerHTML = matches.map(item => 
                    `<div data-url="${productCategories[item]}">${item}</div>`
                ).join("");
            } else {
                searchSuggestions.innerHTML = `<div class="no-results">No results found</div>`;
            }
        }
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!searchInput.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = "none";
        }
    });

    // 🔎 Perform search when pressing "Enter"
    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    // 🔍 Perform search when clicking search button
    searchButton.addEventListener("click", performSearch);

    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();

        if (query in productCategories) {
            window.location.href = `${productCategories[query]}?search=${query}`;
        } else {
            alert("No matching products found! Try searching for something else.");
        }
    }

    // 🚀 Redirect when clicking dropdown options
    dropdown.addEventListener("click", (event) => {
        if (event.target.dataset.url) {
            window.location.href = event.target.dataset.url;
        }
    });
});
// ------------------------------
// 🔒 Show Signup Modal on Page Load (Instead of Redirect)
// ------------------------------
document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("userSignedUp")) {
        document.getElementById("signup").style.display = "flex"; // Show Modal
    }
});

// ------------------------------
// 🚪 Logout Function (Clears Signup Data)
// ------------------------------
function logout() {
    localStorage.removeItem("userSignedUp"); // ❌ Remove signup status
    location.reload(); // 🔄 Reload instead of redirect
}

// ------------------------------
// 🎞 Image Slider Functionality
// ------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".image-slider");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    if (!slider || !prevBtn || !nextBtn) {
        console.error("Slider or buttons not found!");
        return;
    }

    const scrollAmount = 300; // Adjust scroll step

    prevBtn.addEventListener("click", () => {
        if (slider.scrollLeft > 0) {
            slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
    });

    nextBtn.addEventListener("click", () => {
        if (slider.scrollLeft + slider.clientWidth < slider.scrollWidth) {
            slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    });
});
/*
// ------------------------------
// ✍️ Signup Form Validation & Role-Based Redirect
// ------------------------------
document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const inputs = document.querySelectorAll("#signupForm input, #signupForm select");
    const role = document.getElementById("roleSelect"); // Role Selection
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value) {
            input.style.border = "2px solid red";
            isValid = false;
        } else {
            input.style.border = "none";
        }
    });

    if (role.value === "") {
        role.style.border = "2px solid red";
        isValid = false;
    } else {
        role.style.border = "none";
    }

    if (isValid) {
        localStorage.setItem("userSignedUp", "true");

        // Role-based Redirect
        if (role.value === "customer") {
            window.location.href = "indexnew.html";
        } else if (role.value === "artist") {
            window.location.href = "indexartist.html";
        } else {
            window.location.href = "indexnew.html"; // Default
        }
    }
});

// ------------------------------
// 👁 Password Toggle Functionality
// ------------------------------
function togglePassword() {
    var passwordField = document.getElementById("password");
    var icon = passwordField.nextElementSibling; // Select the correct eye icon

    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
        icon.title = "Hide Password"; // Tooltip for better UX
    } else {
        passwordField.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
        icon.title = "Show Password"; // Tooltip for better UX
    }
}*/
