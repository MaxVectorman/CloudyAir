jQuery(document).ready(function() {


/*
Switch #1
(function($) {
$('button').on('click',function(e) {
if ($(this).hasClass('grid')) {
$('#container ul').removeClass('list').addClass('grid');
}
else if($(this).hasClass('list')) {
$('#container ul').removeClass('grid').addClass('list');
}
});
})(jQuery);
*/


$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 8
});



}); //Конец ready




