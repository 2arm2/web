$(document).ready(function() {

	//타이틀 변경
	var getTitle = $('.title h3').text();
	document.title = getTitle + ' | 앎';
	
	//메뉴 고정
	var goFixed = 1;
	$(window).scroll(function () {
		if ( $(this).scrollTop() > goFixed ) {
			$('#header').addClass('fixed');
			$('.lnb_wrap').find('li').addClass('on');
		} else {
			$('#header').removeClass('fixed');
			$('.lnb_wrap').find('li').removeClass('on');
		}
	});

	//햄버거메뉴
	$('.m_lnb_wrap').find(' > button').click(function() {
		$('.m_lnb, html').addClass('open');
		window.location.hash = '#open';
	});
	window.onhashchange = function() {
		if (location.hash != '#open') {
			$('.m_lnb, html').removeClass('open');
		}
	};

	//top버튼 클릭, 최상단으로 이동
	$('.go_top').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.go_top').fadeIn();
        } else {
            $('.go_top').fadeOut();
        }
    });
    $('.go_top').on('click', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 100);
        return false;
    });
	
	//팝업 닫기
	$('#popup').find('button').on('click', function() {
		$('#popup').hide();
	});

	//메인 슬라이드
	$('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        menu: '#menu',
		afterLoad: function(anchorLink, index) {
			var loadedSection = $(this);
			$('#section0,#section1,#section2,#section3').removeClass('on');
			if(index <= 4){
				$('#section'+(index-1)).addClass('on');
			} else {
				$('#section3').addClass('on');
			}
		}
    });
	
	//메인 슬라이드 스크롤다운 애니메이션
	function swing() {
		$('.section').find('span').animate({'bottom':'70px'},600).animate({'bottom':'60px'},600, swing);
    }
    swing();

	//사업분야 기타 디자인 더보기
	$('.etc_design').find(' > a').on('click', function() {
		$('.etc_design_more, html').addClass('open');
	});
	$('.etc_design').find('button').on('click', function() {
		$('.etc_design_more, html').removeClass('open');
	});
	$('.etc_design_more').find('li').on('click', function() {
		$(this).addClass('on').siblings().removeClass('on');
	});

	//신용평가 애니메이션
	function swing2() {
		$('.credit').find('img').animate({'top':'-90px'},600).animate({'top':'-100px'},600, swing2);
    }
    swing2();

	//홍보센터 슬라이드
	var mySwiper2 = new Swiper('.swiper-container', {
		keyboardControl: true,
		pagination: '.swiper-pagination',
		paginationClickable: true,
		slidesPerView: 'auto',
		loop: true,
		loopedSlides: 3,
		loopAdditionalSlides: 3,
		centeredSlides: true
	});

});