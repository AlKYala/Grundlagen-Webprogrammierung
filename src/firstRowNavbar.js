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
    e.preventDefault();  // Prevent the default anchor behavior
    top.location.href = url;  // Change the location of the topmost parent window
}