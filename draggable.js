
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

let tester = document.getElementById("tester"); 
let text1 = document.getElementById("text1"); 
let dropzoneOne = document.getElementById("dropzone1"); 


///////
////   SOUND EFFECT
///////
let drum = document.querySelectorAll('.drum');  // this is just for visual

for (let i = 0; i < drum.length; i++){
   drum[i].style.border = "2px solid orange";
 
   drum[i].addEventListener('mouseover', function(){
      drum[i].setAttribute('title', i);
   }, false);

}



//real code starts here
function playSound(){

   let drumsound1 = new Audio('sounds/freesound-org_ajubamusic_1.mp3');
   let drumsound2 = new Audio('sounds/freesound-org_ajubamusic_2.mp3');
   let drumsound3 = new Audio('sounds/freesound-org_Tropical_Musical_sound_3.mp3');

   if(this.id === "D"){
        letterD.style.background = "yellow";
        drumsound1.play();
   } else if(this.id === "R"){
        letterR.style.background = "blue";
        drumsound2.play();
   } else if(this.id === "U"){
      letterU.style.background = "pink";
      drumsound3.play();
   } else {
      console.log("please click on a LETTER");
   }
    
  
  
}

let letterD = document.querySelector('#D');
letterD.addEventListener('click', playSound, false);
let letterR = document.querySelector('#R');
letterR.addEventListener('click', playSound, false);
let letterU = document.querySelector('#U');
letterU.addEventListener('click', playSound, false);


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
      

      console.log(newimg);
    //  newimg.addEventListener('mousedown', mouseDown, false);
     
      


      newimg.addEventListener('dragstart', function(event){
        event.dataTransfer.setData("text", event.target.id);
        console.log(event.type);
      }, false);


      dropzoneOne.addEventListener('dragover', function(event){
        event.preventDefault();
      }, false);


      dropzoneOne.addEventListener('drop', function(event){
        event.preventDefault();
        let data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
      }, false);

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


