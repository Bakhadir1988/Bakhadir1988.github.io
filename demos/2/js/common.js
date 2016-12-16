$(function() {

    $("a[href='#callback']").magnificPopup();

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".header__menu").slideToggle();
        return false;
    }); 


    var owl = $(".owl-carousel");
    owl.owlCarousel({
    	items : 1,
    	nav : true,
    	navText : "",
    	loop : true,
    	dots: false,
    	autoplay : true,
    	autoplayHoverPause : true,
    	fluidSpeed : 600,
    	itemClass: "slide",
    	autoplaySpeed : 600,
    	navSpeed : 000,
    	dotsSpeed : 600,
    	dragEndSpeed : 600
    });
    $(".next").click(function(){
    	owl.trigger("next.owl.carousel");
    })
    $(".prev").click(function(){
    	owl.trigger("prev.owl.carousel");
    })

    

    
  });
