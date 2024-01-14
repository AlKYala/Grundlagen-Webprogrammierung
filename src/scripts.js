function parentRedirect(e, url) {
    e.preventDefault();  // Prevent the default anchor behavior
    top.location.href = url;  // Change the location of the topmost parent window
}

// Update the last modified date
function updateLastModifiedDate() {
    var lastModified = document.lastModified;
    document.getElementById("lastModified").innerText = "Last Modified: " + lastModified;
}

// Call the function when the page loads
window.onload = updateLastModifiedDate;