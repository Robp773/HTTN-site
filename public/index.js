'use strict'

$(document).ready(function () {
  $(window).on('scroll', function (e) {
    if (e.currentTarget.scrollY >= 1200) {
      $('.contact-schedule').animate({
        opacity: 1
      }, 1500)
    }
  })

  $('#instructions-intro, #gallery, #schedule, #contact, #intro, #about').click(function (e) {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(`.${e.currentTarget.attributes.id.value}`).offset().top - 100
    }, 750)
  })
})
