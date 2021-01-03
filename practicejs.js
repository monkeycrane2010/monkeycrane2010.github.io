
/////
//    VARIABLES
////
let imagesarray = [];


let animalCollection = document.querySelectorAll("img"); // NodeList
//console.log(animalCollection);

let animals = Array.from(animalCollection); // convert to ARRAY
//console.log(animals);

let frog = document.getElementById("frog");  
let penguin = document.getElementById("penguin"); 
let octopus = document.getElementById("octopus");


let frogbtn = document.getElementById("frogbtn"); 
let penguinbtn = document.getElementById("penguinbtn"); 
let octopusbtn = document.getElementById("octopusbtn"); 
let deletebtn = document.getElementById("deletebtn"); 

let tester = document.getElementById("tester"); 
let librarybox = document.getElementById("librarybox"); 
let deletequeue = document.getElementById("deletequeue"); 













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
      librarybox.appendChild(newimg);
      imagesarray.push(newimg);
      

      console.log(newimg);

      /////
      ///   Sample code from helpful website tutorial for drag n' drop
      /////

      newimg.addEventListener('mousedown', function(event){
        // (1) prepare to moving: make absolute and on top by z-index
        newimg.style.position = 'absolute';
        newimg.style.zIndex = 1000;

        // move it out of any current parents directly into body
        // to make it positioned relative to the body
        document.body.append(newimg);

        // centers the ball at (pageX, pageY) coordinates
        function moveAt(pageX, pageY) {
          newimg.style.left = pageX - newimg.offsetWidth / 2 + 'px';
          newimg.style.top = pageY - newimg.offsetHeight / 2 + 'px';
        }

        // move our absolutely positioned ball under the pointer
        moveAt(event.pageX, event.pageY);

        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }

        // (2) move the ball on mousemove
        document.addEventListener('mousemove', onMouseMove);

        // (3) drop the ball, remove unneeded handlers
        newimg.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          newimg.onmouseup = null;
        };
       
      }, false);

      newimg.ondragstart = function() {
        tester.innerText = newimg.id; // TANIA testing
        newimg.classList.add("selected"); // TANIA testing
        
        return false;
      };


      function deleteON(){
        if(newimg.classList.contains("selected")){
          deletequeue.appendChild(newimg); 
          deletequeue.remove();
        }
      }

      deletebtn.addEventListener('mousedown', deleteON, false);
     
     
  }





}

let frog1 = new Imagefactory(frog, "fish", 1);
let penguin1 = new Imagefactory(penguin, "animal", 1);
let octopus1 = new Imagefactory(octopus, "fish", 1);



frogbtn.addEventListener('click', function(){
    frog1.attribute();
}, false)

penguinbtn.addEventListener('click', function(){
    penguin1.attribute();
}, false)

octopusbtn.addEventListener('click', function(){
    octopus1.attribute();
}, false)

