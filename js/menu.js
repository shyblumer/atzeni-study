$(document).ready(function() {

// Menu Rotation Animation
  $('#menu-box').click(function(){

    if ( $("#hamburger").hasClass("rotate")) {
      $("#hamburger").removeClass("rotate");
      $("#dropdown-content").addClass("dropdown-hide");
      $("#menu-box").removeClass("menu-box-open");
    } else {
      $("#hamburger").addClass('rotate');
      $("#dropdown-content").removeClass("dropdown-hide");
      $('#menu-box').addClass("menu-box-open");
    }
  });
});
