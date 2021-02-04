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
            'a Vietnamese American',
            'a creative soul',
            'a tea lover',
            'an artist',
            'your friend',
            'a perfectionist',
            'a former collegiate track athlete',
            'a Scout Leader',
            'a UX UI Designer',
            'a Visual Designer'
            ], i = 0;
        setInterval(function changeWord(){
            $('#whoami').fadeOut(function changeWord(){
                $(this).html(words[i=(i+1)%words.length]).fadeIn();
            });
        }, 3300);
          
    })();

    (function changeWord(){
        var words = [
            'Xin Chao,',
            'Hi,'
            ], i = 0;
        setInterval(function changeWord(){
            $('#whoami2').fadeOut(function changeWord(){
                $(this).html(words[i=(i+1)%words.length]).fadeIn();
            });
        }, 2000);
          
    })();

  
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');
    
    navBarToggle.addEventListener('click', function () {
        
        mainNav.classList.toggle('active');
    });

    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
