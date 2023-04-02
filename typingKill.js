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

var textArray = ["No i will never kill Faye", "They are my best friend. But...", "She did get a lot of money", "", "And... i really like money."];
var index = 0;
var delay = (50) * speed + speed;


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
