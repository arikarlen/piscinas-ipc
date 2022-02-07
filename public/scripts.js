/*Add and remove class on scroll for dynamic fixed header height*/
jQuery(window).scroll(function () {
  var scroll = jQuery(window).scrollTop();

  if (scroll >= 300) {
    jQuery("#headerFixed").addClass("changeColor");
  } else {
    jQuery("#headerFixed").removeClass("changeColor");
  }
});
