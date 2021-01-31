$( document ).ready(function() {
 
    $( ".canvas-child1" ).click(function() {
        $(this).clone().appendTo($(this)).draggable();

      });


});