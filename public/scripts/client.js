$(document).ready(function() {
  //scroll function - paralax
  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    $('.wrapper').css({
      'transform': 'translate(0px, -' + wScroll / 2 + '%)'
    }); //end wrapper listener

    //display link images
    if (wScroll > $('#links').offset().top - $(window).height() / 1.1) {

      $('.link').each(function(i) {
        setTimeout(function() {
          $('.link').eq(i).addClass('reveal');
        }, 75 * (i + 1));
      });

    }
  }); //end scroll function
}); //end document ready
