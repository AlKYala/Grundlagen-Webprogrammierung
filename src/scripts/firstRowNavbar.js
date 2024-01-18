document.addEventListener('DOMContentLoaded', function () {
    var mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    var navbarControls = document.querySelector('.navbar-controls');

    if(mobileNavToggle == null) {
        return;
    }

    mobileNavToggle.addEventListener('click', function () {
        navbarControls.style.display = navbarControls.style.display === 'flex' ? 'none' : 'flex';
    });
});


function parentRedirect(e, url) {
    e.preventDefault();
    top.location.href = url;
}

function redirectToGlossary() {
    var searchValue = document.getElementById('search').value;
    if (searchValue) {
        window.location.href = 'main.html?search=' + encodeURIComponent(searchValue);
    }
}