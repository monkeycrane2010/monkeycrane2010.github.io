let box = document.getElementById('box');
window.addEventListener('keydown', whichKey, false);

function whichKey(event){
   box.style.fontSize ="30px";
   box.style.color = "red";
   switch(event.keyCode){
    case 102:
    // code block
    document.querySelector(".right").style.display = "block";
    document.getElementById("box").innerHTML = "RIGHT keyboard " + event.keyCode;
    break;
    case 100:
    // code block
    document.querySelector(".left").style.display = "block";
    document.getElementById("box").innerHTML = "LEFT keyboard " + event.keyCode;
    break;
    case 104:
      // code block
      document.querySelector(".up").style.display = "block";
      document.getElementById("box").innerHTML = "UP keyboard " + event.keyCode;
      break;
    case 98:
    // code block
    document.querySelector(".down").style.display = "block";
    document.getElementById("box").innerHTML = "DOWN keyboard " + event.keyCode;
    break;
    case 65:
      // code block
    document.getElementById("box").innerHTML = "A keyboard " + event.keyCode;
    break;
    case 83:
      // code block
    document.getElementById("box").innerHTML = "S keyboard " + event.keyCode;
    break;
    case 32:
      // code block
    document.getElementById("box").innerHTML = "SPACEBAR keyboard " + event.keyCode;
    break;
    case 13:
    // code block
    document.getElementById("box").innerHTML = "ENTER keyboard " + event.keyCode;
    break;
  default:
    // code block
    document.getElementById("box").innerHTML = "keyboard " + event.keyCode;
   }

  
};