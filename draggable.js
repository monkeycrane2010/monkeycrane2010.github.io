let imageplaceholder = [];

let addbtn = document.getElementById('addbtn');
let boxforNew = document.getElementsByClassName("new");
let animalCollection = document.querySelectorAll(".animal");
let fishCollection = document.querySelectorAll(".fish");

let monkey = document.getElementById('monkey');
let sheep = document.getElementById('sheep');
let banana = document.getElementById('banana');

let dropzoneOne = document.getElementById('dropzone1');
let dropzoneTwo = document.getElementById('dropzone2');
let dropzoneThree = document.getElementById('dropzone3');


///////
////   ADD NEW
///////
let animalList = Array.from(animalCollection);  // converts NodeList to Array
let fishList = Array.from(fishCollection);

function imagelibrary(){
  
   for(animal of animalList){
     
      if(animal.style.display == "none"){
         animal.style.display = "block";
      } else {
         animal.style.display = "none";
      }

   }
   for(fish of fishList){
      if(fish.style.display == "none"){
         fish.style.display = "block";
      } else {
         fish.style.display = "none";
      }

   }

}

addbtn.addEventListener('click', imagelibrary, false);

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