function toggleNav() {
    var hemburgmenu = document.getElementById("menu-icon-mobile");
    var closemenu = document.getElementById("cancel-icon");
    var mobnav = document.getElementById("mobileNavLink");
    if (hemburgmenu.classList.contains('d-block')) {
        hemburgmenu.classList.remove('d-block')
        hemburgmenu.classList.add('d-none');
        closemenu.classList.remove('d-none');
        closemenu.classList.add('d-block');
        mobnav.style.left = '0';
        document.body.style.overflow = "hidden";
    } else {
        hemburgmenu.classList.remove('d-none');
        hemburgmenu.classList.add('d-block');
        closemenu.classList.remove('d-block');
        closemenu.classList.add('d-none');
        mobnav.style.left = '-100%';
        document.body.style.overflow = "visible";
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
    // loop: true,
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
        },
    },
});


$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});


var swiper2 = new Swiper(".companyLogoSlider", {
    slidesPerView: 1,
    centeredSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
    clickable: true,
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
var swiper3 = new Swiper(".mySwiper2", {
    thumbs: {
        swiper: swiper2,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

AOS.init({})

function openAvailabilityBox() {
    var productHeight = document.querySelector(".product-type");
    var plus = document.getElementById('AvailabilityPlus');
    var minus = document.getElementById('AvailabilityMinus');
    var checkbox = document.querySelector('.checkboxdiv');
    if (plus.classList.contains('invisible')) {
        plus.classList.remove('invisible');
        plus.classList.add('visible');
        minus.classList.remove('visible');
        minus.classList.add('invisible');
        checkbox.classList.remove('d-block');
        checkbox.classList.add('d-none');
        productHeight.style.transition = "all .3s ease-in-out";
        productHeight.style.overflow = "hidden";
    } else {
        plus.classList.remove('visible');
        plus.classList.add('invisible');
        minus.classList.remove('invisible');
        minus.classList.add('visible');
        checkbox.classList.remove('d-none');
        checkbox.classList.add('d-block');
        checkbox.style.transition = "all 0.1s ease-in-out";
        productHeight.style.maxHeight = "124px";
        productHeight.style.overflow = "visible";
    }
}

function youtube_video() {
    const iframeVideo = document.getElementById("iframe_video");
    iframeVideo.src = "https://www.youtube.com/embed/j97TIrMKx1Q";
    document.body.style.overflow = "hidden";
    document.body.scrollTop;
    $("body").remove('position-static');
    var model = document.getElementById('videoModal');
    var modelContent = document.getElementById('model-content');
    if (screen.width >= 992) {
        modelContent.style.width = (screen.width / 2.4) + 40 + "px";
        modelContent.style.height = (screen.height / 3) + 40 + "px";
    }
    else if (screen.width >= 576) {
        modelContent.style.width = (screen.width) / 1.2 + "px";
        modelContent.style.height = (screen.height / 2.3) + "px";
    }
    else {
        modelContent.style.width = (screen.width - 20) + "px";
        modelContent.style.height = (screen.height / 4.01) + "px";
    }
    model.classList.remove('invisible');
    model.classList.add('visible');
    model.shadowRoot;
}
function closeModal() {
    document.body.style.overflow = "visible";
    const iframeVideo = document.getElementById("iframe_video");
    iframeVideo.src = "";
    $("body").remove('noscroll');
    var model = document.getElementById('videoModal');
    model.classList.remove('visible');
    model.classList.add('invisible');
    model.shadowRoot;
}

function openProductBox() {
    var plus = document.querySelector('#ProductPlus');
    var minus = document.querySelector('#ProductMinus');
    var VarietyOfProduct = document.querySelector('#VarietyOfProduct');
    var checkbox = document.querySelector('#pcheckboxdiv');
    if (plus.classList.contains('visible')) {
        plus.classList.remove('visible');
        plus.classList.add('invisible');
        minus.classList.remove('invisible');
        minus.classList.add('visible');
        checkbox.style.transition = "all .3s ease-in-out";
        checkbox.classList.remove('d-none');
        checkbox.classList.add('d-block');
        VarietyOfProduct.style.overflow="visible";
        VarietyOfProduct.style.transition = "all .3s ease-in-out";
      
    } else {
        plus.classList.remove('invisible');
        plus.classList.add('visible');
        minus.classList.remove('visible');
        minus.classList.add('invisible');
        checkbox.style.transition = "all .1s ease-in-out";
        checkbox.classList.remove('d-block');
        checkbox.classList.add('d-none');
        VarietyOfProduct.style.overflow="hidden";
        VarietyOfProduct.style.transition = "all .3s ease-in-out";
    }
}
function openColor() {
    var plus = document.querySelector('#ColorPlus');
    var minus = document.querySelector('#ColorMinus');
    var Productcolor = document.querySelector('#Productcolor');
    var checkbox = document.querySelector('.RadioButtondiv');
    if (plus.classList.contains('visible')) {
        plus.classList.remove('visible');
        plus.classList.add('invisible');
        minus.classList.remove('invisible');
        minus.classList.add('visible');
        checkbox.style.transition = "all .3s ease-in-out";
        checkbox.classList.remove('d-none');
        checkbox.classList.add('d-block');
        Productcolor.style.overflow="visible";
        Productcolor.style.transition = "all .3s ease-in-out";

    } else {
        plus.classList.remove('invisible');
        plus.classList.add('visible');
        minus.classList.remove('visible');
        minus.classList.add('invisible');
        checkbox.style.transition = "all .1s ease-in-out";
        checkbox.classList.remove('d-block');
        checkbox.classList.add('d-none');
        Productcolor.style.overflow="hidden";
        Productcolor.style.transition = "all .3s ease-in-out";
    }
}

function brandCollection() {
    var mob_filter = document.querySelector('.mobile_filter');
    var close_icon = document.querySelector('#close-icon-filter');
    var clear_op = document.querySelector('#clear-option');
    var filterRow = document.querySelector('.filter-row');
    var clearFilter = document.querySelector('#clearfilter');
    var filtermenu = document.querySelector('#filter-menu');
    var desktopdisplay = document.querySelector('#desktop-display');
    var resultData = document.querySelector('#resultData');
    var filtericon = document.querySelector('#filter-Icon');
    if (mob_filter.classList.contains('position-absolute')) {
    } else {
        mob_filter.classList.add('position-absolute');
        mob_filter.style.zIndex = "9999";
        mob_filter.style.top = "0";
        mob_filter.style.backgroundColor = "white";
        mob_filter.style.height = "100vh";
        mob_filter.style.overflow = "hidden";
        filterRow.classList.remove('border');
        filterRow.classList.remove('border-dark');
        filterRow.style.backgroundColor = "#8DB9CA";
        clearFilter.style.color = "white";
        filtermenu.style.color = "white";
        close_icon.classList.remove('invisible');
        filterRow.classList.add('mx-1');
        filterRow.classList.remove('mx-1');
        close_icon.classList.add('visible');
        clear_op.classList.remove('invisible');
        clear_op.classList.add('visible');
        desktopdisplay.classList.remove('d-none');
        desktopdisplay.classList.add('d-block');
        desktopdisplay.classList.add('position-absolute');
        desktopdisplay.style.top = "63px";
        desktopdisplay.style.zIndex = "9999";
        document.body.style.overflow = "hidden";
        resultData.classList.add('d-none');
        filtericon.classList.add('d-none');
    }
}

function brandCollectionClose() {
    var mob_filter = document.querySelector('.mobile_filter');
    var close_icon = document.querySelector('#close-icon-filter');
    var clear_op = document.querySelector('#clear-option');
    var filterRow = document.querySelector('.filter-row');
    var filtermenu = document.querySelector('#filter-menu');
    var desktopBlock = document.querySelector('#desktop-display');
    var resultData = document.querySelector('#resultData');
    var filtericon = document.querySelector('#filter-Icon');
    if (mob_filter.classList.contains('position-absolute')) {
        mob_filter.classList.add('position-static');
        mob_filter.style.zIndex = "9999";
        mob_filter.style.top = "auto";
        mob_filter.style.backgroundColor = "trasparent";
        mob_filter.style.height = "auto";
        mob_filter.style.overflow = "visible";
        filterRow.classList.add('border');
        filterRow.classList.add('border-dark');
        filterRow.style.backgroundColor = "white";
        filtermenu.style.color = "black";
        close_icon.classList.remove('visible');
        close_icon.classList.add('invisible');
        clear_op.classList.remove('visible');
        clear_op.classList.add('invisible');
        desktopBlock.classList.remove('d-block');
        desktopBlock.classList.add('d-none');
        desktopBlock.classList.add('position-static');
        desktopBlock.style.top = "63px";
        desktopBlock.style.zIndex = "9999";
        document.body.style.overflow = "visible";
        resultData.classList.add('d-block');
        filtericon.classList.remove('d-none')
        filtericon.classList.add('d-block');
        filterRow.classList.remove('mx-1');
        filterRow.classList.add('mx-1');
    }
}













