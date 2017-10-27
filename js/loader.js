$(document).ready(function() {

  $("#container").hide();
  //Loading Page
  var pageLoader = function() {

    var $elements = $('body').find('img[src]');
    $('body [style]').each(function(){
      var src = $(this).css('background-image').replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
        if(src) {
            $elements = $elements.add($('<img src="' + src + '"/>'));
          }
     });

     var $loading = $('#loader');
     var $loadPercentageLine = $('#loader-line');
     var $loadPercentageText = $('#loader-percentage');
     var elementsLoaded = 0;
     var speed = 2000;

     var animatePercentage = function(e) {
       $loadPercentageText.text(parseInt(e));

     };

    var loading = function() {
      var percentage = 0;
      if ($elements.length) {
        percentage = parseInt((elementsLoaded / $elements.length) * 100);
      }

      $loadPercentageLine.stop().animate({
        height:percentage + '%'
      }, speed);

      $loadPercentageText.stop().animate({
            percentage:percentage
        }, {
            duration: speed,
            step: animatePercentage
        });
    };

    if($elements.length) {

      $elements.each(function() {
        elementsLoaded++;
        loading();
      });

      $loadPercentageText.promise().done(function() {
        $loading.fadeOut("slow", function() {
          $(this).css({"display": "none"});
          $("#container").fadeIn(1500);
        });
      });
    }

  };

  pageLoader();

});
