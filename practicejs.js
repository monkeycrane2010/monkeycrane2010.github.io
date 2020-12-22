let whiteboard = document.getElementById('whiteboard');



let firstparagraph = document.getElementById('plaintext');
let xpos = document.getElementById('cursorx');
let ypos = document.getElementById('cursory');

let dragged;
let monkey = document.getElementById('monkey');
let sheep = document.getElementById('sheep');
let banana = document.getElementById('banana');




function dragStart(event){
 
 let target = event.target;
 console.log(target)
  if(target && target.nodeName === 'IMG') {
   dragged = target;
   event.dataTransfer.setData('text', event.target.id);
   event.dataTransfer.dropEffect = 'move';
  }
}

monkey.addEventListener('dragstart', dragStart, false);
sheep.addEventListener('dragstart', dragStart, false);
banana.addEventListener('dragstart', dragStart, false);


///
///  DROP TARGET
//
function dragOver(event){
    event.preventDefault();

}

function dragEnter(event){
    //whiteboard.style.backgroundColor = 'orange'
    firstparagraph.style.color = 'green'
    firstparagraph.innerText = 'Drag Enter';
    xpos.innerText = 'Client x = ' + event.clientX;
    ypos.innerText = 'Client y = ' + event.clientY;

    const target = event.target;
    if(target){
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
        whiteboard.style.background = '#1f904e';
        console.log(event)
    }
  
 }


 function onDrop(event){
    const target = event.target;
    if(target){
        whiteboard.style.backgroundColor = '';
        event.preventDefault();
        dragged.parentNode.removeChild(dragged);
        dragged.style.opacity = '';
        target.appendChild(dragged);
        
    }

}

whiteboard.addEventListener('dragover', dragOver, false);
whiteboard.addEventListener('dragenter', dragEnter, false);
whiteboard.addEventListener('drop', onDrop, false);

