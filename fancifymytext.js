function biggerFont() {
    document.getElementById("text1").style.fontSize = "24px";
}
function upperCase() {
    document.getElementById("text1").style["text-transform"] = "uppercase";
    document.getElementById("text1").value += "-Moo";
}

function fancyText() {
    document.getElementById("text1").style.fontWeight = "bold";
    document.getElementById("text1").style.color = "blue";
    document.getElementById("text1").style["text-decoration"] = "underline";
}

function boringText() {
    document.getElementById("text1").style.fontWeight = "normal";
    document.getElementById("text1").style["text-decoration"] = "none";
    document.getElementById("text1").style.color = "black";
}