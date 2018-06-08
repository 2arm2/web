$(document).ready(function() {

	//메뉴 마우스오버 이벤트
	$('#header .sub').hide();
	$('.header').find('> ul > li').on('keyup mouseenter focusin', function() {
		$('.sub').show();
		$(this).addClass('on').siblings().removeClass('on');
		$('#header').css({'height':'233', 'border-bottom':'1px solid #a68961'});
	});
	$('.header').find('> ul').on('keydown mouseleave focusout', function() {
		$('.sub').hide();
		$('.header').find('> ul > li').removeClass('on');
		$('#header').css({'height':'80', 'border-bottom':'0'});
	});

	//메인 비주얼 슬라이드 배너
	var mySwiper = new Swiper('.swiper-container', {
		keyboardControl: true,
		pagination: '.main_slides_pagination',
		paginationClickable: true,
		loop: true,
		autoplay: 4000
	});

	//메인 커뮤니티 외 클릭 이벤트
	$('.info_board').find('> div > ul > li').on('click', function() {
		$(this).addClass('on').siblings().removeClass('on');
	});

	//메인 취업행사일정 슬라이드 배너
	var mySwiper2 = new Swiper('.swiper-container2', {
		keyboardControl: true,
		slidesPerView: 'auto',
		loop: true,
		loopedSlides: 4,
		loopAdditionalSlides: 4,
		autoplay: 4000
	});
	$('.swipe_prev').on('click', function() {
		mySwiper2.swipePrev();
	});
	$('.swipe_next').on('click', function() {
		mySwiper2.swipeNext();
	});
	$('.swipe_stopPlay').on('click', function() {
		if($(this).hasClass('on')) {
			$(this).removeClass('on').addClass('off');
			mySwiper2.stopAutoplay();
		} else {
			$(this).removeClass('off').addClass('on');
			mySwiper2.startAutoplay();
		}
		return false;
	});

	//메인 관련사이트 슬라이드 배너
	var mySwiper3 = new Swiper('.swiper-container3', {
		keyboardControl: true,
		slidesPerView: 'auto',
		loop: true,
		loopedSlides: 5,
		loopAdditionalSlides: 5,
		autoplay: 4000
	});
	$('.site_prev').on('click', function() {
		mySwiper3.swipePrev();
	});
	$('.site_next').on('click', function() {
		mySwiper3.swipeNext();
	});

});