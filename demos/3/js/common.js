
$(document).ready(function(){



	$("a[href='#callback']").magnificPopup();
	$(".search-box").magnificPopup();
	
	$('.cities-list').find('a').click(function() {
			$('.search-box').contents().first()[0].textContent=$(this).text();
			$('.search-box').parent().contents().first()[0].textContent= "Ваш город: ";
			$.magnificPopup.close();
	});

	$("#choise-table, #choise-table_2").mixItUp({
		selectors: {
			filter: '.filter',
			target: '.mix',
			activeClass:'on'
		},
		load: {
			filter: '.category-1'
		},
		animation: {
			enable: true,
			duration: 1200,
			effects: 'translateX(-10000px) stagger(10ms)'
		}
	});


	$(".arrow_down").click(function() {
		$("html, body").animate({
			scrollTop : $(".header__content").offset().top
		}, 800);
	});

	$(".wide li").click(function() {
		$(".wide li").removeClass("active");
		$(this).addClass("active");
	});

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".header__nav").slideToggle();
		return false;
	});	
	
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		pagination: '.swiper-pagination',
		paginationClickable: true,
		//loop: true,
		//autoplay: 8500,
		autoplayDisableOnInteraction: true,
		coverflow: {
			rotate: -18,
			stretch: -25,
			depth: 180,
			modifier: 1,
			slideShadows: true,
			shadow: true,
			hashnav: true,
		}
	});
});
