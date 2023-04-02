function typeEffect(element, speed, displayBtn) {
	var text = textArray[index];
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      console.log("CLEAR INTERVAL")
      clearInterval(timer);
      
    }
  }, speed);
}

// application
var speed = 75;
var p = document.querySelector('p');

var button = document.querySelector('a');

var textArray = ["I do not know why i am here", "But i can tell you i have the best lawyer", "Soooooo... let me go or i will call them", "", "Pleasssseee... let me go pleasssee..."];
var index = 0;
var delay = (textArray[2].length+10) * speed + speed;


// type affect to header
typeEffect(p, speed, false);

// type affect to body
var textLoop = setInterval(function(){
  p.style.display = "inline-block";
  index++;
  if(index >= textArray.length) {
    clearInterval(textLoop);
    button.style.visibility = 'visible';
  } else {
    typeEffect(p, speed, true);
  }
  
}, delay);
