/// Contact Form ///
$(document).ready(function () {
  $('.submit').click(function (event) {
    const email = $('.email').val()
    const message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.remove()
    } else {
      event.preventDefault()
      statusElm.append('*Invalid email </br>')
    }

    if (message) {
      statusElm.remove()
    } else {
      event.preventDefault()
      statusElm.append('*Must include a message </br>')
    }
  })
})

/// Mobile Ham Menu ///
const hamMenu = document.getElementById('hamMenu')
hamMenu.addEventListener('click', () => {
  const mobileNav = document.getElementById('navMenu')
  if (hamMenu.classList.contains('open')) {
    hamMenu.classList.remove('open')
    mobileNav.classList.remove('open')
  } else {
    hamMenu.classList.add('open')
    mobileNav.classList.add('open')
  }
})

/// Sticky Header - Scroll Button Hide/Reveal - menuIcon Invert ///
window.onscroll = function () { headerClass() }

var header = document.getElementById('header')

var sticky = header.offsetTop

const scrollIcon = document.getElementById('moreStuff')

function headerClass () {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky')
    scrollIcon.classList.add('scrollButtonHide')
    hamMenu.classList.add('black')
  } else {
    header.classList.remove('sticky')
    scrollIcon.classList.remove('scrollButtonHide')
    hamMenu.classList.remove('black')
  }
}

/// Hover Over Scroll Icon ///
function isHover (e) {
  return (e.parentElement.querySelector(':hover') === e)
}

document.addEventListener('mousemove', function checkHover () {
  var hovered = isHover(scrollIcon)
  if (hovered) {
    scrollIcon.classList.add('pulse')
  } else {
    scrollIcon.classList.remove('pulse')
  }
})
