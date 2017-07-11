$(document).ready(function() {
  $('a[data-rel^=lightcase]').lightcase({
    showCaption: false,
    showSequenceInfo: false,
    showTitle: true
  });

  $("#menu, .menu_footer").on("click","a", function (event) {
    event.preventDefault();

    $("#menu li").each(function () {
      var x = this;
        if($(x).hasClass('active')) {
          $(x).removeClass('active')
        }
    });

    $(this).parent().addClass('active')

    var id  = $(this).attr('href'),
        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top-120}, 500);
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 1000) {
      $('#top').fadeIn();
    } else {
      $('#top').fadeOut();
    }
  });


  $('#top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });

    //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  });

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
      $(document).on('click', 'a.page-scroll', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 500, 'easeInOutExpo');
          event.preventDefault();
      });
  });


});