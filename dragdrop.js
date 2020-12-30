let imageplaceholder = [];

let monkey = document.getElementById('monkey');
let sheep = document.getElementById('sheep');
let banana = document.getElementById('banana');
let dropzoneOne = document.getElementById('dropzone1');
let dropzoneTwo = document.getElementById('dropzone2');


///////
////   DRAG 
///////

function monkeyActions(event) {
  console.log(event.target.id);
  event.dataTransfer.setData("text", event.target.id);
  
}


function sheepActions(event) {
   console.log(event.target.id);
   event.dataTransfer.setData("text", event.target.id);
   
 }


 function bananaActions(event) {
   console.log(event.target.id);
   event.dataTransfer.setData("text", event.target.id);
   
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
sheep.addEventListener('dragstart', sheepActions, false);
banana.addEventListener('dragstart', bananaActions, false);

dropzoneOne.addEventListener('dragover', allowDrop, false);
dropzoneOne.addEventListener('drop', dropzone1, false);

dropzoneTwo.addEventListener('dragover', allowDrop, false);
dropzoneTwo.addEventListener('drop', dropzone2, false);