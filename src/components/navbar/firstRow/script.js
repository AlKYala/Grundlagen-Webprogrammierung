document.addEventListener('DOMContentLoaded', function () {
    var mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    var navbarControls = document.querySelector('.navbar-controls');

    mobileNavToggle.addEventListener('click', function () {
        navbarControls.style.display = navbarControls.style.display === 'flex' ? 'none' : 'flex';
    });
});
