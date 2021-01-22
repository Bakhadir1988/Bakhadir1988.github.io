$('.js-slider').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    appendDots: $(".slide-dots"),
    prevArrow: $(".slide-prev"),
    nextArrow: $(".slide-next"),
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                
            }
        }
    ]
});

$('.news-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    prevArrow: $(".news-prev"),
    nextArrow: $(".news-next"),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        }
    ]
});

$('.news-video-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    arrows: true,
    prevArrow: $(".news-video-prev"),
    nextArrow: $(".news-video-next"),
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        }
        }
    ]
});

$('.date-month-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $(".filter-date-month-prev"),
    nextArrow: $(".filter-date-month-next"),
});

$('.date-year-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $(".filter-date-year-prev"),
    nextArrow: $(".filter-date-year-next"),
});

$('.sidebar-nav li').click(function() {
    $('.sidebar').addClass('sidebar-open')
})

$('ul.tabs-items').on('click', 'li:not(.active)', function() {
    console.log(123);
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
});

$('.hamburger').click(function() {
    $('body').toggleClass('hamburger-open');
})

$('.events-calendar-mobile').click(function() {
    $('.events-calendar-mobile').toggleClass('open').parent().parent().find('.datepicker-calendar').slideToggle();
})


var inputsItems = document.querySelectorAll('.input-file');

Array.prototype.forEach.call(inputsItems, function (input) {
    var label = input.nextElementSibling;
    var labelVal = label.querySelector('.input-file-button-text').innerText;

    input.addEventListener('change', function (e) {
    var countFiles = '';
    if (this.files && this.files.length >= 1)
        countFiles = this.files.length;

    if (countFiles) {
        label.querySelector('.input-file-button-text').innerText = 'Выбрано файлов: ' + countFiles;

         
    } else {
            label.querySelector('.input-file-button-text').innerText = labelVal;
        }  
        
    
    });
});
 

