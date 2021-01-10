let displaybox = document.getElementById('entry');
let box = document.getElementById('box');

box.getBoundingClientRect();


/////
//    MOUSE DOWN
////
let beforeX;
let beforeY;
let currentX;
let currentY;
let newX;
let newY;


box.addEventListener('mousedown', function(event){
  
  
  displaybox.innerHTML = "event.ClientX:  " + event.clientX + " event.clientY " + event.clientY;
  beforeX = event.clientX - event.offsetX;
  beforeY = event.clientY = event.clientY;



}, false);



box.addEventListener('mousemove', function(event){
  
  event.preventDefault();
  currentX = event.clientX - beforeX;
  currentY = event.clientY - beforeY;
  console.log("Current X: " + currentX);
  console.log("Current Y: " + currentY);

}, false);

/////
//   MOUSE UP
////
box.addEventListener('mouseup', function(event){

  newX = currentX;
  newY = currentY;
  console.log('mouseup event');

}, false);




newimg.addEventListener('mousedown', function(event){
  // (1) prepare to moving: make absolute and on top by z-index
  newimg.style.position = 'absolute';
  newimg.style.zIndex = 1000;

  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(newimg);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    newimg.style.left = pageX - newimg.offsetWidth / 2 + 'px';
    newimg.style.top = pageY - newimg.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
    tester.innerHTML = "id: " + newimg.id + " event.pageX is:"+ event.pageX + " event.pageY is:  " + event.pageY; /// this just prints TEXT
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  newimg.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    newimg.onmouseup = null;
  };
 
}, false);