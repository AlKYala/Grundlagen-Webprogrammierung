function redirectToGlossary() {
    var searchValue = document.getElementById('search').value;
    if (searchValue) {
        window.location.href = 'main.html?search=' + encodeURIComponent(searchValue);
    }
}