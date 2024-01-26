function filterTerms() {
    var input, filter, glossaryContainer, terms, termText;
    input = document.getElementById('searchInput'); 
    filter = input.value.toUpperCase();
    glossaryContainer = document.querySelector('.glossary-container');
    terms = glossaryContainer.getElementsByClassName('term');


    for (var i = 0; i < terms.length; i++) {
        termText = terms[i].textContent || terms[i].innerText;
        if (termText.toUpperCase().indexOf(filter) > -1) {
            terms[i].style.display = "";
        } else {
            terms[i].style.display = "none";
        }
    }
}

function checkForSearchParam() {
    var urlParams = new URLSearchParams(window.location.search);
    var searchValue = urlParams.get('search');

    if (searchValue) {
        document.getElementById('searchInput').value = decodeURIComponent(searchValue);
        filterTerms();
    }
}

function resetSearch() {
    document.getElementById('searchInput').value = '';
    filterTerms();
}

function init() {
    checkForSearchParam();
}

document.addEventListener("DOMContentLoaded", init);