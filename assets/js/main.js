
$(document).ready(function() {

	var nav = $('#mainMenu a');

	$(nav[0]).parent().addClass('active');
	
	nav.on('click', function(e) {

		e.preventDefault();

		var htmUrl = 'partials/' + $(this).attr('href');

		$('#mainMenu li').removeClass('active');
		$(this).parent().addClass('active');

		$('#mainContent').hide().load(htmUrl, function(){
      		$(this).fadeIn(400);
    	});
	});

});