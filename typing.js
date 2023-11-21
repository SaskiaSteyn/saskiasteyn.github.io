function typeEffect(element, speed, displayBtn) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
      if(displayBtn){
        button.style.visibility = 'visible';
      }
    }
  }, speed);
}


// application
var speed = 75;
var h5 = document.querySelector('h5');
var p = document.querySelector('p');
var delay = h5.innerHTML.length * speed + speed;
var button = document.getElementById('first_question');

// type affect to header
typeEffect(h5, speed, false);


// type affect to body
setTimeout(function(){
  p.style.display = "inline-block";
  typeEffect(p, speed, true);
}, delay);
