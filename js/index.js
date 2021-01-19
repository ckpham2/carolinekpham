function fade() {
    $('.preloader').fadeOut("slow");
}
setTimeout(fade, 3000);

$(".scrollbutton").click(function () {
    // get the element on the page related to the button
    var scrollToId = $(this).data("scroll");
    var scrollToElement = document.getElementById(scrollToId);
    // make the page scroll down to where you want
    // ...
});


    (function changeWord(){
        var words = [
            'an artist',
            'a Vietnamese American',
            'a tea lover',
            'a creative soul',
            'your friend',
            'a perfectionist',
            'a former collegiate track athlete',
            'a Scout Leader',
            'a UX UI Designer'
            ], i = 0;
        setInterval(function changeWord(){
            $('#whoami').fadeOut(function changeWord(){
                $(this).html(words[i=(i+1)%words.length]).fadeIn();
            });
        }, 3000);
          
    })();

    ScrollReveal().reveal('.hero-content');