$( document ).ready(function() {
  $( ".arrow" ).click(function() {
   alert("+New Slide created");
   $(".addslide").after('<div class="singleslide"></div>');
  });

  $( ".box" ).click(function() {
    $(this).css('text-align', 'center').text('hello').toggleClass('selected');
  });

  $( ".box2" ).click(function() {
    $(this).css('text-align', 'center').text('Monkey').toggleClass('selected');
  });

  let counter = 0;

  $( "#delete" ).click(function() {
    console.log('ha ha');
    if($('div').hasClass('selected')){
        alert($('div').hasClass('selected'));
        $('.selected').remove();
    }else{
        alert($('div').hasClass('selected'));
    }
      
  });
  

  $( "#add" ).click(function() {
    counter +=1;
    $('.printCounter').html(counter);
      
  });


  $( "#minus" ).click(function() {
    counter -=1;
    $('.printCounter').html(counter);
      
  });


});