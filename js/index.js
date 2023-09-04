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


$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
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


function youtube_video() {
    const iframeVideo = document.getElementById("iframe_video");
    iframeVideo.src="https://www.youtube.com/embed/j97TIrMKx1Q";
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
    console.log('ok');
}
function closeModal() {
    document.body.style.overflow = "visible";
    const iframeVideo = document.getElementById("iframe_video");
    iframeVideo.src="";
    $("body").remove('noscroll');
    var model = document.getElementById('videoModal');
    model.classList.remove('visible');
    model.classList.add('invisible');
    model.shadowRoot;
    console.log('ok');
}

function openBox() {
    var h = document.querySelector(".product-type");
    var plus = document.getElementById('plussign');
    var minus = document.getElementById('minussign');
    var checkbox=document.querySelector('.checkboxdiv');
    if (plus.classList.contains('invisible')) {
        // Code to close the box
        plus.classList.remove('invisible');
        plus.classList.add('visible');
        minus.classList.remove('visible');
        minus.classList.add('invisible');
        checkbox.style.transform="translateY(74px)";
        h.style.transition = "all .3s ease-in-out";
        h.style.maxHeight = "50px";
        h.style.overflow = "hidden";
    } else {
        // Code to open the box
        plus.classList.remove('visible');
        plus.classList.add('invisible');
        minus.classList.remove('invisible');
        minus.classList.add('visible');
        checkbox.style.transform="translateY(0px)";
        // h.style.transition = "all .3s ease-in-out";
        checkbox.style.transition = "all 0.3s ease-in-out";
        h.style.maxHeight = "124px";
        h.style.overflow = "visible";
    }
}

function openProductBox() {
    var pcheckboxdiv = document.getElementById("pcheckboxdiv");
    pcheckboxdiv.classList.toggle("invisible");
}










