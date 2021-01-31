$( document ).ready(function() {
 

  $( ".stamp" ).click(function() {
    $(".stamp-main").toggle();
  });

  $(".stamp-parent1 > li").click(function() {
    $(this).clone().appendTo(".cloneditems").draggable();
  });

  $(".stamp-parent2 > li").click(function() {
    $(this).clone().appendTo(".cloneditems").draggable();
  });

  $(".stamp-parent3 > li").click(function() {
    $(this).clone().appendTo(".cloneditems").draggable();
  });
  

  
  $( ".text" ).click(function() {
    $( ".cloneditems" ).append( "<p>Click to EDIT</p>" );
    $(".cloneditems > p").draggable();
    $(".cloneditems > p").attr("contenteditable", true);
  });
 
 


});