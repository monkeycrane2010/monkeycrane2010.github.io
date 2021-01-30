$( document ).ready(function() {
    $("#draggable").draggable();
    $("#draggable").resizable();

  

    $("#sheepbtn").on( "click", function() {
      $("#one").append($("<img>").attr("src", "images/sheep.png").draggable());   // CREATE NEW 
      $( "img" ).each(function( index ) {     // EACH
        $(this).attr("id", "sheep"  + index);
        console.log( index + ": " + $( this ).text() );
      });
      $("img").on("mousemove", function() {    // TOGGLE CLASS
        $('h1').html(this.id);
        $(this).addClass('dot');
      });
      $("img").on("mouseleave", function() {    // TOGGLE CLASS
        $(this).removeClass('dot');
      });
    });

    

    
    
 
   

});










