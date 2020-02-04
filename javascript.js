var scrolled = 0;
var row = 0;
const numberOfRows = 2;
var loading = false;
var delayInMilliseconds = 1000;

window.addEventListener("scroll", () => {

    var $el = $('div.menu');


    if (scrolled - window.scrollY < 0) {
        // scroll to bottom

        scrolled = window.scrollY;

        if (row < numberOfRows) {
            row++;
        }

        var element = "#section" + row;
        console.log(element);
        if (!loading) {
            loading = true;
            $('html, body').animate({
                scrollTop: $(element).offset().top
            }, delayInMilliseconds);

            setTimeout(function () {
                loading = false;
            }, delayInMilliseconds + 100);
        }

    } else if (scrolled - window.scrollY > 0) {
        // scroll to top
        scrolled = window.scrollY;

        if (row > 0) {
            row--;
        }

        var element = "#section" + row;

        console.log(element);
        if (!loading) {
            loading = true;
            $('html, body').animate({
                scrollTop: $(element).offset().top
            }, delayInMilliseconds);


            setTimeout(function () {
                loading = false;
            }, delayInMilliseconds + 100);

        }

    }

    if (row == 0){
        $el.removeClass("sticky");
    }else{
        $el.addClass("sticky");

    }

});

$('.toggle').click(function () {
    $('.toggle').toggleClass('active');
    $('body').toggleClass('night');
});


$(".slider").owlCarousel({

    loop: true,
    margin: 10,
    rtl: true,

    responsive: {
        0: {
            items: 1,
            autoplay: false
        },
        600: {
            items: 3,
            autoplay: false
        },
        1000: {
            items: 2
        }
    }

});


$(window).scroll(function () {


});






