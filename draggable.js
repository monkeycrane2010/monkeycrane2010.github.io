let draggedItem = document.getElementById('drag-item');
let box = document.getElementById('box');


/* Events fired on the drag target  */

box.addEventListener('dragover', function(e){
   console.log("ClientX is " + e.clientX + "Client Y is " + e.clientY); /// e.client X and Y are GIVEN, YOU DON'T NEED TO CREATE
   document.getElementById('box').innerHTML = 'this.src is' + "another test";
   box.style.backgroundColor = 'orange';
});

draggedItem.addEventListener('dragover', function(e){
    console.log ("e clientX "  + e.clientX);
    document.getElementById('replacetext').innerHTML = 'YOU ARE OUTSIDE' + ' ' + 'ClientX'+ e.clientX + ' ' + 'ClientY' + e.clientY; /// WRITE TO DOCUMENT
    box.style.backgroundColor = 'yellow';

});



/////  RAW FILE
//

let bear = document.createElement('img');
bear.src = "bear.PNG";

let elephant = document.createElement('img');
elephant.src = "images/images_for_whiteboard/elephant.PNG";

let giraffe = document.createElement('img');
giraffe.src = "images/images_for_whiteboard/giraffe.PNG";

let gorilla = document.createElement('img');
gorilla.src = "images/images_for_whiteboard/gorilla.PNG";

let hippo = document.createElement('img');
hippo.src = "images/images_for_whiteboard/hippo.PNG";


let imageCollection = {
  scene: [],
  animal: [monkey, hippo, giraffe],
  people: []
}