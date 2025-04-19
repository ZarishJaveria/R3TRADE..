document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const searchButton = document.querySelector(".search-bar button");
    const items = document.querySelectorAll(".recycle-grid .item");  
    const noResults = document.querySelector(".no-results");
    const exploreSection = document.querySelector(".explore-section");
    const browseAgainButton = document.getElementById("browse-again");
    const suggestionBox = document.getElementById("suggestion-box");

    // 🔹 Extract product names from the page
    const productNames = [...items].map(item => item.querySelector("p strong").textContent.toLowerCase());

    function searchProducts(query) {
        let found = false;
        query = query.trim().toLowerCase();

        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.style.display = "block";
                found = true;
            } else {
                item.style.display = "none";
            }
        });

        // Show or hide "No products found" section
        if (found) {
            noResults.style.display = "none";
            exploreSection.style.display = "none";
        } else {
            noResults.style.display = "block";
            exploreSection.style.display = "block";
        }

        // If search is cleared, reset all products
        if (query === "") {
            resetSearch();
        }
    }

    function resetSearch() {
        items.forEach(item => item.style.display = "block");
        noResults.style.display = "none";
        exploreSection.style.display = "none";
        suggestionBox.innerHTML = ""; // 🔥 Clear suggestions
    }

    // 🔥 Live search suggestions
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();
        suggestionBox.innerHTML = ""; // Clear previous suggestions

        if (query.length > 0) {
            const filteredSuggestions = productNames.filter(name => name.includes(query));

            filteredSuggestions.forEach(name => {
                const li = document.createElement("li");
                li.textContent = name;
                li.addEventListener("click", () => {
                    searchInput.value = name; // 🔥 Click pe select ho jaye
                    suggestionBox.innerHTML = "";
                    searchProducts(name);
                });
                suggestionBox.appendChild(li);
            });

            suggestionBox.style.display = "block"; // Show suggestions
        } else {
            suggestionBox.style.display = "none"; // Hide if no query
        }

        searchProducts(query);
    });

    // Hide suggestion box when clicking outside
    document.addEventListener("click", (event) => {
        if (!searchInput.contains(event.target) && !suggestionBox.contains(event.target)) {
            suggestionBox.style.display = "none";
        }
    });

    // Run search on button click
    searchButton.addEventListener("click", () => {
        searchProducts(searchInput.value);
        suggestionBox.style.display = "none"; // Hide suggestions
    });

    // Handle "Continue Exploring" button (refresh the page)
    browseAgainButton.addEventListener("click", () => {
        searchInput.value = "";  // Clear search
        resetSearch();  // Show all products
    });

    // Auto-search if redirected with a search query
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("search");
    if (searchQuery) {
        searchInput.value = searchQuery;
        searchProducts(searchQuery);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("browse-again").addEventListener("click", function() {
        let hiddenImages = document.querySelectorAll(".extra");
        hiddenImages.forEach(img => img.classList.remove("hidden"));
        this.style.display = "none"; // Hide button after click
    });
});
