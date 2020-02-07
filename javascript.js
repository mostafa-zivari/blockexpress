var scrolled = 0;
var row = 0;
var newRow = 0;
const numberOfRows = 3;
var loading = false;
var delayInMilliseconds = 1000;
var lastScrollTop = 0;


// show tooltip for dotted
$('[data-toggle="tooltip"]').tooltip();


document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 38:
            // up key pressed
            if (newRow > 0) {
                newRow--;
                scrollPageWithDot();
            }
            break;
        case 40:
            // down key pressed
            if (newRow < numberOfRows || newRow == 0) {
                newRow++;
                scrollPageWithDot();
            }
            break;
    }
};


window.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
        // scrolling up
        if (newRow > 0) {
            newRow--;
        }
    } else if (event.deltaY > 0) {
        // scrolling down

        if (newRow < row || newRow == 0) {
            newRow++;
        }
    }


    scrollPageWithDot();

});


$("div.dots span.dot").click(function () {
    var id = $(".dot").index(this);
    newRow = id;

    scrollPageWithDot();
});


$('.toggle').click(function () {
    $('.toggle').toggleClass('active');
    $('body').toggleClass('night');

    changeColorOfMenuIcon();
    changeColorOfCurrencies();
    changeColorOfSocialMedia();
});

$("div#section0 .slider").owlCarousel({

    loop: true,
    margin: 10,
    rtl: true,

    responsive: {
        0: {
            items: 1,
            autoplay: false
        },
        600: {
            items: 1,
            autoplay: false
        },
        1000: {
            items: 2
        }
    }

});
$("div#section1 .slider").owlCarousel({

    loop: true,
    margin: 10,
    rtl: true,
    center: true,
    dots: true,
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
            items: 3
        }
    }

});


function setNewRow(number) {
    newRow = number;
    scrollPageWithDot();
}

function scrollPageWithDot() {
    var element = "#section" + newRow;

    $('div.dots span.dot').eq(row).removeClass("activePage");
    $('div.dots span.dot').eq(newRow).addClass("activePage");

    if (newRow > 0) {
        setTimeout(function () {
            $(".topMenu").removeClass("hideMenu");
            $(".bottomMenu").addClass("hideMenu");
        }, 500);
    } else if (newRow == 0) {
        $(".topMenu").addClass("hideMenu");
        $(".bottomMenu").removeClass("hideMenu");
    }


    $("div.topMenu li").eq(row).removeClass("activeLink");
    $("div.topMenu li").eq(newRow).addClass("activeLink");


    if (!loading) {
        loading = true;
        $('html, body').animate({
            scrollTop: $(element).offset().top
        }, delayInMilliseconds);

        setTimeout(function () {
            loading = false;
        }, delayInMilliseconds + 100);

    }


    row = newRow;
}

// change image of currencies


$("div#section2 div.currencies div.currency").hover(function () {
    var isNight = $("body").hasClass("night");
    var picture = $(this).find("img");
    var source = picture.attr('src');
    var i;
    if (isNight) {
        /*for (i = 0; i < source.length; i++) {
            if (source[i] == '1') {
                source = source.substr(0, i) + '0' + source.substr(i + 1);
            }
        }
        picture.attr('src', source);*/

    } else {
        for (i = 0; i < source.length; i++) {
            if (source[i] == '0') {
                source = source.substr(0, i) + '1' + source.substr(i + 1);
            }
        }
        picture.attr('src', source);
    }
});

$("div#section2 div.currencies div.currency").mouseleave(function () {
    var isNight = $("body").hasClass("night");
    var picture = $(this).find("img");
    var source = picture.attr('src');
    var i;
    if (isNight) {
        /*for (i = 0; i < source.length; i++) {
            if (source[i] == '0') {
                source = source.substr(0, i) + '1' + source.substr(i + 1);
            }
        }
        picture.attr('src', source);*/
    } else {
        for (i = 0; i < source.length; i++) {
            if (source[i] == '1') {
                source = source.substr(0, i) + '0' + source.substr(i + 1);
            }
        }
        picture.attr('src', source);
    }
});


