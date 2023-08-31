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
    spaceBetween:12,
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
            slidesPerView: 2,
        },
        1200: {
            slidesOffsetBefore: 0,
            spaceBetween: 30,
            slidesPerView: 4
        },
    },

  });

  const shopLink = document.getElementById("shop-link");
  const megaMenu = document.getElementById("megamenu");
  
  shopLink.addEventListener("mouseover", () => {
      megaMenu.style.display = "block";
    });
  
    megaMenu.addEventListener("mouseover", () => {
      megaMenu.style.display = "block"; 
    });
  
    shopLink.addEventListener("mouseout", () => {
      megaMenu.style.display = "none"; 
    });
  
    megaMenu.addEventListener("mouseout", () => {
      megaMenu.style.display = "none"; 
    });



var swiper1 = new Swiper(".ImageSwiper", {
            slidesPerView: "auto",
            spaceBetween: 30,
            loop:true,
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
                992:{
                    grid: {
                        rows: 1,
                    },
                }
            },
        });





