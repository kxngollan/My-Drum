//Attribute names.
let drum = document.querySelectorAll(".drum-note");
let heater1 = new Audio("/Sounds/Heater1.mp3");
let heater2 = new Audio("/Sounds/Heater2.mp3");
let heater3 = new Audio("/Sounds/Heater3.mp3");
let heater4= new Audio("/Sounds/Heater4.mp3");
let kick = new Audio("/Sounds/Kick.mp3");
let kicknHat = new Audio("/Sounds/KicknHat.mp3");
let openHH = new Audio("/Sounds/OpenHH.mp3");
let clap = new Audio("/Sounds/Clap.mp3");
let cloasedHH = new Audio("/Sounds/ClosedHH.mp3");

// Make Sound Function!!!!

function drumSounds(key){

switch(key) { 
  case "q":
    heater1.play() 
  break;
  case "w":
    heater2.play() 
  break;
  case "e":
    heater3.play() 
  break;
  case "a":
    heater4.play()
  break;
  case "s":
    kick.play() 
  break;
  case "d":
    kicknHat.play() 
  break;
  case "z":
    openHH.play() 
  break;
  case "x":
    clap.play() 
  break;
  case "c":
    cloasedHH.play() 
   break;
   default: console.log("Hello World");
}
}


// Detecting Button Press
for (let i = 0; i <drum.length; i++){
    drum[i].addEventListener("click", function(){ 
   let btnLetter = this.innerHTML;
  drumSounds(btnLetter);
  buttonFlash(btnLetter);
  })

}


// Detecting Keyboard Press

document.addEventListener("keydown", (event) => {
  let keyLetter = event.key.toLowerCase()
  drumSounds(keyLetter);
  buttonFlash(keyLetter);
})



// Button flash

function buttonFlash(btnPlaying) {

  let pressedBtn = document.querySelector("#" + btnPlaying);
  
  pressedBtn.classList.add("flash");

  setTimeout(function() {
    pressedBtn.classList.remove("flash")
  }, 200);
}
