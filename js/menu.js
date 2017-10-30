$(document).ready(function() {

// Menu Rotation Animation
  $('#menu-box').click(function(){

    if ( $("#hamburger").hasClass("rotate")) {
      $("#hamburger").removeClass("rotate");
      $("#menu-box").removeClass("menu-box-open");
      $('.dropdown').animate({
        top: '-180px'
      }, 400);
    } else {
      $("#hamburger").addClass('rotate');
      $('#menu-box').addClass("menu-box-open");
      $('.dropdown').animate({
        top: '60px'
      }, 400);
    }
  });

  // Blog Category Dropdown Menu

  $(".header-dropdown").click(function() {
    if($('.categories').is(':hidden')) {
      $(".categories").slideDown();
    } else {
      $(".categories").slideUp();
    }
  });

});
