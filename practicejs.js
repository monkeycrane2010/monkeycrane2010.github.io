
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



/////
//    Mouse Down
////

imagesarray.forEach(mouseDown)

function mouseDown(event){
  
   console.log(this);
   console.log(this + " " + "I am free");
   this.style.border = "2px solid red";


  /*
    let shiftX = event.clientX - document.getElementById(this).getBoundingClientRect().left;
    let shiftY = event.clientY - document.getElementById(this).getBoundingClientRect().top;
    

    document.getElementById(this).style.position = 'absolute';
    document.getElementById(this).style.zIndex = 1000;
   
    document.body.append(document.getElementById(this));
  
    moveAt(event.pageX, event.pageY);
  
     // moves the MONKEY at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      document.getElementById(this).style.left = pageX - shiftX + 'px';
      document.getElementById(this).style.top = pageY - shiftY + 'px';
    }
  
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the ball, remove unneeded handlers
    document.getElementById(this).onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      document.getElementById(this).onmouseup = null;
    };

  */
  
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
  
         newimg.addEventListener('mousedown', mouseDown, false);
        
     
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
