$(document).ready(function() {

	//메뉴 클릭 이벤트
	$('#menu').find('> ul > li').on('click', function() {
		$(this).find('.sub').slideToggle('fast', function() {
			$(this).parent().toggleClass('on', $(this).is(':visible'));
		});
	});

	//메뉴 길이
	if ( $('#menu').height() < $('#contents').height() ) {
		$('#menu').height( $('#contents').height() );
	};
	
	//공지사항 뷰옵션
	$('.view_option').find('button').on('click', function() {
		$(this).addClass('on').siblings().removeClass('on');
	});

	//공지사항 셀렉트박스
	var selectTarget = $('.select_box select');
	selectTarget.on('focus', function() {
		$(this).parent().addClass('focus');
	});
	selectTarget.on('blur', function() {
		$(this).parent().removeClass('focus');
	});
	selectTarget.change(function() {
		var select_name = $(this).children('option:selected').text();
		$(this).siblings('label').text(select_name);
	});

	//공지사항 팝업창 미리보기 닫기
	$('.popup_wrap').find('.popup_closed button').on('click', function() {
		window.open('about:blank', '_self').close();
	});

	//최상단으로 이동
	$('#footer button').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#footer button').fadeIn();
        } else {
            $('#footer button').fadeOut();
        }
    });
    $('#footer button').on('click', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 100);
        return false;
    });

});