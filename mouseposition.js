let displaybox = document.getElementById('entry');

let box = document.getElementById('box');
let boxframe = box.getBoundingClientRect();




/////
//     MOUSE POSITION , X , Y
////


window.addEventListener('mousemove', showPosition, false);


function showPosition(event){
  if(event.type === "mousemove"){
     displaybox.innerHTML = "X: " + event.x + " " + "Y: " + event.y; // raw number
  }
}


window.addEventListener('mousedown', testbox, false);
function testbox(event){  
  console.log(boxframe);
}