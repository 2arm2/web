$(document).ready(function(){

	//���� �����̵�
	var mySwiper = new Swiper('.swiper-container', {
		mode: 'vertical',
		speed : 500,
		keyboardControl: true,
		mousewheelControl: true,
		pagination: '.pagination',
		paginationElement: 'a',
		paginationClickable: true,
		onSlideChangeStart : function(swiper){
			$('#header, #footer').addClass('main_on');
			var swiperNo = mySwiper.activeIndex;
			if( swiperNo == 2 || swiperNo == 3 || swiperNo == 4 ){
				$('#header').find('li').addClass('on');
				$('.arrow-next').addClass('on');
			} else {
				$('#header').find('li').removeClass('on');
				$('.arrow-next').removeClass('on');
			};
			if( swiperNo == 6 ){
				$('.arrow-next').hide();
			} else {
				$('.arrow-next').show();
			};
		}
	})
	$('.arrow-next').on('click', function(e){
		e.preventDefault()
		mySwiper.swipeNext();
	});
	var swiperNo = mySwiper.activeIndex;
	if( swiperNo == 0 ){
		$('#header').addClass('main_on');
	};

	//���ν����̵�1 �ڼ������� Ŭ�� �̺�Ʈ
	$('.slide1').find('li:first-child a').on('click', function(e){
		mySwiper.swipeNext();
	});
	
	//���ν����̵�1 ��������, ��ũ�Ѵٿ� �ִϸ��̼�
	function swing() {
        $('.slide1').find('> div div').animate({'margin-top':'-190px'},600).animate({'margin-top':'-176px'},600, swing);
		$('.arrow-next').animate({'bottom':'30px'},600).animate({'bottom':'20px'},600, swing);
    }
    swing();

	//���ν����̵�1 �������� �ݱ�
	$('.slide1').find('button').on('click', function(e){
		$('.slide1').find(' > div div').hide();
	});

	//���ν����̵�6 �����û�� �ۼ� Ŭ��
	$('.slide6').find('.contact').on('click', function(e){
		mySwiper.swipeTo(6);
	});

	//���� top��ư Ŭ��, ù��° �����̵�� �̵�
    $('.swiper-container').find('p a').on('click', function() {
        mySwiper.swipeTo(0);
    });

	//FAQ ���
	$('.cs_wrap').find('dd').hide();
	$('.cs_wrap').find('dt a').on('click', function(e) {
		e.stopPropagation();
		$('.cs_wrap').find('dt').removeClass('on');
		$('.cs_wrap').find('dd').hide();
		$(this).parent().next('dd').toggle();
		$(this).parent().addClass('on');
	});

	//top��ư Ŭ��, �ֻ������ �̵�
    $('#footer').find('p a').on('click', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 100);
        return false;
    });
	
	//�йи�����Ʈ Ŭ�� �̺�Ʈ
	$('#footer > dl dd').hide();
	$('#footer').find(' > dl dt a').on('click', function(e) {
		e.stopPropagation();
		$('#footer > dl dd').toggle();
		$(this).addClass('on');
	});
	$(document).on('click', function() {
		$('#footer > dl dd').hide();
		$('#footer').find(' > dl dt a').removeClass('on');
	});

});