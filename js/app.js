$(document).ready(function(){

	$('.dropdown-menu a').on('click', function () {
		var shit = $(this).parent().parent().prev().text(); // text()
		console.log(shit);
		$(this).parent().parent().prev().html($(this).html() + '<div class="alert alert-warning alert-dismissible" role="alert"><span id="fuck" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">&times;</span></div><script type=text/javascript>document.getElementById("fuck").addEventListener("click", function(e){$(this).parent().parent().html("'+shit+'");e.stopPropagation();}, true)');
	})

});