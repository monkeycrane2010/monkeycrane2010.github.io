let imageplaceholder = [];

let monkey = document.getElementById('monkey');
let sheep = document.getElementById('sheep');
let banana = document.getElementById('banana');
let dropzoneOne = document.getElementById('dropzone1');
let dropzoneTwo = document.getElementById('dropzone2');
let dropzoneThree = document.getElementById('dropzone3');


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
      dropzoneThree.innerText = "value of THIS: " + id;
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