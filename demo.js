function init() {
    bindEvent();
    swiper();
}
init();

function bindEvent() {
    var bite = $('#swiper').width() / $('#swiper').height();
    console.log(bite);
    var height = $('#swiper').width() / bite;
    $('#swiper').css({ height: height + 'px' });
    $('.content').css({ height: height + 'px' });
    $('.img-box').css({ height: height + 'px' });
    $('.img-box li img').css({ height: height + 'px' });
    $('.btn').hover(function() {
        $('.header ul.list').show();
    })
    $('.header ul.list').on('mouseleave', function() {
        if (window.innerWidth <= 700) {
            $(this).hide();
        }
    });
    $(window).on('resize', function() {
        console.log(bite);
        var height = $('#swiper').width() / bite;
        $('#swiper').css({ height: height + 'px' });
        $('.content').css({ height: height + 'px' });
        $('.img-box').css({ height: height + 'px' });
        $('.img-box li img').css({ height: height + 'px' });
        if (window.innerWidth > 700) {
            $('.header ul.list').show();
        }
    });
    $('.header a').click(function() {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 20 + "px"
        }, 500)
        return false;
    })
}

function swiper() {
    $('#swiper').sliderImg({
        image: ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg'],
        href: ['#', '#', '#', '#']
    });
}