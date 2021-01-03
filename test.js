//
////   VARIABLES
//
let array = [];
let R;
let G;
let B;

let test1 = document.getElementById('test1');
let randombtn = document.getElementById('randombtn');


//
////   MATH
//

function randombtnActions(){
    
    R = Math.floor((Math.random() * 255) + 1);
    G = Math.floor((Math.random() * 255) + 1);
    B = Math.floor((Math.random() * 255) + 1);
    document.body.setAttribute("style", "background-color: rgb("+ R +", "+ G +", "+ B+")");
    test1.innerHTML = "R: "+ R + " G: " + G + " B: " + B;
 
    
}
randombtn.addEventListener('mousedown', randombtnActions, false);