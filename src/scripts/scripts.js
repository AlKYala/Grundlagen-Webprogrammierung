function parentRedirect(e, url) {
    e.preventDefault();  // Prevent the default anchor behavior
    top.location.href = url;  // Change the location of the topmost parent window
}





