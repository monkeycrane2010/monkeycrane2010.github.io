
/////
//    VARIABLES
////
let imagesarray = [];


let animalCollection = document.querySelectorAll("img"); // NodeList
//console.log(animalCollection);

let animals = Array.from(animalCollection); // convert to ARRAY
//console.log(animals);

let monkey = document.getElementById("monkey");  
let cheep = document.getElementById("cheep"); 
let chomp = document.getElementById("chomp");


let monkeybtn = document.getElementById("monkeybtn"); 
let cheepbtn = document.getElementById("cheepbtn"); 
let chompbtn = document.getElementById("chompbtn"); 

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
//    DRAG START & DROP ZONE
////

function dragStart(event){
  event.dataTransfer.setData("text", event.target.id);
}


function allowDrop(event){
  event.preventDefault();
}


function dropzone1(event) {
  event.preventDefault();
  if (event.type === "drop"){
 
    let data = event.dataTransfer.getData("text");
     event.target.appendChild(document.getElementById(data));
     tester.innerHTML = data; //// SANITY CHECK, remove afterwards

  }
}




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
      newimg.addEventListener('dragstart', dragStart, false);
      dropzoneOne.addEventListener('dragover', allowDrop, false);
      dropzoneOne.addEventListener('drop', dropzone1, false);
    }   
    
}


let monkey1 = new Imagefactory(monkey, "animal", 1);
let cheep1 = new Imagefactory(cheep, "fish", 1);
let chomp1 = new Imagefactory(chomp, "animal", 1);



monkeybtn.addEventListener('click', function(){
    monkey1.attribute();
}, false)

cheepbtn.addEventListener('click', function(){
    cheep1.attribute();
 
}, false)

chompbtn.addEventListener('click', function(){
    chomp1.attribute();
}, false)
