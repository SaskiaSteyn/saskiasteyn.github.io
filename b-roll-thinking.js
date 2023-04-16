var bubble1 = document.getElementById('tiny_bubble1');
var bubble2 = document.getElementById('tiny_bubble2');
var bubble3 = document.getElementById('tiny_bubble3');
var bubble4 = document.getElementById('tiny_bubble4');
var bubble5 = document.getElementById('tiny_bubble5');
var bubble6 = document.getElementById('tiny_bubble6');
var bubble7 = document.getElementById('tiny_bubble7');
var garden = document.getElementsByClassName('garden');
var anvil = document.getElementById('anvil');
var scissors = document.getElementById('scissors');
var scissorsText = document.getElementById('cut_text');
var clickScissors = document.getElementById('click');
var dennis = document.getElementById('Dennis_in_the_ligh');
var audio1 = document.getElementById('myAudio');
var audio2 = document.getElementById('myAudio2');

var bubbles = [bubble1, bubble2, bubble3, bubble4, bubble5, bubble6, bubble7, garden[0], anvil, scissors, scissorsText, clickScissors];
var i = 0;

var timer = setInterval(function(){
    if(i >= bubbles.length){
        clearInterval(timer)
    } else {
        //If the array above is altered, this number might need to change
        if(i === 0){
            audio1.play();
        }
        if(i === 8){
            audio2.play();
        }
        if(i === 7){
            for(j = 0; j < i; j++){
                bubbles[j].style.display = 'none';
            }
            dennis.style.display = 'none';
            bubbles[i].style.display = 'block';
        } else {
            bubbles[i].style.visibility = 'visible';
        }        
        i++;
    }

}, 500);
