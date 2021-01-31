$( document ).ready(function() {
 
  $( ".scene" ).click(function() {
    
    $(".stamp-parent1").toggle();
    $(".stamp-parent1 > li").each(function() {
      $(this).draggable();
    });

  });


  $( ".animal" ).click(function() {
    $(".stamp-parent2").toggle();
    $(".stamp-parent2 > li").each(function() {
      $(this).draggable();
    });

  });

  $( ".people" ).click(function() {
    $(".stamp-parent3").toggle();
    $(".stamp-parent3 > li").each(function() {
      $(this).click(function() {
        $(this).clone().appendTo(".myworkspace").draggable();
      });
    });
  });



  $( ".mycaption" ).dblclick(function() {
    $(this).attr("contenteditable", true);
  });




});