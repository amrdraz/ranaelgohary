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
		
		$( "#headerNav" ).removeClass( "displayBlock" );
		$( "#headerNav" ).addClass( "displayNone" );	

	});
	
	
	$( "#closeBurgerMenu" ).click(function() {
	
	
		$( "#mobileMenu" ).removeClass( "displayBlock" );
		$( "#mobileMenu" ).addClass( "displayNone" );	

		$( "#closeBurgerMenu" ).removeClass( "displayBlock" );
		$( "#closeBurgerMenu" ).addClass( "displayNone" );	
		
		$( "#openBurgerMenu" ).removeClass( "displayNone" );
		$( "#openBurgerMenu" ).addClass( "displayBlock" );	
		
		$( "#headerNav" ).removeClass( "displayNone" );
		$( "#headerNav" ).addClass( "HeaderNavResponsive" );	

	});
	
	$( "#mobileMenu ul" ).click(function() {
	
	
		$( "#mobileMenu" ).removeClass( "displayBlock" );
		$( "#mobileMenu" ).addClass( "displayNone" );	

		$( "#closeBurgerMenu" ).removeClass( "displayBlock" );
		$( "#closeBurgerMenu" ).addClass( "displayNone" );	
		
		$( "#openBurgerMenu" ).removeClass( "displayNone" );
		$( "#openBurgerMenu" ).addClass( "displayBlock" );	
		
		$( "#headerNav" ).removeClass( "displayNone" );
		$( "#headerNav" ).addClass( "HeaderNavResponsive" );	

	});

	//If the Load More button is clicked, we display the next batch of backers by adding a class to them.
	$('#loadMore').click(function(){
		batchCount++;
		var nextBatchCount=batchCount+1;
		var batchClass='.batch-'+batchCount;
		var batchClassNext='.batch-'+nextBatchCount;
		$(batchClass).css('display','block');
		//If there are no more batches to show, remove the Load More button.
		if($(batchClassNext).length===0){
			$('#loadMore').css('display','none');
		}
	});
	//If a menu choice is clicked, highlight it.
	$('#menuItem1').click(function(){
		$('#menuItems div').removeClass('menu-selected');
		$(this).addClass('menu-selected');
		$('#meal').attr('value','meat');
	});
	$('#menuItem2').click(function(){
		$('#menuItems div').removeClass('menu-selected');
		$(this).addClass('menu-selected');
		$('#meal').attr('value','fish');
	});
	$('#menuItem3').click(function(){
		$('#menuItems div').removeClass('menu-selected');
		$(this).addClass('menu-selected');
		$('#meal').attr('value','veg');
	});
	//If the meal menu is submitted, determine whether the user actually chose a meal and supplied a valid email address.
	$('#order').click(function(e){
		e.preventDefault();
		var emailValue=document.forms['menu']['email'].value
			mealChoiceValue=document.forms['menu']['meal'].value
			errorMessage='';
		
		if(mealChoiceValue.length===0){
			errorMessage=errorMessage+'Ooops you\'ve not selected your menu.<br />';
		}
		if(!validateEmail(emailValue)){
			errorMessage=errorMessage+'Enter a valid email address.<br />';
		}
		
		if(errorMessage.length>0){
			$('#error-message').html('Error Message:<br />'+errorMessage);
			return false;
		}else{
			document.getElementById('mealMenu').submit();
		}
	});
});

/**
 * When page has finished loading, bring in all images with the data-src attribute by setting the src attribute to the value of data-src. 
 */
function init(){
	var imgDefer = document.getElementsByTagName('img');
	for (var i=0; i<imgDefer.length; i++) {
		if(imgDefer[i].getAttribute('data-src')) {
			imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
		}
	}
}
window.onload = init;

/**
 * Determines whether argument is a syntactically valid email address.
 * @param elementValue {String}
 */
function validateEmail(elementValue){  
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
	return emailPattern.test(elementValue);  
}