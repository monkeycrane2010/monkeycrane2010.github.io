let image_placeholder1 = document.getElementById('img_placeholder1');
let image_placeholder2 = document.getElementById('img_placeholder2');
let imageplaceholder = [];

let monkey = document.getElementById('monkey');
let sheep = document.getElementById('sheep');
let banana = document.getElementById('banana');

let monkeybtn = document.getElementById('monkeybtn');
let leftbtn = document.getElementById('leftbtn');
let rightbtn = document.getElementById('rightbtn');

///////
////   RUN PROGRAM
///////
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

/////////////
//////
/////////////


class Imagefactory {
   constructor(url, id) {
    this.url = url;
    this.id = id;
   }

   attribute(){
     console.log(this.url);
     console.log(this.id);
     console.log('this is ATTRIBUTE');
    
   }

   add(){
      
      for(let x = 0; x <= imageplaceholder.length; x++){
         let imgNew = document.createElement('img');
         imgNew.setAttribute('src', this.url);
         imgNew.setAttribute('id', this.id + "_" + imageplaceholder.length);
         image_placeholder1.appendChild(imgNew);
         imageplaceholder.push(imgNew);
         return imageplaceholder; // REQUIRED for inventory
   }
  
   }

}

let monkey2 = new Imagefactory("images/monkey.png", monkey.id);
let banana2 = new Imagefactory("images/banana.png", banana.id);

monkeybtn.addEventListener("click", function() {
   if(image_placeholder1.hasChildNodes()){
       monkey2.attribute();
     } else {
       monkey2.add();
     }
 }, false); // NEED HELP PLEASE - How do I make 'monkey2.add' here, work


 bananabtn.addEventListener("click", function() {
   if(image_placeholder2.hasChildNodes()){
       banana2.attribute();
     } else {
       banana2.add();
     }
 }, false); 





function moveRight(){
   imageplaceholder[0].setAttribute('style', "position: absolute"); // REQUIRED
   imageplaceholder[0].style.right = 10 + "px";
   console.log(imageplaceholder[0]);
}


function moveLeft(){
   imageplaceholder[0].setAttribute('style', "position: absolute"); // REQUIRED
   imageplaceholder[0].style.left = 5 + "px";
}

rightbtn.addEventListener("click", moveRight, false);
   
leftbtn.addEventListener("click", moveLeft, false);