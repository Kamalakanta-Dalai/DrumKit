// const name = prompt("Hey..What's Your Name?");

// alert(`Hello ${name}, Welcome to KK Drum Kit`);
//For detecting click event
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInNerHTML = this.innerHTML;
    makeSound(buttonInNerHTML);
    buttonAnimation(buttonInNerHTML);
  });
}

//FOR DETECTING KEYBOARD PRESS

// document.addEventListener("keypress", myFunction);

// function myFunction() {
//   alert("i'm clicked");
// }
// document.addEventListener("keypress", function () {
//   alert("i'm clicked");
// });
document.addEventListener("keypress", function (event) {
  // instead of (event) u can also write (e)
  // console.log(event.key); //here also instead of .key u can use ["key"]
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("kick-bass.mp3");
      audio.play();

      break;
    case "a":
      var audio = new Audio("tom-2.mp3");
      audio.play();

      break;
    case "s":
      var audio = new Audio("tom-3.mp3");
      audio.play();

      break;
    case "d":
      var audio = new Audio("tom-4.mp3");
      audio.play();

      break;
    case "j":
      var audio = new Audio("snare.mp3");
      audio.play();

      break;
    case "k":
      var audio = new Audio("crash.mp3");
      audio.play();

      break;
    case "l":
      var audio = new Audio("tom-1.mp3");
      audio.play();

      break;

    default:
      console.log(key);
      break;
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
