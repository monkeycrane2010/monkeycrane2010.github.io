

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
let firststage = document.getElementById("firststage"); 

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
        let newimg = document.createElement("IMG");
        newimg.setAttribute("src", "images/" + this.animal.id + ".png");  
        newimg.setAttribute("class", this.classname);
        newimg.setAttribute("id", this.animal.id + this.i++);
        text1.appendChild(newimg);
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



/////
//    Monkey , actions
////
monkey.onmousedown = function(event) {

    let shiftX = event.clientX - monkey.getBoundingClientRect().left;
    let shiftY = event.clientY - monkey.getBoundingClientRect().top;
  
    monkey.style.position = 'absolute';
    monkey.style.zIndex = 1000;
                         // JUST checking  console.log(this);  SUCCESS -this- refers to image
    document.body.append(monkey);
  
    moveAt(event.pageX, event.pageY);
 
    // moves the MONKEY at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      monkey.style.left = pageX - shiftX + 'px';
      monkey.style.top = pageY - shiftY + 'px';
                            /// JUST check  NOO -  -this- refers to WINDOW
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
                           /// JUST check  NOO -  -this- refers to WINDOW
    }
  
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the ball, remove unneeded handlers
    monkey.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      monkey.onmouseup = null;
   
    };
  
  };
  
  monkey.ondragstart = function() {
                         /// JUST checking  console.log(this);  SUCCESS -this- refers to image
    return false;
  }