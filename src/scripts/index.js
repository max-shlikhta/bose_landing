/* eslint-disable no-undef */
'use strict';

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
      $('.page__scrollup').fadeIn();
    } else {
      $('.page__scrollup').fadeOut();
    }
  });

  $('.page__scrollup').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 0);

    return false;
  });
});
