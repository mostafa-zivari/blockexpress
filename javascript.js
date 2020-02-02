var scrolled = 0;
var row = 0;
const numberOfRows = 2;
var loading = false;
var delayInMilliseconds = 300;

window.addEventListener("scroll" , ()=>{

    if (scrolled - window.scrollY < 0){
        // scroll to bottom

        scrolled = window.scrollY;

        if (row < numberOfRows ){
            row++;
        }

        var element = "#section" + row;
        console.log(element);
        if (!loading) {
            loading = true;
            $('html, body').animate({
                scrollTop: $(element).offset().top
            }, delayInMilliseconds);

            setTimeout(function() {
                loading = false;
            }, delayInMilliseconds + 100);
        }


    }else if (scrolled - window.scrollY > 0){
        // scroll to top
        scrolled = window.scrollY;

        if (row > 0 ){
            row--;
        }

        var element = "#section" + row;

        console.log(element);
        if (!loading) {
            loading = true;
            $('html, body').animate({
                scrollTop: $(element).offset().top
            }, delayInMilliseconds);


            setTimeout(function() {
                loading = false;
            }, delayInMilliseconds + 100);

        }



    }

});

