
/* smooth scroll ----------------------------*/
$(function(){
  $('a[href^="#"]').click(function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

/* globalNav control ----------------------------*/
(function($) {
  $(function() {
    var $header = $('#header');
    $('#navToggle,#globalNav ul li a').click(function(){
      $header.toggleClass('open');
    });
  });
})(jQuery);
