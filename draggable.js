let image_placeholder1 = document.getElementById('img_placeholder1');
let imageplaceholder = [];

let monkey = document.getElementById('monkey');
let sheep = document.getElementById('sheep');
let banana = document.getElementById('banana');

let monkeybtn = document.getElementById('monkeybtn');


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
   constructor(url, width, height) {
    this.url = url;
    this.width = width;
    this.height = height;
   }

   attribute(){
     console.log(this.url);
     console.log(this.width);
     console.log('this is ATTRIBUTE');
   }

   add(){
      
      for(let x = 0; x < 1; x++){
         let imageNew = document.createElement('img');
         imageNew.setAttribute('src', this.url);
         imageNew.setAttribute('id', x);
         imageNew.setAttribute('style', "position: absolute");
         image_placeholder1.appendChild(imageNew);
         imageplaceholder.push(imageNew);
         return imageplaceholder;
      }
  
   }

}

let monkey2 = new Imagefactory("images/monkey.png", 20, 30);

let counter = 0;

function monkey2add(){
      let imageNew;
      imageNew = document.createElement('img');
      imageNew.setAttribute('src', "images/monkey.png");
      imageNew.setAttribute('id', "monkey" + counter);
      image_placeholder1.appendChild(imageNew);
      counter++;
   return imageplaceholder.push(imageNew);
   
}

monkeybtn.addEventListener("click", monkey2add, false); // NEED HELP PLEASE - How do I make 'monkey2.add' here, work?