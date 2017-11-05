$(document).ready(function() {

// Menu Rotation Animation
  $('#menu-box').click(function(){

    if ( $("#hamburger").hasClass("rotate")) {
      $("#hamburger").removeClass("rotate");
      $("#menu-box").removeClass("menu-box-open");
      $('.dropdown').animate({
        top: '-300px'
      }, 400);
    } else {
      $("#hamburger").addClass('rotate');
      $('#menu-box').addClass("menu-box-open");
      $('.dropdown').animate({
        top: '60px'
      }, 400);
    }
  });

  // About Pop-Up

  $('#contactLink').click(function() {
    $('.dropdown').hide();
    $('#container').hide();
    $('#contact').css({'display': 'block'});
  });

  $('#contactExit').click(function() {
    $('.dropdown').show();
    $('#contact').css({'display': 'none'});
    $('#container').show();
  });

  // Blog Category Dropdown Menu

  $(".header-dropdown").click(function() {
    if($('.categories').is(':hidden')) {
      $(".categories").slideDown();
    } else {
      $(".categories").slideUp();
    }
  });

  var activeCategory = 'all';

  var blogFilter = function(category) {
    var categoryClass = '.' + category;
    $('.selected').text(category);
    $(".categories").slideUp();
    if (category === 'all' && activeCategory === 'all') {
      return;
    }
    else if (category === 'all' && activeCategory !== 'all') {
      $('.blog-container').hide();
      $('.blog-topic').hide();
      $('.angular').show();
      $('.css').show();
      $('.express').show();
      $('.javascript').show();
      $('.mongodb').show();
      $('.node').show();
      $('.blog-container').slideDown();
      activeCategory = 'all';
    }
    else {
      $('.blog-container').hide();
      $('.blog-topic').hide();
      $(categoryClass).show();
      $('.blog-container').slideDown();
      activeCategory = category;
    }
  };

  $('.categorySelection').click(function() {
    var category = $(this).attr('id');
    blogFilter(category);
  });

});
