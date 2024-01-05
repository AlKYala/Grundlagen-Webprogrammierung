function filterTerms() {
    var input, filter, glossaryTerms, terms, i, termText;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    glossaryTerms = document.getElementById('glossaryTerms');
    terms = glossaryTerms.getElementsByClassName('term');

    for (i = 0; i < terms.length; i++) {
        termText = terms[i].textContent || terms[i].innerText;
        if (termText.toUpperCase().indexOf(filter) > -1) {
            terms[i].style.display = "";
        } else {
            terms[i].style.display = "none";
        }
    }
}
