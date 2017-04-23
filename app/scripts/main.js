/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 20,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4.5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "buble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

$(document).ready(function () {
    $('#moveDown').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 0
        }, 1200)
        ;
        event.preventDefault();
        return false;
    });
    $('#moveUp').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 0
        }, 1200)
        ;
        event.preventDefault();
        return false;
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var welcome = $('#welcome').height();
        if (scroll >= welcome) {
            $('nav').addClass('header-fixed', 600);
        }
        else {
            $('nav').removeClass('header-fixed', 600);
        }
    });



    $(window).on('scroll', function () {
        var logo = $('.profile');
        var range = 300;
        var scrollTop = $(this).scrollTop();
        var offset = profile.offset().top;
        var height = profile.outerHeight();
        offset = offset + height / 2;
        var calc = 1 - (scrollTop - offset + range) / range;

        profile.css({ 'opacity': calc });

        if ( calc > '1' ) {
            profile.css({ 'opacity': 1 });
        } else if ( calc < '0' ) {
            profile.css({ 'opacity': 0 });
        }

    });

    $('span.glyphicon-align-justify').click(function () {
        event.preventDefault();
        $('nav.mobile').show(300);


         $('span.glyphicon-align-justify').hide(300);
    });

    $('span.glyphicon-remove').click(function () {
        event.preventDefault();
        $('nav.mobile').hide(300);
        $('span.glyphicon-align-justify').show(300);
     });

    $('nav.mobile a').click(function () {
        event.preventDefault();
        $('nav.mobile').hide(300);
        $('span.glyphicon-align-justify').show(300);
    });


});

