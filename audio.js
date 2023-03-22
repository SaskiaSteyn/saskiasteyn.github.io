window.onload = function(){
    var audio = document.getElementById("end_credits").play();
    audio.src = "media/closing-credits_mixdown.mp3";
    audio.load();
    audio.play();
}