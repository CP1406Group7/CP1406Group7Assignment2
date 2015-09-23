// JavaScript Document
function LnameEntered(name) {
 	if (name.value != "") {
        document.Order.LnameTick.src = "Images/tick.png";
        document.Order.LnameTick.alt = "tick";
    }
    else {
        document.Order.LnameTick.src = "Images/cross.png";
        document.Order.LnameTick.alt = "cross";
    }
}
function FnameEntered(name) {
 	if (name.value != "") {
        document.Order.FnameTick.src = "Images/tick.png";
        document.Order.FnameTick.alt = "tick";
    }
    else {
        document.Order.FnameTick.src = "Images/cross.png";
        document.Order.FnameTick.alt = "cross";
    }
}
function setColourBasedOnLength(name, minValue) {
    var f = document.getElementById(name);
    if (f.value.length >= minValue)
        f.style.color = "#0C0";
    else
        f.style.color = "#C00";

    f.size = f.value.length + 1;
    f.style.width = "auto";
}