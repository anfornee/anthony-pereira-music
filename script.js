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