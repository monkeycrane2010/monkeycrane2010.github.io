let imageplaceholder = [];

let monkey = document.getElementById('monkey');
let sheep = document.getElementById('sheep');
let banana = document.getElementById('banana');
let dropzoneOne = document.getElementById('dropzone1');
let dropzoneTwo = document.getElementById('dropzone2');
let dropzoneThree = document.getElementById('dropzone3');


///////
////   SOUND EFFECT
///////
let drum = document.querySelectorAll('.drum');

for (let i = 0; i < drum.length; i++){
   drum[i].style.border = "2px solid orange";
 
   drum[i].addEventListener('mouseover', function(){
      drum[i].setAttribute('title', i);
   }, false);

}




function playSound(){

   let drumsound1 = new Audio('sounds/freesound-org_ajubamusic_1.mp3');
   let drumsound2 = new Audio('sounds/freesound-org_ajubamusic_2.mp3');
   let drumsound3 = new Audio('sounds/freesound-org_Tropical_Musical_sound_3.mp3');

   if(this.id === "D"){
        letterD.style.background = "yellow";
        drumsound1.play();
   } else if(this.id === "R"){
        letterR.style.background = "blue";
        drumsound2.play();
   } else if(this.id === "U"){
      letterU.style.background = "pink";
      drumsound3.play();
   } else {
      console.log("please click on a LETTER");
   }
    
  
  
}

let letterD = document.querySelector('#D');
letterD.addEventListener('click', playSound, false);
let letterR = document.querySelector('#R');
letterR.addEventListener('click', playSound, false);
let letterU = document.querySelector('#U');
letterU.addEventListener('click', playSound, false);


///////
////   DRAG 
///////

function monkeyActions(event) {
   console.log(event.target.id);
  
   if (event.type === "dragstart"){
      event.dataTransfer.setData("text", event.target.id);

   } else if(event.type === "mousedown"){
     monkey.classList.add("imageSelected");
   } 

}



function sheepActions(event) {
   console.log(event.target.id);
  
   if (event.type === "dragstart"){
      event.dataTransfer.setData("text", event.target.id);

   } else if(event.type === "mousedown"){
      sheep.classList.add("imageSelected");
   } 

   
 }



 function bananaActions(event) {
  console.log(event.target.id);
  
   if (event.type === "dragstart"){
      event.dataTransfer.setData("text", event.target.id);

   }

 }


///////
////   DROP ZONE
///////
function allowDrop(event) {
   event.preventDefault();
}



function dropzone1(event) {
   
   event.preventDefault();

   if (event.type === "drop"){
      let data = event.dataTransfer.getData("text");
      event.target.appendChild(document.getElementById(data));
      imageplaceholder.push(data);
      dropzoneThree.innerText = imageplaceholder;
   }

}


function dropzone2(event) {
  
   event.preventDefault();
  
   if (event.type === "drop"){
      let data = event.dataTransfer.getData("text");
      event.target.appendChild(document.getElementById(data));
   }

}

monkey.addEventListener('dragstart', monkeyActions, false);
monkey.addEventListener('mousedown', monkeyActions, false);

sheep.addEventListener('dragstart', sheepActions, false);
sheep.addEventListener('mousedown', sheepActions, false);

banana.addEventListener('dragstart', bananaActions, false);


dropzoneOne.addEventListener('dragover', allowDrop, false);
dropzoneOne.addEventListener('drop', dropzone1, false);

dropzoneTwo.addEventListener('dragover', allowDrop, false);
dropzoneTwo.addEventListener('drop', dropzone2, false);