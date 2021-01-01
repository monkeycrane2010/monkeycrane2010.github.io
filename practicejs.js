
let imagesarray = [];


let animalCollection = document.querySelectorAll("img"); // NodeList
//console.log(animalCollection);

let animals = Array.from(animalCollection); // convert to ARRAY
//console.log(animals);

let monkey = document.getElementById("monkey");  
let sheep = document.getElementById("sheep"); 
let frog = document.getElementById("frog");


let monkeybtn = document.getElementById("monkeybtn"); 
let sheepbtn = document.getElementById("sheepbtn"); 
let frogbtn = document.getElementById("frogbtn"); 


let text1 = document.getElementById("text1"); 
let dropzoneOne = document.getElementById("dropzone1"); 



/////
//    Mouse Down
////

//imagesarray.forEach(mouseDown)

imagesarray.forEach(dragStart);
imagesarray.forEach(allowDrop);
imagesarray.forEach(drop);

function dragStart(event){
  event.dataTransfer.setData("text", event.target.id);
}


function allowDrop(event){
  event.preventDefault();
}

function drop(event){
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}




dropzoneOne.addEventListener('drop', function(){
  allowDrop();
  drop();
}, false);


/*
function mouseDown(event){

   this.style.border = "2px solid red";
   let ball = this.getBoundingClientRect();
  


  
    let shiftX = event.clientX - ball.left;
    let shiftY = event.clientY - ball.top;
    

    this.style.position = 'absolute';
    this.style.zIndex = 1000;
   
    document.body.append(this);
  
    moveAt(event.pageX, event.pageY);
  
     // moves the MONKEY at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      this.style.left = pageX - shiftX + 'px';
      this.style.top = pageY - shiftY + 'px';
    }
  
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the ball, remove unneeded handlers
    this.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      this.onmouseup = null;
    };

  
}

monkey.ondragstart = function() {
  return false;
}

sheep.ondragstart = function() {
  return false;
}

frog.ondragstart = function() {
  return false;
}

*/


/////
//     DRAG start
////







/////
//     Image Factory
////
class Imagefactory {
    constructor(animal, classname, i) {
      this.animal = animal;
      this.classname = classname;
      this.i = i;
    }

    attribute(){

      let newimg = document.createElement("img");
      newimg.setAttribute("src", "images/" + this.animal.id + ".png");  
      newimg.setAttribute("class", this.classname);
      newimg.setAttribute("id", this.animal.id + this.i++);
      text1.appendChild(newimg);
      imagesarray.push(newimg);
      console.log(newimg.id);
     // newimg.addEventListener('mousedown', mouseDown, false);
     // newimg.addEventListener('dragstart', dragStart, false);
   
    }   
    
}


let monkey1 = new Imagefactory(monkey, "animal", 1);
let sheep1 = new Imagefactory(sheep, "animal", 1);
let frog1 = new Imagefactory(frog, "fish", 1);



monkeybtn.addEventListener('click', function(){
    monkey1.attribute();
}, false)

sheepbtn.addEventListener('click', function(){
    sheep1.attribute();
 
}, false)

frogbtn.addEventListener('click', function(){
    frog1.attribute();
}, false)
