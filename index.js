for (var i = 0; i < 7; i++) {
  document.querySelectorAll('button')[i].addEventListener("click", function() {
    var key = this.innerHTML;
    makesound(key);
    buttonAnimation(key);
  });
}

document.addEventListener("keydown",function(event){
  makesound(event.key);
  buttonAnimation(event.key);
})

function makesound(alpha){
  switch (alpha) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
    console.log(key);
  }
}

function buttonAnimation(a)
{
  document.querySelector("."+a).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+a).classList.remove("pressed");
  }, 100)
}
