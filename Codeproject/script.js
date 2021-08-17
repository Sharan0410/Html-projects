$(document).ready(function () {

  
  $('.btn').click(function () {
    $('.nav-links').slideToggle(3000);
    $('.btn').toggleClass('change');

  })
  

  $(window).scroll(function () {

    let position = $(window).scrollTop();


    if (position >= 100) {
      $('nav, nav-container').addClass('navBackground')
    } else {
      $('nav, nav-container').removeClass('navBackground')

    }

  })
 

  $('.nav-links a').click(function (link) {
    link.preventDefault();

    let target = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 3000);

  })
  
  $('.team-center').owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 4000,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })

  $('.customers-center').owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 4000,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  })

})
