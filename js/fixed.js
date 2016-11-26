// var aside = $("aside");
// var container = $(".container");
//
// container.on("scroll", function(e) {
//
//   if (container.scrollTop > 204) {
//     container.addClass("fix-aside");
//   } else {
//     container.removeClass("fix-aside");
//   }
//
// });

$(function () {
    var sidebar = $('aside');
    var main = $('main');
    var winwidth = $(window).width();
    var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));

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
