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




var swiper = new Swiper('.mySwiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 'auto',
    spaceBetween: 12,
    slidesOffsetBefore: 30,
    breakpoints: {
        576: {
            slidesOffsetBefore: 0,
            slidesPerView: 2,
        },
        768: {
            slidesOffsetBefore: 0,
            slidesPerView: 2,
        },
        992: {
            slidesOffsetBefore: 0,
            spaceBetween: 30,
            slidesPerView: 3,
        },
        1200: {
            slidesOffsetBefore: 0,
            spaceBetween: 30,
            slidesPerView: 4
        },
    },

});



var swiper = new Swiper(".ImageSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    grid: {
        rows: 2,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1200: {
            centeredSlides: false,
            slidesPerView: 4.70,
            grid: {
                rows: 1,
            },
        },
        992: {
            grid: {
                rows: 1,
            },
        }
    },
});


const shopLink = document.getElementById("shop-link");
const megaMenu = document.getElementById("megamenu");

// Create a variable to track whether the mouse is currently over the mega menu
let megaMenuHovered = false;

// Function to open the mega menu
function openMegaMenu() {
    megaMenu.style.display = "block";
    shopLink.querySelector(".aero").style.transform = "rotate(180deg)";
}

// Function to close the mega menu
function closeMegaMenu() {
    megaMenu.style.display = "none";
    shopLink.querySelector(".aero").style.transform = "rotate(0deg)";
}

shopLink.addEventListener("mouseenter", () => {
    openMegaMenu();
});

shopLink.addEventListener("mouseleave", () => {
    if (!megaMenuHovered) {
        closeMegaMenu();
    }
});

megaMenu.addEventListener("mouseenter", () => {
    megaMenuHovered = true;
    openMegaMenu();
});

megaMenu.addEventListener("mouseleave", () => {
    megaMenuHovered = false;
    closeMegaMenu();
});


var swiper = new Swiper(".LogoSlider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            centeredSlides: false,
            slidesPerView: 2,
        },
        768: {
            centeredSlides: false,
            slidesPerView: 2,
        },
        992: {
            centeredSlides: false,
            slidesPerView: 3,
        },
        1200: {
            centeredSlides: false,
            slidesPerView: 5,
        },
    },
});

AOS.init({})











