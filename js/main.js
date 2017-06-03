$(document).ready(function() {
$("a.scroll-to").on('click', function(){
  var scrollTo = $(this).attr('data-scroll-to');

  $('body, html').animate({

    "scrollTop": $("#"+scrollTo).offset().top-20
  }, 1000 );
  return false;
});
});
