// Update the last modified date
function updateLastModifiedDate() {
    var lastModified = document.lastModified;
    if(!lastModified) {
        return;
    }
    document.getElementById("lastModified").innerText = "Definition zuletzt geaendert am: " + lastModified;
}


// Call the function when the page loads
window.onload = updateLastModifiedDate;