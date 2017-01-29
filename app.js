$(function(){

	$('.nav-side .nav-toggle').click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass('nav-open');
	});

});