$(window).ready(function(){

	

	$("#gallery_grid").mixItUp();
	

	$(".s_gallery li").click(function(){
		$(".s_gallery li").removeClass("active");
		$(this).addClass("active");
	});


	$(".portfolio_item").each(function(e){

		var th = $(this);
		
		th.attr("href","#portfolio_img-" + e)
			.find(".portfolio_popup")
				.attr("id", "portfolio_img-" + e);

	});

	$(".portfolio_item").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline'
	});

	$(".top_line  li").click(function(){
		$(".top_line  li").removeClass("active");
		$(this).addClass("active");
	});
	


	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	$(".s_adv").waypoint(function(){
		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 1400,
			easing: 'swing',
			step: function() {
				$(".isabout .circle .number span").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".isabout .circle .number span").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				"font-size": "40px",
				numberStep: comma_separator_number_step},
				1400);
		});
	}, {
		offset: '55%'	
	});

$(".callback").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.success').addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$('.success').removeClass("visible");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

});

var owl = $(".slider");
owl.owlCarousel({
	items : 1,
	nav : true,
	navText : "",
	loop : true,
	dots: false,
	autoplay : true,
	autoplayHoverPause : true,
	fluidSpeed : 600,
	autoplaySpeed : 600,
	navSpeed : 600,
	dotsSpeed : 600,
	dragEndSpeed : 600

});
$(".next").click(function(){
	owl.trigger("next.owl.carousel");
})
$(".prev").click(function(){
	owl.trigger("prev.owl.carousel");
})


$('.owl-carousel').owlCarousel({
	loop:true,
	margin:10,
	nav:true,
	navText : "",
	responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:4
		}
	}
})


$(".slider_2").owlCarousel({
	items : 1,
	nav : true,
	navText : "",
	loop : true,
	autoplay : true,
	autoplayHoverPause : true,
	fluidSpeed : 600,
	autoplaySpeed : 600,
	navSpeed : 600,
	dotsSpeed : 600,
	dragEndSpeed : 600
});



$(".sm_menu").after("<div id='my-menu'>");
$(".sm_menu").clone().appendTo("#my-menu");
$("#my-menu").find("*").attr("style", "");
$("#my-menu").mmenu({
	extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
	navbar: {
		title : "Меню"
	}
});

var api = $("#my-menu").data( "mmenu" );
api.bind("closed", function () {
	$(".toggle-mnu").removeClass("on");
});


$(".mobile-mnu").click(function() {
	var mmAPI = $("#my-menu").data( "mmenu" );
	mmAPI.open();
	var thiss = $(this).find(".toggle-mnu");
	thiss.toggleClass("on");
	$(".main-mnu").slideToggle();
	return false;
});



