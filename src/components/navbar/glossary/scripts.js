function filterTerms() {
    var input, filter, termsSection, terms, termText;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    termsSection = document.getElementById('termsSection');
    terms = termsSection.getElementsByClassName('term');

    for (let term of terms) {
        termText = term.textContent || term.innerText;
        term.style.display = termText.toUpperCase().includes(filter) ? "" : "none";
    }
}
