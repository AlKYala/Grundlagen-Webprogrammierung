
function updateLastModifiedDate() {
    var lastModified = document.lastModified;
    if(!lastModified) {
        return;
    }
    document.getElementById("lastModified").innerText = "Definition zuletzt geaendert am: " + lastModified;
}



window.onload = updateLastModifiedDate;