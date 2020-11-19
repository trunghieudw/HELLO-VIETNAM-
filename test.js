function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " reponsive";
    } else {
        x.className = "topnav";
    }
}