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

////////////* Sticky Header - Scroll Button Hide/Reveal - menuIcon Invert *///////////////
window.onscroll = function () { headerClass() };

var header = document.getElementById("header");

var sticky = header.offsetTop;

let scrollIcon = document.getElementById('moreStuff');

let menuIcon = document.getElementById('menuIcon');

function headerClass() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    scrollIcon.classList.add("scrollButtonHide");
    menuIcon.classList.add("menuIconInvert");
  } else {
    header.classList.remove("sticky");
    scrollIcon.classList.remove("scrollButtonHide");
    menuIcon.classList.remove("menuIconInvert");
  }
};

////////////* Hover Over Scroll Icon *///////////////
function isHover(e) {
  return (e.parentElement.querySelector(':hover') === e);
};

document.addEventListener('mousemove', function checkHover() {
  var hovered = isHover(scrollIcon);
  if (hovered) {
    scrollIcon.classList.add("pulse");
  } else {
    scrollIcon.classList.remove("pulse");
  }
});

////////////* Screen Size Nav Response *///////////////
menuIcon.addEventListener('click', function rotateMenu(e) {
  if (menuIcon.className == "clicked") {
    menuIcon.classList.toggle("clicked");
  } else {
    menuIcon.classList.toggle("clicked");
  }
  e.preventDefault();
});

var nav = document.querySelector("nav"),
  navToggle = document.querySelector(".skip");
if (navToggle) {
  navToggle.addEventListener("click",
    function (e) {
      if (nav.className == "open") {
        nav.className = "";
      } else {
        nav.className = "open";
      }
      e.preventDefault();
    }, false);
};