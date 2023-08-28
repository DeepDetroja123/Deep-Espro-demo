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
    loop: true,
    navigation: {
      nextEl: '.swiper-button-n',
      prevEl: '.swiper-button-p',
    },
    slidesPerView: 1.2,
    slidesOffsetBefore: 15,
    breakpoints: {
      576: {
          slidesPerView: 2,
          slidesOffsetBefore: 0,
      },
      768: {
          slidesPerView: 2,
          slidesOffsetBefore: 0,
      },
      992: {
          spaceBetween:30,
          slidesPerView: 3,
          slidesOffsetBefore: 0,
      },
      1200: {
          spaceBetween:30,
          slidesPerView: 4,
          slidesOffsetBefore: 0,
      }
  }



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






