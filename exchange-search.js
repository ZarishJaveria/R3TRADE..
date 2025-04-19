document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const searchButton = document.getElementById("search-btn");
    const items = document.querySelectorAll(".recycle-grid .item");
    const noResults = document.querySelector(".no-results");
    const browseAgainButton = document.getElementById("browse-again");
    const exploreSection = document.querySelector(".explore-section");

    // Create a dropdown for suggestions
    const suggestionBox = document.createElement("ul");
    suggestionBox.setAttribute("id", "suggestion-box");
    document.querySelector(".search-bar").appendChild(suggestionBox);

    // Get product names for suggestions
    const productNames = Array.from(items).map(item => item.getAttribute("data-name"));

    function searchProducts(query) {
        let found = false;
        query = query.trim().toLowerCase();

        // Show all products if search box is empty
        if (query === "") {
            items.forEach(item => item.style.display = "block");
            noResults.style.display = "none";
            exploreSection.style.display = "none";
            return;
        }

        items.forEach(item => {
            const productName = item.getAttribute("data-name").toLowerCase();
            if (productName.includes(query)) {
                item.style.display = "block";
                found = true;
            } else {
                item.style.display = "none";
            }
        });

        noResults.style.display = found ? "none" : "block";
        exploreSection.style.display = found ? "none" : "block";
    }

    function showSuggestions(query) {
        suggestionBox.innerHTML = "";
        if (query.length < 1) {
            suggestionBox.style.display = "none";
            return;
        }

        const filteredSuggestions = productNames.filter(name =>
            name.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredSuggestions.length === 0) {
            suggestionBox.style.display = "none";
            return;
        }

        filteredSuggestions.forEach(name => {
            const li = document.createElement("li");
            li.textContent = name;
            li.addEventListener("click", () => {
                searchInput.value = name;
                suggestionBox.style.display = "none";
                searchProducts(name);
            });
            suggestionBox.appendChild(li);
        });

        suggestionBox.style.display = "block";
    }

    searchInput.addEventListener("input", () => {
        showSuggestions(searchInput.value);
        searchProducts(searchInput.value); // 🔥 Fix: Automatically show all products if cleared
    });

    searchButton.addEventListener("click", () => {
        searchProducts(searchInput.value);
        suggestionBox.style.display = "none";
    });

    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            searchProducts(searchInput.value);
            suggestionBox.style.display = "none";
        }
    });

    browseAgainButton.addEventListener("click", () => {
        items.forEach(item => item.style.display = "block");
        noResults.style.display = "none";
        exploreSection.style.display = "none";
        searchInput.value = "";
        suggestionBox.style.display = "none";
    });

    // Hide suggestion box when clicking outside
    document.addEventListener("click", (event) => {
        if (!searchInput.contains(event.target) && !suggestionBox.contains(event.target)) {
            suggestionBox.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("browse-again").addEventListener("click", function() {
        let hiddenImages = document.querySelectorAll(".extra");
        hiddenImages.forEach(img => img.classList.remove("hidden"));
        this.style.display = "none"; // Hide button after click
    });
});