var DrumBtns = document.querySelectorAll(".drum").length;

for (var i = 0; i < DrumBtns; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
       
    var buttonInnerHTML = this.innerHTML;
    PlaySound(buttonInnerHTML);
   
  });
        
    
}

//Code for detecting when buttons are pressed

document.addEventListener("keypress", function(event) {
  PlaySound(event.key);
  
});


function PlaySound(key){
  switch (key) {
    case "w":
            
        let crash = new Audio('sounds/crash.mp3');
        crash.play();

        break;

    case "a":	
                  
        let tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

        case "s":	         
        let kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

        case "d":	         
        let tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

        case "j":	         
        let tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

        case "k":	         
        let tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

        case "l":	         
        let snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;

    default: console.log(buttonInnerHTML)
        
  }



}