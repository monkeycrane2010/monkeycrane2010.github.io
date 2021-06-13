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
$('#searchbtn').on('click', function(){
    $('h5:contains(Poll Everywhere)').parent().removeClass('highlight');
   let searchtext = $('#searchbox').val();
   alert(searchtext);
   if(searchtext.toLowerCase().includes('poll') || searchtext.toLowerCase().includes('everywhere')){
     $('h5:contains(Poll Everywhere)').parent().addClass('highlight');
   } else {
     alert('no match');
   }

 });
 
 
// CHECKBOX
 $('.bytopic input').on('click', function(){
   
   if($(this).attr('value') == "Car"){
    $('h5:contains(Poll Everywhere)').parent().toggleClass('show-item');   
   } else if($(this).attr('value') == "Boat"){
    $('h5:contains(Mobile Device)').parent().toggleClass('show-item');
     
   }
  
}); 


// GRAY BUTTON
$('input.btn-secondary').on("click", function(){
   
    let datafield = $(this).prev().prev().data('topic');
    let listTemplate = '<tr><td>' + datafield + '</td><td><button class="btn btn-warning remove">Remove</button></td></tr> ';
    $('#listitem').append(listTemplate);
    // Remove Selected Items
    $('button.remove').on("click", function(){
        $(this).parent().parent().remove();
    });
  

});



 
 


});