var buttonList = document.querySelectorAll(".drum");
for (var i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", function() {
      // alert("I got clicked!")
      var buttonInnerHTML = this.innerHTML;
      playSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    })

}

document.addEventListener("keydown", function(e) {
  playSound(e.key);
  buttonAnimation(e.key);
})

function playSound(buttonInnerHTML) {
  switch (buttonInnerHTML) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kickBase = new Audio("sounds/kick-bass.mp3");
      kickBase.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();


// active class code

// var current = document.querySelectorAll(".white");
//
// if (current.length > 0) {

    //method 1
//   current[0].classList.remove("white");

    //method2
//   current[0].className = current[0].className.replace(" white", " red");
//
// }
  //method 1
// this.classList.add("white");

  //method 2
// this.className += " white";
