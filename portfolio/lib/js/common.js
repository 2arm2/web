$(function() {
	
	// scroll smooth
  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    $('.intro_wrap li').removeClass('on');
    
    var position = $($(this).attr('href')).offset().top;
    $('body, html').animate({
      scrollTop: position + 1
    } /* speed */ );
	});

	// list view
	$('.contents').click(function(e) {
    e.preventDefault();

    $(this).parents('li').toggleClass('on').siblings().removeClass('on');

    var idx = $(this).parents('.work_wrap').index() - 1;
    $('.intro_wrap li').eq(idx).addClass('on').siblings().removeClass('on');

    // scroll smooth
    var position = $(this).offset().top;
    $('body, html').animate({
      scrollTop: position + 1
    } /* speed */ );
  });
	
});