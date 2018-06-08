$(document).ready(function() {

	//메뉴 이벤트
	$('#mokwonHeader').find('.gnb_wrap > ul > li').on('keyup mouseenter focusin', function() {
		$('#mokwonHeader').find('.sub').stop().slideDown('fast');
		$(this).addClass('on').siblings().removeClass('on');
	});
	$('#mokwonHeader').find('.gnb_wrap > ul > li').on('keydown mouseleave focusout', function() {
		$('#mokwonHeader').find('.sub').stop().slideUp('fast');
		$(this).removeClass('on');
	});

	//메인 슬라이드 배너
	var mySwiper = new Swiper('.swiper-container', {
		keyboardControl: true,
		pagination: '.main_slides_pagination',
		paginationClickable: true,
		loop: true,
		autoplay: 4000
	});
});