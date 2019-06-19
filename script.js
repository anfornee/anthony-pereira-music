////////////* Contact Form *///////////////
$(document).ready(function () {
    $('.submit').click(function (event) {

        let email = $('.email').val();
        let message = $('.message').val();
        var statusElm = $('.status');
        statusElm.empty();

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.remove;
        } else {
            event.preventDefault();
            statusElm.append('*Invalid email </br>');
        };

        if (message) {
            statusElm.remove;
        } else {
            event.preventDefault()
            statusElm.append('*Must include a message </br>');
        };

    })
});

////////////* Sticky Header *///////////////
window.onscroll = function () { myFunction() };

var header = document.getElementById("header");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

////////////* Hover Over Scroll Icon *///////////////
function isHover(e) {
  return (e.parentElement.querySelector(':hover') === e);
}


let scrollIcon = document.getElementById('moreStuff');;
document.addEventListener('mousemove', function checkHover() {
  var hovered = isHover(scrollIcon);
  if (hovered) {
    scrollIcon.classList.add("pulse");
  } else {
    scrollIcon.classList.remove("pulse");
  }
});
