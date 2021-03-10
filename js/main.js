$(document).ready(function(){
  $('.slider').slick({
    slidesToShow:1,
    infinite:true,
    autoplay:false,
    pauseOnFocus:true,
    pauseOnHover:true,
    swipe:true,
    TouchMove:true,
    arrows:true,
    responsive:[
      {
        breakpoint: 1250,
        settings:{
          slidesToShow:1,
          arrows:false,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }, {
        breakpoint: 922,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }, {
        breakpoint: 480,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }
    ]
  });
});


$(document).ready(function(){
  $('.evtns-slider').slick({
    slidesToShow:3,
    infinite:true,
    autoplay:false,
    pauseOnFocus:true,
    pauseOnHover:true,
    swipe:true,
    TouchMove:true,
    arrows:true,
    responsive:[
      {
        breakpoint: 1250,
        settings:{
          slidesToShow:2,
          arrows:false,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }, {
        breakpoint: 922,
        settings:{
          slidesToShow:2,
          arrows:false,
          autoplay:true
        }
      }, {
        breakpoint: 480,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }
    ]
  });
});


$(document).ready(function(){
  $('.galley').slick({
    slidesToShow:1,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    pauseOnHover:true,
    swipe:true,
    TouchMove:true,
    arrows:false,
    responsive:[
      {
        breakpoint: 1250,
        settings:{
          slidesToShow:1,
          arrows:false,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }, {
        breakpoint: 922,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }, {
        breakpoint: 480,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }
    ]
  });
});

$(document).ready(function(){
  $('.news-slider').slick({
    slidesToShow:2,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    pauseOnHover:true,
    swipe:true,
    TouchMove:true,
    arrows:true,
    responsive:[
      {
        breakpoint: 1250,
        settings:{
          slidesToShow:2,
          arrows:false,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }, {
        breakpoint: 997,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }, {
        breakpoint: 480,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }
    ]
  });
});


$(document).ready(function(){
  $('.feedback-slider').slick({
    slidesToShow:1,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    pauseOnHover:true,
    swipe:true,
    TouchMove:true,
    arrows:true,
    responsive:[
      {
        breakpoint: 1250,
        settings:{
          slidesToShow:1,
          arrows:false,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }, {
        breakpoint: 922,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }, {
        breakpoint: 480,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }
    ]
  });
});

$(document).ready(function(){
  $('.sponsor-slider').slick({
    slidesToShow:5,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    pauseOnHover:true,
    swipe:true,
    TouchMove:true,
    arrows:true,
    responsive:[
      {
        breakpoint: 1250,
        settings:{
          slidesToShow:5,
          arrows:false,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow:3,
          arrows:false,
          autoplay:true
        }
      }, {
        breakpoint: 922,
        settings:{
          slidesToShow:3,
          arrows:false,
          autoplay:true
        }
      }, {
        breakpoint: 480,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }
    ]
  });
});


$(document).ready(function(){
  $('.message-slider').slick({
    slidesToShow:1,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    pauseOnHover:true,
    swipe:true,
    TouchMove:true,
    arrows:true,
    responsive:[
      {
        breakpoint: 1250,
        settings:{
          slidesToShow:1,
          arrows:false,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }, {
        breakpoint: 922,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }, {
        breakpoint: 480,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }
    ]
  });
});


$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $(this).toggleClass('open')
  });
});

$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $('nav').toggleClass('active')
  });
});

$(document).ready(function() {
  $('.drop').click(function(evt){
    evt.preventDefault();
    $('.drop-menu').slideToggle(300);
    $(this).toggleClass('close')
  });
});

VanillaTilt.init(document.querySelectorAll(".tickets-card"), {
  max: 25,
  speed: 400
});

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  $(window).on("scroll",function(){
if($(window).scrollTop()){
$('header').addClass('black-menu');
}
else {
$('header').removeClass('black-menu');
}
})

$(window).scroll(function() {
    $('.scroll-item').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + $(window).innerHeight()) {
            $(this).addClass("animated")
        }
         });
    });
