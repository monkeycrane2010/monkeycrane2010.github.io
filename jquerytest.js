$( function() {
    $("#draggable").draggable();
    $("#draggable").resizable();
  });



  $("button").on( "click", function() {
   
    $("#one").append($("<img>").attr("src", "images/sheep.png").draggable());   // CREATE NEW
   

    $( "img" ).each(function( index ) {    // EACH
      $(this).attr("id", "sheep"  + index);
      console.log( index + ": " + $( this ).text() );
    });

    $("#sheep2").css("border", "10px dotted orange");
  });


 