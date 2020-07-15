(function($) {


// Sticky navbar
// =========================
    $(document).ready(function () {        
        // masaüstü için maxheight belirtmiştik navbar için ancak burası mobili bozuyordu.
        if ($(document).width() < 768) {
            $("#navbar").removeClass("navHeight");
        }        
                // Custom function which toggles between sticky class (is-sticky)
                var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
                    var stickyHeight = sticky.outerHeight();
                    var stickyTop = stickyWrapper.offset().top;
                    if (scrollElement.scrollTop() >= stickyTop) {
                        stickyWrapper.height(stickyHeight);
                        sticky.addClass("is-sticky");
                    }
                    else {
                        sticky.removeClass("is-sticky");
                        stickyWrapper.height('auto');
                    }
                };

                // Find all data-toggle="sticky-onscroll" elements
                $('[data-toggle="sticky-onscroll"]').each(function () {
                    if($(document).width() < 768){
                        return;
                    }                    
                    var sticky = $(this);
                    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
                    sticky.before(stickyWrapper);
                    sticky.addClass('sticky');                                                            
                    
                    // Scroll & resize events
                    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
                        stickyToggle(sticky, stickyWrapper, $(this));
                        if ($(document).scrollTop() < $("#topLogo").position().top + $("#topLogo").height()) {
                            $("#liLogo").addClass("d-none");
                        }
                        else {
                            $("#liLogo").removeClass("d-none");
                        }             
                        
                    });

                    // On page load
                    stickyToggle(sticky, stickyWrapper, $(window));
                });
            });
	
	// Dropdown Menu Fade    
jQuery(document).ready(function(){
    $(".dropdown").hover(
        function () {
            $('.dropdown-menu', this).stop().fadeIn("fast"); 
            if ($(document).width() < 768) {
                return;
            }
            //var subMenu = $(this).position();            
            //var subMenuWidth = $(this).find("div").width();            
            //if (subMenu.left + subMenuWidth > window.innerWidth) {
            //    var newX = subMenu.left + (window.innerWidth - (subMenu.left + subMenuWidth));
            //    $(this).find("div").offset({ "top": $(this).find("div").offset().top, "left": newX })

            //}
            //if (left > 0) {
            //    $("html, body").scrollLeft(1000);
            //}     
        },
        function () {
            $('.dropdown-menu', this).stop().fadeOut("fast");
            //$('body, html').scrollLeft(0);            
    });
});

  // Init Wow
  wow = new WOW({
    animateClass: 'animated',
    offset: 100
  });
  wow.init();

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // Navigation scrolls
  $('.navbar-nav li a').bind('click', function(event) {
    $('.navbar-nav li').removeClass('active');
    $(this).closest('li').addClass('active');
    var $anchor = $(this);
    var nav = $($anchor.attr('href'));
    if (nav.length) {
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');

      event.preventDefault();
    }
  });

  // About section scroll
  $(".overlay-detail a").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function() {
      window.location.hash = hash;
    });
  });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar-dark").offset().top > 50) {
      $(".navbar-dark").addClass("top-nav-collapse");
    } else {
      $(".navbar-dark").removeClass("top-nav-collapse");
    }
  });


$("#sendMail").click(function(){        
	debugger;
        var fromMailAddress = $("#FromMailAdress").val();        
        var name = $("#Name").val();        
        var data = {
            "FromMailAdress": fromMailAddress,            
            "Name": name,            
        }
        $.post('/api/Mail', data, function () {
        })
            .done(function (response) {                
                alert("Gönderildi");
            })
            .fail(function (e) {
                alert("Gönderildi");
            });
});
})(jQuery);
