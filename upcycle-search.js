document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const searchButton = document.querySelector(".search-bar button");
    const items = document.querySelectorAll(".recycle-grid .item");
    const noResults = document.querySelector(".no-results");
    const browseAgainButton = document.getElementById("browse-again");
    const exploreSection = document.querySelector(".explore-section");
    const suggestionBox = document.getElementById("suggestion-box");

    // Get product names dynamically for search suggestions
    const productNames = Array.from(items).map(item => item.querySelector("strong").innerText.trim());

    function searchProducts(query) {
        let found = false;
        query = query.trim().toLowerCase();

        if (query === "") {
            resetPage(); // Restore full page if search is cleared
            return;
        }

        items.forEach(item => {
            const productName = item.querySelector("strong").innerText.toLowerCase();
            if (productName.includes(query)) {
                item.style.display = "block";
                found = true;
            } else {
                item.style.display = "none";
            }
        });

        if (found) {
            noResults.style.display = "none";
            exploreSection.style.display = "none";
        } else {
            noResults.style.display = "block";
            exploreSection.style.display = "block";
        }
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

    function resetPage() {
        items.forEach(item => (item.style.display = "block"));
        noResults.style.display = "none";
        exploreSection.style.display = "none";
        searchInput.value = "";
        suggestionBox.style.display = "none";
    }

    // Event Listeners
    searchInput.addEventListener("input", () => {
        showSuggestions(searchInput.value);
        searchProducts(searchInput.value);
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

    browseAgainButton.addEventListener("click", resetPage);

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
