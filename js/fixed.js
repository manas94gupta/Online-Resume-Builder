// This code makes the <aside> fixed on scroll once its distance from top is 0px
// since <aside>'s position is made fixed I have added margin-left to main equal
// to width of <aside> for all media queries.

$(function () {
    var sidebar = $('aside');
    var main = $('main');
    var winwidth = $(window).width();
    var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));

    // for screen width more than 1023px
    if(winwidth > 1023) {
        $(window).scroll(function (event) {
          var y = $(this).scrollTop();
          if (y >= top) {
            sidebar.addClass('fixed');
            main.addClass('main-left');
          } else {
            sidebar.removeClass('fixed');
            main.removeClass('main-left');
          }
        });
    }

    // for screen width between 850px and 1024px
    if(winwidth > 849 && winwidth < 1024) {
        $(window).scroll(function (event) {
          var y = $(this).scrollTop();
          if (y >= top) {
            sidebar.addClass('fixed');
            main.addClass('main-left1');
          } else {
            sidebar.removeClass('fixed');
            main.removeClass('main-left1');
          }
        });
    }

    // for screen width between 700px and 850px
    if(winwidth > 699 && winwidth < 850) {
        $(window).scroll(function (event) {
          var y = $(this).scrollTop();
          if (y >= top) {
            sidebar.addClass('fixed');
            main.addClass('main-left2');
          } else {
            sidebar.removeClass('fixed');
            main.removeClass('main-left2');
          }
        });
    }
});
