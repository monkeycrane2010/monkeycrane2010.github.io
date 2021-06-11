$( document ).ready(function() {
    // Handler for .ready() called.


// Goal 
$('#goalsave').on('click', function(){
    let goalinput = $('#goalinput').val();
    let goaloutput = '<li> ' + goalinput + ' </li>';
    if( $('#goaloutput li').length == 3){
        alert('List limit reached. You must delete an item')
    } else{
        $('#goaloutput').append(goaloutput); 
    };
    
});

// Search 
$('#basic-addon1').on('click', function(){
    let str = $('#searchbox').val();
    alert(str);
});

// Clicks on gray buttons
$('input.btn-secondary').on("click", function(){
   
    let datafield = $(this).prev().prev().data('topic');
    let listTemplate = '<tr><td>' + datafield + '</td><td><button class="btn btn-warning remove">Remove</button></td></tr> ';
    $('#listitem').append(listTemplate);
    // Remove Selected Items
    $('button.remove').on("click", function(){
        $(this).parent().parent().remove();
    });
  

});
let newvalue = 0;
let newdisplay = $('#display1').css('font-size', '30px').html(newvalue);


$('#testadd').on('click', function(){
    if( newvalue === "0" || newvalue < "12"){
        newvalue +=1;
        newdisplay.html(newvalue);
       
    } else {
        alert('Limit reached ' + "12")
    }
});
$('#testminus').on('click', function(){
    if( newvalue > "0" || newvalue === "12"){
        newvalue -=1;
        newdisplay.css('font-color','red').html(newvalue);
    } else{
        alert('stop for MINUS')

    };
});


// Worksheet
$('#searchbtn').on('click', function(){
    let searchtext = $('#searchbox').val();
    alert(searchtext);
   if(searchtext.toLowerCase().includes('poll') || searchtext.toLowerCase().includes('everywhere') || searchtext.toLowerCase().includes('poll everywhere')){
     console.log('success')
     console.log(searchtext.toLowerCase());
     $('h5:contains(Poll Everywhere)').parent().addClass('show-item');
 
   } else{
     console.log('no match')
   }
 });
 
 
 
 $('.bytopic input').on('click', function(){
   
   if($(this).attr('value') == "Car"){
     $('h5:contains(Poll Everywhere)').parent().toggleClass('show-item');  
     
   } else if($(this).attr('value') == "Boat"){
     
   $('h5:contains(Mobile Device)').parent().toggleClass('show-item');
     
   }
   // KEEP THIS TO CHECK 'value' of checkbox
   // console.log($(this).attr('value'));
 }); 
 
 


});