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
    if(counter >= 0){
      counter +=1;
    } else if (counter < 0){
      counter = 0;
    }
    $('.printCounter').html(counter);
      
  });


  $( "#minus" ).click(function() {
    if(counter >= 0){
      counter -=1;
    } else if (counter < 0){
      counter = 0;
    }
    $('.printCounter').html(counter);
      
  });


  let position = 50;
  $( "#right" ).click(function() {
     position +=5;
     console.log(position);
     $('.frame').css('left', position + "px");
      
  });


  $( "#left" ).click(function() {
    position -=5;
    console.log(position);
    $('.frame').css('left', position + "px");
      
  });


});