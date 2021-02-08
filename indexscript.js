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
  
  
    $( ".addslide" ).click(function() {
     alert("yay you clicked me");
     $( ".replaceme" ).replaceWith( $( "h1" ) );
     $(".singleslide").clone().insertAfter(this);
    });

    $( "#commentsubmit" ).click(function() {
      let email = $("#email").val();
      let comment = $("#comment").val();    
      alert( "EMAIL: " + " " + email + " , "+ "YOUR COMMENT: " + comment);
    });
  
  
   
  });

    
