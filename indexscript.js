$( document ).ready(function() {
   let slidenumber = 1;

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
  
  
    $( ".addslide" ).click(function() {
     alert("+New Slide created");
     $(".addslide").after('<div class="singleslide"></div>');
    });

    $('.singleslide').each(function(index){
      alert("hello " + index);

    });

  
   
  });

    
