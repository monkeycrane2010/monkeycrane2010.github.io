let whiteboard = document.getElementById('whiteboard');

let monkey = document.getElementById('monkey');
let sheep = document.getElementById('sheep');
let banana = document.getElementById('banana');



let firstparagraph = document.getElementById('plaintext');
let xpos = document.getElementById('cursorx');
let ypos = document.getElementById('cursory');

let el = document.querySelector('.item');
el.addEventListener('mousedown', mouseDown);

function mouseDown(e){
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', mouseUp);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mouseMove(e){
       let newX = prevX - e.clientX;
       let newY = prevY - e.clientY;

       let rect = el.getBoundingClientRect();

       el.style.left = rect.left - newX + "px";
       el.style.top = rect.top - newY + "px";

       prevX = e.clientX;
       prevY = e.clientY;

    }

    function mouseUp(){
       window.removeEventListener('mousemove', mouseMove);
       window.removeEventListener('mouseup', mouseUp);
    }
}