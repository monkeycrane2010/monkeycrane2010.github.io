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
   constructor(url, id, width, height) {
    this.url = url;
    this.id = id;
    this.width = width;
    this.height = height;
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
         return imageplaceholder;
      }
  
   }

}

let monkey2 = new Imagefactory("images/monkey.png", monkey.id, 20, 30);

monkeybtn.addEventListener("click", function() {
   if(image_placeholder1.hasChildNodes()){
      console.log('1 monkey exists');
     } else{
        monkey2.attribute()
     }
 }, false); // NEED HELP PLEASE - How do I make 'monkey2.add' here, work?
