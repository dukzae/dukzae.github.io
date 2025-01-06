var button = document.getElementById("py-button");

button.onclick = function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "py-script.py", true);

    xhr.send();
}