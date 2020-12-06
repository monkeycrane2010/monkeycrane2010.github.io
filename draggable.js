//
/// IMAGE LIST
//
let sceneBtn = document.getElementById('scene-btn');
let animalBtn = document.getElementById('animal-btn');
    let monkey = document.getElementById('monkey');
    monkey.src = "images/monkey.PNG";

    let sheep = document.getElementById('sheep');
    let banana = document.getElementById('banana');
let fishBtn = document.getElementById('fish-btn');
    let fish = document.getElementById('fish');
    let frog = document.getElementById('frog');
    let octopus = document.getElementById('octopus');
    let penguin = document.getElementById('penguin');
    let shark = document.getElementById('shark');
let peopleBtn = document.getElementById('people-btn');
let textBtn = document.getElementById('text-btn');
let clearBtn = document.getElementById('clear-btn');


let animalList = document.getElementsByClassName('animal-img');
let fishList = document.getElementsByClassName('fish-img');

let images = [];



/* 'IMAGES' TEMPLATE  */
class Images {
  constructor(src, srcwidth, srcheight){
    this.src = src;
    this.srcwidth = srcwidth;
    this.srcheight = srcheight;
  }

  push(){
    images.push(monkey);
    console.log('contents of images ' + images.length);    
  };
  
}



//
/// CANVAS 
//
let whiteboard = document.getElementById('whiteboard');
let whiteboardContext = whiteboard.getContext('2d');



/* 'CANVAS' TEMPLATE  */
class Canvas {
  
  constructor(cwidth, cheight) {
    this.canvaswidth = cwidth;
    this.canvasheight = cheight;
  }
  
  dragover(){
    
    
    whiteboard.addEventListener('dragover', function(e){
      console.log("ClientX is " + e.clientX + "Client Y is " + e.clientY); /// e.client X and Y are GIVEN, YOU DON'T NEED TO CREATE
      console.log("OffsetX is " + e.offsetX + "OffsetY is " + e.offsetY);

    });

    whiteboard.addEventListener('dragenter', function(e){
      whiteboard.style.backgroundColor = 'pink';
    
      
    });
    whiteboard.addEventListener('drop', function(e){
      e.preventDefault();
     
    });

  };

}



//
/// BUTTONS
//

/* Events fired on the SCENE  */
sceneBtn.addEventListener('click', function(e){
   
});


/* Events fired on the ANIMAL  */
animalBtn.addEventListener('click', function(e){
  
  for( let x = 0; x < animalList.length; x++){
      if(animalList[x]. style.display === "grid"){
        animalList[x].style.display = "none";
      } else {
        animalList[x].style.display = "grid";
      }
  }

});

/* Events fired on MONKEY  */
monkey.addEventListener('dragend', function(e){
  console.log('you are dragging MoNKEY');
  images.push(monkey.id);

});

/* Events fired on the FISH  */
fishBtn.addEventListener('click', function(e){
  for( let x = 0; x < fishList.length; x++){
      if(fishList[x].style.display === "grid"){
        fishList[x].style.display = "none";
      } else {
        fishList[x].style.display = "grid";
      }
  }
});

/* Events fired on the PEOPLE  */


/* Events fired on the TEXT  */


/* Events fired on the CLEAR ALL  */
clearBtn.addEventListener('click', function(e){
   box.style.backgroundColor = 'white';
});


//
//
///// RUN PROGRAM
//
//
let canvas1 = new Canvas(300, 300);
canvas1.dragover();




