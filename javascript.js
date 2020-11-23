
//
/////  COUNTER
//
let clickCounter = 0;

//
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

let animalLibrary = [bear, elephant, giraffe, gorilla, hippo];
//
//// BUILD IMAGE TEMPLATE
//

class Image {
    constructor(src, xpos, ypos) {
      this.image = src;
      this.xpos = xpos;
      this.ypos = ypos;
    }

   add(){
        clickCounter += 1;
        console.log("this.image clicked " + " " + this.image + ", "+ clickCounter);
        document.body.appendChild(this.image);
        
   };

   moveLeft(){
        this.xpos -= 3;
        console.log("Move LEFT");
   };

   
   moveRight(){
       this.xpos += 10;
       console.log("Move RIGHT");
   };

   print(){
        console.log("this is the PRINT:" + this.xpos + " " + this.ypos);
   };


}


//
////  PROPERTIES OF ANIMALS
//

let bear1 = new Image(bear, 40, 10);
let bear2 = new Image(bear, 80, 20);
let elephant1 = new Image(elephant, 0, 0);

//
/// CANVAS INVENTORY
//
let whiteboard =[];


//
////  RUN PROGRAM
//
document.getElementById('add').addEventListener ('click', function() {
    alert('clicked Add' );
    bear1.add();
    elephant1.add();
}, false);