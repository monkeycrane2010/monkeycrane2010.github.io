let monkey = document.getElementById('monkey');
let sheep = document.getElementById('sheep');
let banana = document.getElementById('banana');


sheep.addEventListener('mousedown', mouseDown);

function mouseDown(e){
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', mouseUp);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mouseMove(e){
       let newX = prevX - e.clientX;
       let newY = prevY - e.clientY;

       let rect = sheep.getBoundingClientRect();

       sheep.style.left = rect.left - newX + "px";
       sheep.style.top = rect.top - newY + "px";

       prevX = e.clientX;
       prevY = e.clientY;

    }

    function mouseUp(){
       window.removeEventListener('mousemove', mouseMove);
       window.removeEventListener('mouseup', mouseUp);
    }
}