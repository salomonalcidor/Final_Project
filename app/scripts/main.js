// Activate Fullpage
$(document).ready(function() {
	$('#fullpage').fullpage({
	    sectionsColor: ['#327695', '#DA90D9', '#C2BAE8', '#70FF99', '#FF14B1'],
	    anchors:['Page1', 'Page2', 'Page3', 'Page4', 'Page5'],
	    menu: '#Menu',
	    scrollingSpeed: 1000

	});
});

// Activate Fullpage Video
$(document).ready(function () {
    $(".player").mb_YTPlayer();

});

//Hide Fullpage Video Text
$( ".intro_vid" ).fadeOut( 12000, function() {
  // Animation complete.
});

