$( document ).ready(function() {
 

  $( ".stamp" ).click(function() {
    $(".stamp-main").toggle();
  });


  $(".stamp-parent1 > li").click(function() {
    $(this).addClass("sceneclone");
    $(this).clone().appendTo(".cloneditems").draggable();
    $(".sceneclone").click(function(){
      $(this).toggleClass("selected");
    });
  });

  $(".stamp-parent2 > li").click(function() {
    $(this).addClass("sceneclone");
    $(this).clone().appendTo(".cloneditems").draggable();
    $(".sceneclone").click(function(){
      $(this).toggleClass("selected");
    });
  });

  $(".stamp-parent3 > li").click(function() {
    $(this).addClass("sceneclone").clone().appendTo(".cloneditems").draggable();
    $(".sceneclone").click(function(){
      $(this).toggleClass("selected");
    });
  });

 
  $(".delete").click("mouseup", function(){    
    $(".selected").remove();
  });


  $( ".print" ).click(function() {
    window.print();
   });
  
  
  $( ".text" ).click(function() {
    $( ".cloneditems" ).append( "<p>Click to EDIT</p>" );
    $(".cloneditems > p").draggable();
    $(".cloneditems > p").attr("contenteditable", true);
  });


  $( "#start" ).click(function() {
   alert("yay you clicked me");
   $("#0").clone().attr("id", "1").insertAfter("#start");
  });


 
});