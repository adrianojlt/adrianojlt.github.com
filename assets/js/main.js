
function loadPages() {

	var nav = $('#mainMenu a');

	$(nav[0]).parent().addClass('active');

	var width = 0;

	//$(window).resize(function() {console.log($(this).width())});
	
	nav.on('click', function(e) {

		// mobile devices ... hide menu when a menu entry is clicked ...
		//$('.btn-navbar').trigger('click');
		//console.log($('.btn-navbar'));

		e.preventDefault();

		var htmUrl = 'partials/' + $(this).attr('href');

		$('#mainMenu li').removeClass('active');
		$(this).parent().addClass('active');

		$('#mainContent').hide().load(htmUrl, function(){
      		$(this).fadeIn(400);
    	});
	});
}