$(document).ready(function() {

    // $("#owl-demo1").owlCarousel({
    //     autoPlay: false,
    //     items :   1,
    //     itemsDesktop : [1199, 1],
    //     itemsDesktopSmall : [979, 1],
    //     itemsTablet: [700,1],
    //     itemsMobile : [300,1],
    //     navigation:true,
    //     pagination:false
    // });

    var $portletItem = $(".portletNavigationTree .portletItem"),
        $portletHeader = $(".portletNavigationTree .portletHeader");

    //Injects mobile menu button
    $("header").append("<div class='menu-button'><button><span class='hiddenStructure'>Mostrar ou Ocultar Menu</span><i class='icon-reorder'></i></button></div>");

    //Show menu on mobile menu button click
    $(".menu-button button").on( "click", function() {
        $(this).toggleClass("menuAtivo");
        $portletItem.slideUp(200);
        $portletHeader.removeClass("menuAtivo");
        $("#column-one").slideToggle();
    });
    //Collapse menu according to screen size
    $(window).resize(function() {
        if ($(window).width() < 753) {
            $portletHeader.unbind();
            $(".menu-button button").removeClass("menuAtivo")
            $portletItem.hide();
            $("#column-one").hide();
            $("#column-one").addClass("menuAtivo");
            $portletHeader.click(function(e) {
                e.preventDefault();
                $(this).toggleClass("menuAtivo");
                $(this).next().slideToggle();
            });
        } else {
            $portletHeader.unbind();
            $portletItem.show();
            $("#column-one").removeClass("menuAtivo")
            $("#column-one").show();
            $(".menu-button button").removeClass("menuAtivo")
            $("#column-one").css("display","table-cell");
        }
    }).resize();
});

(function($) {
$.fn.menumaker = function(options) {  
 var cssmenu = $(this), settings = $.extend({
   format: "dropdown",
   sticky: false
 }, options);
 return this.each(function() {
   $(this).find(".button").on('click', function(){
     $(this).toggleClass('menu-opened');
     var mainmenu = $(this).next('ul');
     if (mainmenu.hasClass('open')) { 
       mainmenu.slideToggle().removeClass('open');
     }
     else {
       mainmenu.slideToggle().addClass('open');
       if (settings.format === "dropdown") {
         mainmenu.find('ul').show();
       }
     }
   });
   cssmenu.find('li ul').parent().addClass('has-sub');
multiTg = function() {
     cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
     cssmenu.find('.submenu-button').on('click', function() {
       $(this).toggleClass('submenu-opened');
       if ($(this).siblings('ul').hasClass('open')) {
         $(this).siblings('ul').removeClass('open').slideToggle();
       }
       else {
         $(this).siblings('ul').addClass('open').slideToggle();
       }
     });
   };
   if (settings.format === 'multitoggle') multiTg();
   else cssmenu.addClass('dropdown');
   if (settings.sticky === true) cssmenu.css('position', 'fixed');
resizeFix = function() {
  var mediasize = 1000;
     if ($( window ).width() > mediasize) {
       cssmenu.find('ul').show();
     }
     if ($(window).width() <= mediasize) {
       cssmenu.find('ul').hide().removeClass('open');
     }
   };
   resizeFix();
   return $(window).on('resize', resizeFix);
 });
  };
   
})(jQuery);

(function($){$(document).ready(function(){
  $("#cssmenu").menumaker({
     format: "multitoggle"
  });
});
})(jQuery);