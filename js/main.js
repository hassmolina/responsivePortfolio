$(document).ready(function() {
    $('#navbar').affix({
        offset: {
			top: $('header').height()
		}
	});

$('.box').click( function() {
    $(this).toggleClass('clicked');
});
});

$(document).ready(function(){



resize();

	// $(window).resize(function() {
	// 	console.log("RESIZE");
	// 	resize();
	// });

});



function pageRedirectOriginal() {
  console.log("entró")
    window.location.href = "https://hassmolina.github.io/DesktopPort/";

}
function resize() {
console.log(resize)

	var tam = $("body").width();
	if ( tam  > 0 && tam < 480) {
		$(".mobile").show();
		$(".tablet").hide();
		$(".desktop").hide();
    //$("html").css("overflow-y", "scroll");
    //$("html").css("overflow", "");
	} else if ( tam  > 480 && tam < 1020) {
		$(".mobile").hide();
		$(".tablet").show(pageRedirectOriginal);
		$(".desktop").hide();
  } else {
		$(".mobile").hide();
		$(".tablet").hide();
		$(".desktop").show(pageRedirectOriginal);
	}
}
