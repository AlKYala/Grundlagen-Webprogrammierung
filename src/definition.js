// Update the last modified date
function updateLastModifiedDate() {
    var lastModified = document.lastModified;
    if(!lastModified) {
        return;
    }
    document.getElementById("lastModified").innerText = "Last Modified: " + lastModified;
}


// Call the function when the page loads
window.onload = updateLastModifiedDate;