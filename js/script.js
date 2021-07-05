
	// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


// home page

	var action = 'click';
	var speed = "500";
	
	$(document).ready(function(){
	    

	    $("i-amphtml-sizer").remove();
	    // Question handler
	    $('li.q').on(action, function(){
			// gets next element
			// opens .a of selected question
			$(this).next().slideToggle(speed)
			// selects all other answers and slides up any open answer
			.siblings('li.a').slideUp();
			// Grab img from clicked question
			var img = $(this).children('amp-img');
			// remove Rotate class from all images except the active
			$('amp-img').not(img).removeClass('rotate');
			// toggle rotate class
			img.toggleClass('rotate');
	    });
	});
	
	$(window).scroll(function() {
		/*Top header*/
		var width = $(window).width();
		var sticky = $('.top-header'),
		scroll = $(window).scrollTop();

		if (scroll >= 40) { 
			sticky.addClass('sticky');
			if(768 >= width){
			$(".contact_info").removeClass("contact_info").addClass("contact_info_hide_show");	
			}				
		}else { 

			sticky.removeClass('sticky');
			if(768 >= width){
			$(".contact_info_hide_show").removeClass("contact_info_hide_show").addClass("contact_info");
			}
		}
	});
	
	$('#imageCarousel-1').carousel({

		interval: 5000

	});

	function toggleIcon(e) {

		$(e.target)

		.prev('.panel-heading')

		.find(".more-less")

		.toggleClass('glyphicon-plus glyphicon-minus');

	}

	$('.panel-group').on('hidden.bs.collapse', toggleIcon);

	$('.panel-group').on('shown.bs.collapse', toggleIcon);

	$('.nav li.dropdown').hover(function() {

			$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);

		}, function() {

			$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);

	});
		
	function keepLocation(oldOffset) {
		if (window.pageYOffset!= null){
			st=oldOffset;
		}
		if (document.body.scrollWidth!= null){
			st=oldOffset;
		}
		setTimeout('window.scrollTo(0,st)',10);
	}

	$('#mixedSlider').multislider({

		duration: 750,

		interval: 0,

		autoSlide: false,

		slideAll: false,

	});

	$('#mixedSlider2').multislider({

		duration: 750,

		interval: 0,

		autoSlide: false,

		slideAll: false,

	});

	$('#mixedSlider3').multislider({

		duration: 750,

		interval: 0,

		autoSlide: false,

		slideAll: false,

	});
	
	 $(document).ready(function () {
    //$(".text").hide();
    $("#online,.online").click(function () {
        $("#SelectBranch,.SelectBranch").hide();
    });
    $("#classroom,.classroom").click(function () {
        $("#SelectBranch,.SelectBranch").show();
    });
});

	
	
	