let monkey = document.getElementById("monkey");


monkey.onmousedown = function(event) {

   let shiftX = event.clientX - monkey.getBoundingClientRect().left;
   let shiftY = event.clientY - monkey.getBoundingClientRect().top;
 
   monkey.style.position = 'absolute';
   monkey.style.zIndex = 1000;
   document.body.append(monkey);
 
   moveAt(event.pageX, event.pageY);
 
   // moves the MONKEY at (pageX, pageY) coordinates
   // taking initial shifts into account
   function moveAt(pageX, pageY) {
     monkey.style.left = pageX - shiftX + 'px';
     monkey.style.top = pageY - shiftY + 'px';
   }
 
   function onMouseMove(event) {
     moveAt(event.pageX, event.pageY);
   }
 
   // move the ball on mousemove
   document.addEventListener('mousemove', onMouseMove);
 
   // drop the ball, remove unneeded handlers
   monkey.onmouseup = function() {
     document.removeEventListener('mousemove', onMouseMove);
     monkey.onmouseup = null;
   };
 
 };
 
 monkey.ondragstart = function() {
   return false;
 }