//
////   VARIABLES
//
let textbox1 = document.getElementById('box1');
let box2 = document.getElementById('box2');


let rightbtn = document.getElementById('rightbtn');
let leftbtn = document.getElementById('leftbtn');
let upbtn = document.getElementById('upbtn');
let downbtn = document.getElementById('downbtn');

//
////  MOVE RIGHT
//

let xpos = 0;
let ypos = 0;


function moveright(event){
    xpos = xpos - 5;
    box2.setAttribute("style", "right:" + xpos + "px");
    textbox1.innerHTML = "X pos: " + xpos + " Y pos: " + ypos;
 }


 function moveleft(event){
    xpos = xpos + 5;
    box2.setAttribute("style", "right:" + xpos + "px");
    textbox1.innerHTML = "X pos: " + xpos + " Y pos: " + ypos;
 }

 function moveup(event){
    ypos = ypos - 5;
    box2.setAttribute("style", "top:" + ypos + "px");
    textbox1.innerHTML = "X pos: " + xpos + " Y pos: " + ypos;
 }

 function movedown(event){
   ypos = ypos + 5;
   box2.setAttribute("style", "top:" + ypos + "px");
   textbox1.innerHTML = "X pos: " + xpos + " Y pos: " + ypos;
 }

 rightbtn.addEventListener('mousedown', moveright, false);
 leftbtn.addEventListener('mousedown', moveleft, false);
 upbtn.addEventListener('mousedown', moveup, false);
 downbtn.addEventListener('mousedown', movedown, false);