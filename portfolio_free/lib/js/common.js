$(document).ready(function() {
	
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

	//햄버거메뉴 마우스오버 이벤트
	$('#header .m_lnb').find('li').on('mouseover', function() {
		$(this).addClass('on').siblings().removeClass('on');
	});

	$('#header .m_lnb').find('li').on('mouseleave', function() {
		$(this).removeClass('on');
	});

	//메인 슬라이드
	$('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', 'lastPage'],
        menu: '#menu',
		afterLoad: function(anchorLink, index) {
			var loadedSection = $(this);
			$('.section').removeClass('on');
			if(index <= 7){
				$('#section'+(index-1)).addClass('on');
			}
		}
    });

});