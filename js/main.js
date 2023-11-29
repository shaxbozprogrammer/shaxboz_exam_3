$(document).ready(function(){
    $(".owl-carousel").owlCarousel({   
       margin: 20,
      nav: true,
      navText: ["<img src='/assets/images/left.svg'/>", "<img src='/assets/images/right.svg'/>"],
      loop: true,
      responsive: {
        0: {
          items: 1,
          dots: false,
        },
        600: {
          items: 2,
          margin: 30,
        },
        1000: {
          items: 3,
        },
        1200: {
          items: 4,
          innerHeight:50,
        },
      },

    });
  });
  $('#owl-carousel2').owlCarousel({
    loop:true,
    margin:100,
    nav:true,
    navText: ["<img src='/images/left.svg'/>", "<img src='../../images/right.svg'/>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('#owl-demo-img').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<img src='/assets/images/left.svg'/>", "<img src='/assets/images/right.svg'/>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('#owl-demo-ins').owlCarousel({
    loop:true,
    margin:35,
    nav:true,
    navText: ["<img src='../../images/left.svg'/>", "<img src='../../images/right.svg'/>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

window.addEventListener("scroll", function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      backtop.classList.add('backtop-show')
    } else {
      backtop.classList.remove('backtop-show')
    }
  }
  const loading = document.getElementById("loading");

  const loadingDuration = 1000; // 1s
  
  setTimeout(() => {
    loading.classList.add('loading-none');
  }, loadingDuration);

  window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (scrollY > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
      navbar.classList.remove("navbar-shrink");
    }
  }