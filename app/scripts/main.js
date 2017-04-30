// Activate Fullpage
$(document).ready(function() {
	$('#fullpage').fullpage({
	    sectionsColor: ['#845526', '#845526', '#a38c7c', '#70FF99'],
	    anchors:['Page1', 'Page2', 'Page3', 'Page4'],
	    menu: '#Menu',
	    scrollingSpeed: 1000

	});
});

// Activate Fullpage Video
$(document).ready(function () {
    $('.player').mb_YTPlayer();

});

//Hide Fullpage Video Text
$( '.intro_vid' ).fadeOut( 12000, function() {
  // Animation complete.
});


//TEXT GLOW
$.fn.typer = function(text, options){
    options = $.extend({}, {
        char: ' ',
        delay: 1000,
        duration: 600,
        endless: true
    }, options || text);

    text = $.isPlainObject(text) ? options.text : text;

    var elem = $(this),
        isTag = false,
        c = 0;

    (function typetext(i) {
        var e = ({string:1, number:1}[typeof text] ? text : text[i]) + options.char,
            char = e.substr(c++, 1);

        if( char === '<' ){ isTag = true; }
        if( char === '>' ){ isTag = false; }
        elem.html(e.substr(0, c));
        if(c <= e.length){
            if( isTag ){
                typetext(i);
            } else {
                setTimeout(typetext, options.duration/10, i);
            }
        } else {
            c = 0;
            i++;

            if (i === text.length && !options.endless) {
                return;
            } else if (i === text.length) {
                i = 0;
            }
            setTimeout(typetext, options.delay, i);
        }
    })(0);
};

            $('#type').typer(['Interracial marriage in the United States was banned in 1664 and not overturned until 1967', 'Of the 12.5 million Africans shipped to the New World during the Transatlantic Slave Trade, fewer than 388,000 arrived in the United States', 'Harriet Tubman carried a gun with her on the Underground Railroad. If a runaway slave threatened to give up and go back to the plantation, she would point the gun at him and threaten to shoot him dead', 'William Whipple freed his slaves when he signed the Declaration of Independence, because he believed that he could not fight for freedom and own slaves', 'U.S. President James Buchanan regularly bought slaves in Washington, D.C. and quietly freed them in Pennsylvania', 'From 1526 to 1867, some 12.5 million slaves were shipped from Africa to the Americas with only about 10.7 million surviving the journey', 'Slavery was abolished throughout the British Empire in 1833 but the Modern Slavery Act, outlawing human trafficking and forced labour, was only passed in 2015', 'The word ‘slave’ originally came from the Slavonic population of Eastern Europe, who were often enslaved in the middle ages' ]);


