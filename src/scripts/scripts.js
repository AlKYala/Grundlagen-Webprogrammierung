function parentRedirect(e, url) {
    e.preventDefault();  // Prevent the default anchor behavior
    top.location.href = url;  // Change the location of the topmost parent window
}

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

function filterGlossary() {
    const letterMarkers = document.querySelectorAll('.letter-marker');

    letterMarkers.forEach(marker => {
        let hasTerms = false;
        let nextElement = marker.nextElementSibling;

        while (nextElement && !nextElement.classList.contains('letter-marker')) {
            if (nextElement.classList.contains('term')) {
                hasTerms = true;
                break;
            }
            nextElement = nextElement.nextElementSibling;
        }

        if (!hasTerms) {
            marker.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", filterGlossary);





