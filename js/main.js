var current = 'homePage';
var isOpen = 0;

window.onload = function () {
    var a = $(window).height();
    var b = (document.getElementById('mytopBar').offsetHeight);
    var c = a - b;
    var c = c + "px";
    document.getElementById("myContentArea").style.height = c;
};


function openNav() {
    console.log("openNav()");
    isOpen = 1;
    document.getElementById("myTopnav").style.width = "250px";
}


function navSwitch() {
    console.log(isOpen);
    if (isOpen == 0) {
        openNav();
    } else {
        closeNav();
    }
}


function closeNav() {
    console.log("closeNav()");
    isOpen = 0;
    document.getElementById("myTopnav").style.width = "0px";
}

function show(shown) {
    isOpen = 0;
    console.log("show()" + shown);

    document.getElementById("myTopnav").style.width = "0";

    document.getElementById(shown).style.display = 'block';

    if (current && current != shown) {
        document.getElementById(current).style.display = 'none';
    }
    current = shown;

}
