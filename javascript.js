var row = 0;
var newRow = 0;
const numberOfRows = 4;
var loading = false;
var delayInMilliseconds = 700;
var documentHeight;




// show tooltip for dotted
$('[data-toggle="tooltip"]').tooltip();

var windowHeight, menuDistance;
var distances = new Array();



$(window).resize(setResizedSetting);
$(document).keydown(scrollWithKeyArrow);
$("div.dots span.dot").click(scrollWithDots);
$('.toggle').click(toggleMode);

$(document).ready(function () {
    setDefaultTemplate();
});



$(window).scroll(function () {

    var scroll = $(document).scrollTop();
    console.log(scroll);
    var i;

    if (scroll >= menuDistance) {
        $("div.menu.bottomMenu").addClass("hideMenu");
        $("div.menu.topMenu").removeClass("hideMenu");
    } else {
        $("div.menu.bottomMenu").removeClass("hideMenu");
        $("div.menu.topMenu").addClass("hideMenu");
    }

    if (scroll + 150 >= distances[numberOfRows]){
        newRow = numberOfRows;
    }else {
        for (i = numberOfRows; i >= 0; i--) {
            if (scroll >= (distances[i] - 35)) {
                newRow = i;
                break;
            }
        }
    }

    if (newRow == 0){
        $(".topMenu").addClass("hideMenu");
        $(".bottomMenu").removeClass("hideMenu");
    }else{
        $(".bottomMenu").addClass("hideMenu");
        $(".topMenu").removeClass("hideMenu");
    }

    for (i = 0; i <= numberOfRows; i++) {
        $("div.menu.topMenu ul").children().eq(i).removeClass("activeLink");
    }
    $("div.menu.topMenu ul").children().eq(newRow).addClass("activeLink");


    if (windowHeight >= 750) {

        for (i = 0; i <= numberOfRows; i++) {
            $("div.dots span.dot").eq(i).removeClass("activePage");
        }
        $("div.dots span.dot").eq(newRow).addClass("activePage");
    }


})
;


function setDistances() {
    windowHeight = window.innerHeight;
    menuDistance = $("div.bottomMenu").position().top;
    menuDistance = Math.round(menuDistance);
    documentHeight = $(document).outerHeight() ;
    console.log(documentHeight);
    var i, distance = 0;

    for (i = 0; i < numberOfRows + 1; i++) {

        distances[i] = distance;

        distance += $("#section" + i).outerHeight(true);
        // distance = Math.round(distance);

    }

    for (i = 0; i < numberOfRows + 1; i++) {
        console.log(distances[i]);


function setDefaultTemplate() {
    var height = window.innerHeight;

    if (height < 745) {
        $("div.dots").addClass("hide");
    }
}

function setResizedSetting() {
    var height = window.innerHeight;


    if (height < 750) {

    console.log(height);
    if (height < 745) {

        $("div.dots").addClass("hide");
    } else {
        $("div.dots").removeClass("hide");
    }

    setDistances();
}

function setDefaultTemplate() {
    var height = window.innerHeight;

    if (height < 750) {
        $("div.dots").addClass("hide");
    }

    setDistances();
}


function scrollWithKeyArrow() {
    var height = window.innerHeight;

    var asciiCode = event.keyCode;
    // 38 = up key and 40 = down key

    if (asciiCode == 38 && height >= 745) {
        // scroll to up
        if (newRow > 0) {
            newRow--;
            scrollPage();
        }

    } else if (asciiCode == 40 && height >= 745) {
        // scroll to down
        if (newRow < numberOfRows || newRow == 0) {
            newRow++;
            scrollPage();
        }

    }
}


window.addEventListener('wheel', function (event) {
    var height = window.innerHeight;

    if (event.deltaY < 0 && height >= 745) {
        // scrolling up
        if (newRow > 0) {
            newRow--;
        }
        scrollPage();

    } else if (event.deltaY > 0 && height >= 745) {
        // scrolling down

        if (newRow < row || newRow == 0) {
            newRow++;
        }
        scrollPage();

    }

});


function scrollWithDots() {
    var id = $(".dot").index(this);
    newRow = id;

    scrollPage();
}

function toggleMode() {
    $('.toggle').toggleClass('active');
    $('body').toggleClass('night');

    changeColorOfMenuIcon();
    changeColorOfCurrencies();
    changeColorOfSocialMedia();
    changeColorOfChart();
}


// sliders

$("div#section0 .slider").owlCarousel({
    nav: false,
    dots: false,
    loop: true,
    margin: 10,
    rtl: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,

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

$("div#section2 div.videos div.slider").owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    center: true,
    dots: false,
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
            items: 6
        }
    }
});

$("div#section2 div.infographics div.slider").owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    center: true,
    dots: false,
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
            items: 6
        }
    }
});

