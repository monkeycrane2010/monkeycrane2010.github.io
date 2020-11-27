let draggedItem = document.getElementById('drag-item');
let box = document.getElementById('box');

/* Events fired on the drag target */
draggedItem.addEventListener("dragstart", function(event) {
    console.log(this.id);
    document.getElementById("demo").innerText = "Started to drag the p element.";
  });


box.addEventListener('dragover', function(e){
   console.log(this.id + " LA LA LA, success");
   box.style.backgroundColor = 'orange';
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
  animal: [],
  people: []
}