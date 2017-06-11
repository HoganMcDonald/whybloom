$(document).ready(function() {
  //scroll function - paralax
  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    $('#headerTagline').css({
      'transform': 'translate(-' + wScroll / 4 + '%, 0px)'
    }); //end headerTagline listener
    $('#headerMain').css({
      'transform': 'translate(' + wScroll / 4 + '%, 0px)'
    }); //end headerMain listener
  }); //end scroll function

}); //end document ready
