$(function () {
    // gnb
    $.each($('a.subject'), function () {
        if (this.href == window.location.href) {
            $('a.subject').removeClass('active');
            $(this).addClass('active');
        }
    });

    // 상단으로 이동
    $('.content').scroll(function () {
        if ($('.content').scrollTop() > 200) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    });

    $('.back-to-top').on('click', function () {
        $('.content').animate({
            scrollTop: 0
        }, 100);
        return false;
    });
});

// select
function fOpenNewTab(event) {
    var OpenNewTab = window.open(event.value, '_blank');
}