$("div#section2 div.podcasts div.slider").owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    center: true,
    dots: false,
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
            items: 6
        }
    }
});


function setNewRow(number) {
    newRow = number;
    scrollPage();
}

function scrollPage() {
    var element = "#section" + newRow;
    var i;
    var height = window.innerHeight;

    if (newRow > 0) {
        setTimeout(function () {
            $(".topMenu").removeClass("hideMenu");
            $(".bottomMenu").addClass("hideMenu");
        }, 500);
    } else if (newRow == 0) {
        $(".topMenu").addClass("hideMenu");
        $(".bottomMenu").removeClass("hideMenu");
    }


    if (!loading) {
        loading = true;
        $('html, body').animate({
            scrollTop: $(element).offset().top
        }, delayInMilliseconds);

        setTimeout(function () {
            loading = false;
        }, delayInMilliseconds + 100);

    }

    //row = newRow;
}

// change image of currencies

$("div#section3 div.currencies div.currency").hover(function () {
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

$("div#section3 div.currencies div.currency").mouseleave(function () {
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


function changeColorOfChart() {
    var isNight = $("body").hasClass("night");
    var picture = $("div#section0 div.chart img");
    var j, source;
    source = picture.attr('src');
    if (isNight) {

        for (j = 0; j < source.length; j++) {
            if (source[j] == '0') {
                source = source.substr(0, j) + '1' + source.substr(j + 1);
                break;
            }
        }
        picture.attr('src', source);

    } else {
        for (j = 0; j < source.length; j++) {
            if (source[j] == '1') {
                source = source.substr(0, j) + '0' + source.substr(j + 1);
                break;
            }
        }
        picture.attr('src', source);
    }

}

function changeColorOfMenuIcon() {
    var isNight = $("body").hasClass("night");
    var menuCount = $("div.menu nav ul").children().length;
    var i, j, icon, source;

    if (isNight) {
        for (i = 0; i < menuCount; i++) {
            icon = $("div.menu nav ul").children().eq(i).find("img");
            source = icon.attr('src');
            for (j = 0; j < source.length; j++) {
                if (source[j] == '0') {
                    source = source.substr(0, j) + '1' + source.substr(j + 1);
                    break;
                }
            }
            icon.attr('src', source);
        }
    } else {
        for (i = 0; i < menuCount; i++) {
            icon = $("div.menu nav ul").children().eq(i).find("img");
            source = icon.attr('src');
            for (j = 0; j < source.length; j++) {
                if (source[j] == '1') {
                    source = source.substr(0, j) + '0' + source.substr(j + 1);
                    break;
                }
            }
            icon.attr('src', source);
        }
    }

}

function changeColorOfCurrencies() {
    var isNight = $("body").hasClass("night");
    var currencyCount = $("div#section3 div.currencies div.individualCurrency").children().length;
    var i, j;
    var imageSource;
    var picture;
    if (isNight) {
        for (i = 0; i < currencyCount; ++i) {

            var picture = $('div#section3 div.currencies div.individualCurrency').children().eq(i).find("img");
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

            var picture = $('div#section3 div.currencies div.individualCurrency').children().eq(i).find("img");
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





