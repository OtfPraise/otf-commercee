document.querySelector('.search-btn').addEventListener('click', function() {
    const query = document.querySelector('.search-box').value;
    if (query) {
        // Redirect to search results page or filter products
        window.location.href = `/search?query=${query}`;
    }
});