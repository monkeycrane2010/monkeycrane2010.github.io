let box = document.getElementById('box');


window.addEventListener('keydown', whichKey, false);

function whichKey(event){
   box.style.fontSize ="30px";
   box.style.color = "red";
   switch(event.keyCode){
    case 102:
    // code block
    document.getElementById("box").innerHTML = "RIGHT keyboard " + event.keyCode;
    break;
    case 100:
    // code block
    document.getElementById("box").innerHTML = "LEFT keyboard " + event.keyCode;
    break;
    case 104:
      // code block
      document.getElementById("box").innerHTML = "UP keyboard " + event.keyCode;
      break;
  default:
    // code block
    document.getElementById("box").innerHTML = "keyboard " + event.keyCode;
   }
};

/////
//     Image Factory
////



