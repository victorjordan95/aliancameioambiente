$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("active");
    }
});


$(document).ready(function () {
  function filterPath(string) {
    return string
    .replace(/^\//, '')
    .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
    .replace(/\/$/, '');
          }
    $('.slide-menu').each(function () {
      if (filterPath(location.pathname) == filterPath(this.pathname) && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
            var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
            var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
              if ($target) {
                var targetOffset = $target.offset().top;
                  $(this).click(function () {
                    if($(window).width() > 200){
                      $('html, body').animate({scrollTop: targetOffset}, 800);
                        return false;
                          }
                    });
              }
      }
  });
});


$(document).ready(function() {
$(".btn-pref .btn").click(function () {
    $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).removeClass("btn-default").addClass("btn-primary");   
});
});


$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
});

  jQuery(document).ready(function($) {
 
        $('#myCarousel').carousel({
                interval: 5000
        });
 
        //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
});
