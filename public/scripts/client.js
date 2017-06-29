$(document).ready(function() {

  //scroll function - paralax
  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    $('.wrapper').css({
      'transform': 'translate(0px, -' + wScroll / 4 + '%)'
    }); //end wrapper listener

    //display link images
    if (wScroll > $('#links').offset().top - $(window).height() / 1.1) {
      //loop through images on homepage
      $('.link').each(function(i) {
        setTimeout(function() {
          $('.link').eq(i).addClass('reveal');
        }, 75 * (i + 1));
      }); //end image loop
    } //end fade in link images

    //fade in coffee logo
    if (wScroll > $('.coffee').offset().top - $(window).height() / 1.1) {
      $('.coffee').addClass('reveal');
      console.log('coffee hit');
    } //end coffee fade function
  }); //end scroll function

}); //end document ready
