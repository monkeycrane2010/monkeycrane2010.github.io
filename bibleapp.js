$( document ).ready(function() {
 
  $( ".stamp" ).click(function() {
    $(".stamp-main").toggle();
  });

  $(".stamp-parent1 > li").click(function() {
    $(this).clone().appendTo(".myworkspace").draggable();
  });

  $(".stamp-parent2 > li").click(function() {
    $(this).clone().appendTo(".myworkspace").draggable();
  });

  $(".stamp-parent3 > li").click(function() {
    $(this).clone().appendTo(".myworkspace").draggable();
  });
  



  $( ".mycaption" ).attr("contenteditable", true);




});