function changeColorOfMenuIcon() {
    var isNight = $("body").hasClass("night");
    var menuCount = $("div.menu nav ul").children().length;
    var i , j , icon , source;

    if (isNight) {
        for (i = 0; i < menuCount; i++) {
            icon = $("div.menu nav ul").children().eq(i).find("img");
            source = icon.attr('src');
            for (j = 0 ; j < source.length ; j++){
                if (source[j] == '0'){
                    source = source.substr(0, j) + '1' + source.substr(j + 1);
                    break;
                }
            }
            icon.attr('src' , source);
        }
    }else{
        for (i = 0; i < menuCount; i++) {
            icon = $("div.menu nav ul").children().eq(i).find("img");
            source = icon.attr('src');
            for (j = 0 ; j < source.length ; j++){
                if (source[j] == '1'){
                    source = source.substr(0, j) + '0' + source.substr(j + 1);
                    break;
                }
            }
            icon.attr('src' , source);
        }
    }

}

function changeColorOfCurrencies() {
    var isNight = $("body").hasClass("night");
    var currencyCount = $("div#section2 div.currencies div.individualCurrency").children().length;
    var i, j;
    var imageSource;
    var picture;
    if (isNight) {
        for (i = 0; i < currencyCount; ++i) {

            var picture = $('div#section2 div.currencies div.individualCurrency').children().eq(i).find("img");
            imageSource = picture.attr('src');

            for (j = 0; j < imageSource.length; j++) {
                if (imageSource[j] == '0') {
                    imageSource = imageSource.substr(0, j) + '1' + imageSource.substr(j + 1);
                    break;
                }
            }
            // alert(imageSource);

            picture.attr('src', imageSource);
        }

    } else {
        for (i = 0; i < currencyCount; ++i) {

            var picture = $('div#section2 div.currencies div.individualCurrency').children().eq(i).find("img");
            imageSource = picture.attr('src');

            for (j = 0; j < imageSource.length; j++) {
                if (imageSource[j] == '1') {
                    imageSource = imageSource.substr(0, j) + '0' + imageSource.substr(j + 1);
                    break;
                }
            }
            // alert(imageSource);

            picture.attr('src', imageSource);
        }

    }

}

function changeColorOfSocialMedia() {
    var isNight = $("body").hasClass("night");
    var socialMediaCount = $("footer div.socialMedia div.row").children().length;
    var i, j, img, src;

    if (isNight) {
        for (i = 0; i < socialMediaCount; i++) {
            img = $("footer div.socialMedia div.row").children().eq(i).find("img");
            src = img.attr('src');
            for (j = 0; j < src.length; j++) {
                if (src[j] == '0') {
                    src = src.substr(0, j) + '1' + src.substr(j + 1);
                    break;
                }
            }
            img.attr('src', src);
        }
    } else {
        for (i = 0; i < socialMediaCount; i++) {
            img = $("footer div.socialMedia div.row").children().eq(i).find("img");
            src = img.attr('src');
            for (j = 0; j < src.length; j++) {
                if (src[j] == '1') {
                    src = src.substr(0, j) + '0' + src.substr(j + 1);
                    break;
                }
            }
            img.attr('src', src);
        }
    }

}


// social media icons change color

$("footer div.middleFooter div.socialMedia div.row div.col-md-4").hover(function () {
    var isNight = $("body").hasClass("night");
    var picture = $(this).find("img");
    var src = picture.attr("src");
    var i;

    if (!isNight) {
        for (i = 0; i < src.length; i++) {
            if (src[i] == '0') {
                src = src.substr(0, i) + '1' + src.substr(i + 1);
                break;
            }
        }
        picture.attr('src', src);
    }

});

$("footer div.middleFooter div.socialMedia div.row div.col-md-4").mouseleave(function () {
    var isNight = $("body").hasClass("night");
    var picture = $(this).find("img");
    var src = picture.attr("src");
    var i;

    if (!isNight) {
        for (i = 0; i < src.length; i++) {
            if (src[i] == '1') {
                src = src.substr(0, i) + '0' + src.substr(i + 1);
                break;
            }
        }
        picture.attr('src', src);
    }

});


/*$('div#section2 div.currencies img').on({
    'hover': function(){
        // $('#my_image').attr('src','second.jpg');
        alert("hi");
    }
});*/


/*function scrollPage(){
    var $el = $('div.menu');

    if (scrolled - window.scrollY < 0) {
        // scroll to bottom
        console.log("down");

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
        console.log("up");

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

}*/





