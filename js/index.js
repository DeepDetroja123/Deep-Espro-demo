function toggleNav() {
    var hemburgmenu = document.getElementById("menu-icon-mobile");
    var closemenu = document.getElementById("cancel-icon");
    var mobnav = document.getElementById("mobile-nav-link");
    if (hemburgmenu.classList.contains('d-block')) {
        hemburgmenu.classList.remove('d-block')
        hemburgmenu.classList.add('d-none');
        closemenu.classList.remove('d-none');
        closemenu.classList.add('d-block');
        mobnav.style.left = "0";
    } else {
        hemburgmenu.classList.remove('d-none');
        hemburgmenu.classList.add('d-block');
        closemenu.classList.remove('d-block');
        closemenu.classList.add('d-none');
        mobnav.style.left = "-100%";
    }
}







