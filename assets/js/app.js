$(document).ready(function () {
  $('.popup-youtube').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>',

      patterns: {
        youtube: {
          index: 'youtube.com/',

          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },

      },

      srcAction: 'iframe_src',
    }
  });

  $(".grid-container").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  })

  $('.tm-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    cssEase: 'linear',
    arrows: true,
    responsive: [{
      breakpoint: 600,
      settings: {
        arrows: false,
      }
    },]
  });


});

// add acive class to nav-link

const navLinks = document.querySelectorAll(".nav-item > .nav-link");

navLinks.forEach(navlink => {
  navlink.addEventListener("click", function () {
    navLinks.forEach(navlink => navlink.classList.remove("active"));
    this.classList.add("active");
  })
})

// on scroll  increase numbers

const offerSection = document.querySelector(".offer");
const offerBlocks = document.querySelectorAll(".offer .block-text>h3");
const scrollToTop = document.querySelector(".scrollUp");


window.addEventListener("scroll", function () {

  if (window.scrollY > 200) {

    scrollToTop.style.right = 25 + "px";
    scrollToTop.style.opacity = 1;

  } else {

    scrollToTop.style.right = -100 + "px";
    scrollToTop.style.opacity = 0;
  }

  if (window.scrollY >= offerSection.offsetHeight) {

    offerBlocks.forEach(block => {

      const maxVal = block.dataset.maxVal;
      let txtContent = block.textContent;

      let interval = setInterval(() => {

        if (txtContent >= maxVal) {

          clearInterval(interval);

        } else {

          block.textContent = ++txtContent;

        }

      }, 50);

    })

  }

})


// toggle opened class on menu toggler

const navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener("click", function () {

  this.classList.toggle("opened");
})