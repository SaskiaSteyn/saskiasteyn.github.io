//list of words that are used in letterFadeInWord function
var taglines = ["Ask yourself...", "Will Faye make it?", "Download the comic and see!", "Forgetful Faye", "Tucking Fabulous"];

//getting all elements that have the class .tagline
//Currently just 1 h1 tag in black.html
var tagline = $('.tagline');

//current position in taglines array
var pos = 0;

//initial call to letterFadeInWord function. 
tagline.text("");
letterFadeInWord(taglines[pos]);
pos++;

setInterval(function() {
    if (pos == taglines.length) {
    navigateAway();
    } else {
    tagline.text("");
    letterFadeInWord(taglines[pos]);
    pos++;
    }
}, 10000);

function letterFadeInWord(word) {
    for (var i = 0; i < word.length; i++) {
    var newEL = $("<span/>").text(word[i]).css({
        opacity: 0
    });
    newEL.appendTo(tagline);
    newEL.delay(i * 50);
    newEL.animate({
        opacity: 1
    }, 5100);
    }
    
}

function navigateAway(){
  
    // Something you want delayed.
    window.location.href = "funeral.html";
              
  }

