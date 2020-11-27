//
/////  WHITEBOARD
//
let whiteboard = document.getElementById('whiteboard');
let whiteboardContext = whiteboard.getContext('2d');

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

let animalLibrary = [];
//
//// BUILD IMAGE TEMPLATE
//



class Image {
    constructor(src, xpos, ypos, draggable = 'true') {
      this.image = src;
      this.xpos = xpos;
      this.ypos = ypos;
    }

   

   add(){
        clickCounter += 1;
        console.log("this.image clicked " + " " + this.image + ", "+ clickCounter);
        if (clickCounter >= 1) {
         // whiteboardContext.drawImage(this.image, this.xpos, this.ypos)
        //  this.xpos += 30;
        //  this.ypos += 15;
        whiteboardContext(this.src.CreateElement(this));
        this.src.setAttribute("draggable", true);
        console.log(e.clientX)
        } else {
             console.log("None, 0 images exist");
        }
       
   };

   delete(){
     animalLibrary.pop();
     console.log("print animal Library" + " " + animalLibrary.keys());
     console.log("delete POP");
  };

   moveLeft(){
        this.xpos -= 5;
        console.log("Move LEFT" + this.xpos);
   };

   
   moveRight(){
       this.xpos += 10;
       console.log("Move RIGHT" + this.xpos);
   };

   print(){
        console.log("this is the PRINT:" + this.xpos + " " + this.ypos);
   };


}


//
////  PROPERTIES OF ANIMALS
//
let elephant1 = new Image(elephant, 10, 5);


//
////  RUN PROGRAM
//
document.getElementById('add').addEventListener ('click', function() {
    elephant1.add();
}, false);

document.getElementById('left').addEventListener ('click', function() {
     elephant1.moveLeft();
 }, false);

 document.getElementById('right').addEventListener ('click', function() {
     elephant1.moveRight();
 }, false);

 document.getElementById('clearall').addEventListener ('click', function() {
     elephant1.delete();
 }, false);
