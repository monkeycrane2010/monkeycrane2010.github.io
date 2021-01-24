$( function() {
    $( "#draggable" ).draggable();
    $( "img" ).resizable();
  });



  $("button").on( "click", function() {
    let counter;
    counter = 2;
    for(x=0; x <= counter; x++){
       $("#one").append($("<img>").attr("src", "images/sheep.png").attr("id", x).draggable());
    }

  });

  $("button").on( "click", function() {
    let counter;
    counter = 2;
    for(x=0; x <= counter; x++){
       $("#one").append($("<img>").attr("src", "images/sheep.png").attr("id", x).draggable());
    }

  });

 