function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu_drop") {
        x.className += " responsive";
    } else {
        x.className = "menu_drop";
    }
}