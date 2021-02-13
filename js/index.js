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
    
    var navList = document.getElementById("nav-lists");
    function Show() {
    navList.classList.add("_Menus-show");
    }
    
    function Hide(){
    navList.classList.remove("_Menus-show");
    }
  
    // Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}

// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn[0].onclick = function() {
    modal[0].style.display = "block";
}

btn[1].onclick = function() {
    modal[1].style.display = "block";
}
btn[2].onclick = function() {
    modal[2].style.display = "block";
}
btn[3].onclick = function() {
    modal[3].style.display = "block";
}
btn[4].onclick = function() {
    modal[4].style.display = "block";
}
btn[5].onclick = function() {
    modal[5].style.display = "block";
}
btn[6].onclick = function() {
    modal[6].style.display = "block";
}
btn[7].onclick = function() {
    modal[7].style.display = "block";
}
btn[8].onclick = function() {
    modal[8].style.display = "block";
}
btn[9].onclick = function() {
    modal[9].style.display = "block";
}
btn[10].onclick = function() {
    modal[10].style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    modal[0].style.display = "none";
}
span[1].onclick = function() {
    modal[1].style.display = "none";
}
span[2].onclick = function() {
    modal[2].style.display = "none";
}
span[3].onclick = function() {
    modal[3].style.display = "none";
}
span[4].onclick = function() {
    modal[4].style.display = "none";
}
span[5].onclick = function() {
    modal[5].style.display = "none";
}
span[6].onclick = function() {
    modal[6].style.display = "none";
}
span[7].onclick = function() {
    modal[7].style.display = "none";
}
span[8].onclick = function() {
    modal[8].style.display = "none";
}
span[9].onclick = function() {
    modal[9].style.display = "none";
}
span[10].onclick = function() {
    modal[10].style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}