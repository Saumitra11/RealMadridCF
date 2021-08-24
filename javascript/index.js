var home = document.querySelector(".home");
var away = document.querySelector(".away");
function jerseySwitch(){
    let value = home.getAttribute("display");
    if(value == "none"){
        home.setAttribute("display", "block");
    } else {
        away.setAttribute("display", "block");
    }
}
setInterval(5000, jerseySwitch());