if (window.innerWidth <= 900) {
  $('.equipment__items').slick({
    slidesToShow: 5,
    infinite: false,
    touchThreshold: 30,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });
}
if (window.innerWidth <= 991) {
  $('.benefits__items').slick({
    slidesToShow: 5,
    infinite: false,
    touchThreshold: 30,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });
}


window.addEventListener("click", (event) => {
  if (event.target.classList.contains('catalog__item-btn')) {
    const parent = event.target.closest('.catalog__item');
    parent.querySelector('.item-form').style.display = "block";
  }
  else if (event.target.classList.contains('item-form__btn')) {
    const parent = event.target.closest('.catalog__item');
    parent.querySelector('.item-form').style.display = "none";
  }
  else if (event.target.closest('.form-closer')) {
    const parent = event.target.closest('.catalog__item');
    parent.querySelector('.item-form').style.display = "none";
  }
});


window.addEventListener("scroll", (event) => {
  if (window.pageYOffset > 95) {
    document.querySelector('.header-top').style.backgroundColor = "rgba(1, 1, 1, 1)";
  }
  else if (window.pageYOffset < 95) {
    document.querySelector('.header-top').style.backgroundColor = "rgba(1, 1, 1, 0.7)";
  }
});


if (window.innerWidth <= 1300) {
  let toggler = false;
  window.addEventListener("click", (event) => {
    if (event.target.closest('.catalog__item')) {
      if (toggler == false) {
        const parent = event.target.closest('.catalog__item');
        parent.querySelector(".catalog__btn-box").style.opacity = "1";
        parent.querySelector(".catalog__item-btn").style.transform = "translateY(0px)";
        toggler = true;
      }
      else {
        const parent = event.target.closest('.catalog__item');
        parent.querySelector(".catalog__btn-box").style.opacity = "0";
        parent.querySelector(".catalog__item-btn").style.transform = "translateY(350px)";
        toggler = false;
      }
    }
  });
}