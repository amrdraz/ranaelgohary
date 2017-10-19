$(document).ready(function(){ 
	var batchCount=0;//Initalise counter for backers pages.
	//If we've returned here from the API, scroll down to the menu so we can display success/fail.
	var page_url=String(window.location);
	if(page_url.indexOf('?')>0){
		document.getElementById('menu').scrollIntoView();
	}

	$( "#openBurgerMenu" ).click(function() {
	
	
		$( "#mobileMenu" ).removeClass( "displayNone" );
		$( "#mobileMenu" ).addClass( "displayBlock" );	
		
		$( "#openBurgerMenu" ).removeClass( "displayBlock" );
		$( "#openBurgerMenu" ).addClass( "displayNone" );	

		$( "#closeBurgerMenu" ).removeClass( "displayNone" );
		$( "#closeBurgerMenu" ).addClass( "displayBlock" );	
		
		$( "#mainNav" ).removeClass( "displayBlock" );
		$( "#mainNav" ).addClass( "displayNone" );	

	});
	
	
	$( "#closeBurgerMenu" ).click(function() {
	
	
		$( "#mobileMenu" ).removeClass( "displayBlock" );
		$( "#mobileMenu" ).addClass( "displayNone" );	

		$( "#closeBurgerMenu" ).removeClass( "displayBlock" );
		$( "#closeBurgerMenu" ).addClass( "displayNone" );	
		
		$( "#openBurgerMenu" ).removeClass( "displayNone" );
		$( "#openBurgerMenu" ).addClass( "displayBlock" );	
		
		$( "#mainNav" ).removeClass( "displayNone" );
		$( "#mainNav" ).addClass( "HeaderNavResponsive" );	

	});
	
	$( "#mobileMenu" ).click(function() {
	
	
		$( "#mobileMenu" ).removeClass( "displayBlock" );
		$( "#mobileMenu" ).addClass( "displayNone" );	

		$( "#closeBurgerMenu" ).removeClass( "displayBlock" );
		$( "#closeBurgerMenu" ).addClass( "displayNone" );	
		
		$( "#openBurgerMenu" ).removeClass( "displayNone" );
		$( "#openBurgerMenu" ).addClass( "displayBlock" );	
		
		$( "#mainNav" ).removeClass( "displayNone" );
		$( "#mainNav" ).addClass( "HeaderNavResponsive" );	

	});
	
	
	
	
	
	
//	Scroll Reveal
	
	window.sr = ScrollReveal();
	sr.reveal('.reveal');
	
	
//	Type It
	
	
	$('.type-it').typeIt({
		speed: 110,
		lifeLike: true,
		autoStart: true,
		loop: true,
		loopDelay: 10000,
  })
	
	
//	Fade in
	
	$('.fadein').delay(2800).fadeIn(1800);
	
	$('.fadeinsecond').delay(5000).fadeIn(1800);
	
	$('.fadeinthird').delay(6400).fadeIn(1800);
	
	$('.fadeinfourth').delay(8000).fadeIn(1800);
	
	
	
	
	
	
	
	});