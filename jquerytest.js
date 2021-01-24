$( function() {
    $("#draggable").draggable();
    $("#draggable").resizable();


    $("#sheepbtn").on( "click", function() {
   
      $("#one").append($("<img>").attr("src", "images/sheep.png").draggable());   // CREATE NEW
  
        
      $( "img" ).each(function( index ) {    // EACH
        $(this).attr("id", "sheep"  + index);
        console.log( index + ": " + $( this ).text() );
      });
  
     
  
      
    $("img").on("click", function(event) {   // CLASS
      $('h1').html(this.id);
      $(this).toggleClass("selected");
  
    });
  

  });
  
  


  $("#newtextbtn").on( "click", function() {
   
    $("#one").append($("<p>Edit this</p>").css("color", "green").css("font-size", "20px").attr("contentEditable", true).draggable());   // CREATE TEXT

});



  
   
  $("#deletebtn").on( "click", function() {
  
    $('h1').html("you just clicked" + ", " + this.id);
    $('#one').empty();
  
  });
    
   
  


















});



 