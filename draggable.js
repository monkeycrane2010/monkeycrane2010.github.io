let draggedItem = document.getElementById('drag-item');
let box = document.getElementById('box');

let sceneBtn = document.getElementById('scene-btn');
let animalBtn = document.getElementById('animal-btn');
let fishBtn = document.getElementById('fish-btn');
let peopleBtn = document.getElementById('people-btn');
let textBtn = document.getElementById('text-btn');
let clearBtn = document.getElementById('clear-btn');


let animalList = document.getElementsByClassName('animal-img');
let fishList = document.getElementsByClassName('fish-img');

/* Events fired on the drag target  */

box.addEventListener('dragover', function(e){
   console.log("ClientX is " + e.clientX + "Client Y is " + e.clientY); /// e.client X and Y are GIVEN, YOU DON'T NEED TO CREATE
   document.getElementById('box').innerHTML = 'this.src is' + "another test";
   box.style.backgroundColor = 'orange';
});

draggedItem.addEventListener('dragover', function(e){
    console.log ("e clientX "  + e.clientX);
    document.getElementById('replacetext').innerHTML = 'YOU ARE OUTSIDE' + ' ' + 'ClientX'+ e.clientX + ' ' + 'ClientY' + e.clientY; /// WRITE TO DOCUMENT
    box.style.backgroundColor = 'yellow';

});

/* Events fired on the SCENE  */


/* Events fired on the ANIMAL  */
animalBtn.addEventListener('click', function(e){
  for( let x = 0; x < animalList.length; x++){
      if(animalList[x].style.display === "grid"){
        animalList[x].style.display = "none";
      } else {
        animalList[x].style.display = "grid";
      }
  }
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