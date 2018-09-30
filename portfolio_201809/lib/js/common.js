$(document).ready(function() {
	
	//메뉴 마우스오버 이벤트
	$('#header').find('ul > li.web_design a').on('keyup mouseenter focusin', function() {
		$(this).parents('#header').removeClass('on_app on_brochure on_logo').addClass('on_web');
	});
	$('#header').find('ul > li.app_design a').on('keyup mouseenter focusin', function() {
		$(this).parents('#header').removeClass('on_web on_brochure on_logo').addClass('on_app');
	});
	$('#header').find('ul > li.brochure_design a').on('keyup mouseenter focusin', function() {
		$(this).parents('#header').removeClass('on_web on_app on_logo').addClass('on_brochure');
	});
	$('#header').find('ul > li.logo_design a').on('keyup mouseenter focusin', function() {
		$(this).parents('#header').removeClass('on_web on_app on_brochure').addClass('on_logo');
	});

	$('#header').find('ul > li a').on('keydown mouseleave focusout', function() {
		$(this).parents('#header').removeClass('on_app on_brochure on_logo').addClass('on_web');
	});

	//메뉴 고정
	var goFixed = 450;
	$(window).scroll(function () {
		if ( $(this).scrollTop() > goFixed ) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	//app디자인 외 클릭 이벤트
	$('.open_popup').find('li').click(function() {
		$(this).find('.detail_view').addClass('open');
		$('html').addClass('open');
		window.location.hash = '#open';
	});
	window.onhashchange = function() {
		if (location.hash != '#open') {
			$('.detail_view, html').removeClass('open');
		}
	};

	//스크롤 부드럽게
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});

	//타이핑
	autoType(".type-js",200);

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

});

//타이핑
function autoType(elementClass, typingSpeed){
  var thhis = $(elementClass);
  thhis.css({
    "position": "relative",
    "display": "inline-block"
  });
  thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
  thhis = thhis.find(".text-js");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("|");

  setTimeout(function(){
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text("");
    for(var i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },1500);
}