function filterTerms() {
    var input, filter, glossaryContainer, terms, termText;
    input = document.getElementById('searchInput');  // Get the search input
    filter = input.value.toUpperCase();  // Get the search term in uppercase
    glossaryContainer = document.querySelector('.glossary-container');  // Get the glossary container
    terms = glossaryContainer.getElementsByClassName('term');  // Get all terms within the container

    // Loop through all list items, and hide those that don't match the search query
    for (var i = 0; i < terms.length; i++) {
        termText = terms[i].textContent || terms[i].innerText;
        if (termText.toUpperCase().indexOf(filter) > -1) {
            terms[i].style.display = "";
        } else {
            terms[i].style.display = "none";
        }
    }
}