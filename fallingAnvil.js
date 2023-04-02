var div = document.querySelector('div');

setInterval(function(){
    div.style.visibility = 'visible';
}, 3500);

setInterval(function(){
    var url = window.location.toString();
    window.location.href = url.replace('faye_anvil.html', 'drink.html');
  }, 3800);