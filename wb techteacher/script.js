$( document ).ready(function() {
    // Handler for .ready() called.


// Goal 
$('#goalsave').on('click', function(){
    let goalinput = $('#goalinput').val();
    let goaloutput = '<li> ' + goalinput + '<button class="btn btn-warning removegoal">Remove</button></li>';
    $('#goaloutput').append(goaloutput); 
  
    $('button.removegoal').on("click", function(){
        $(this).parent().css('border', '3px solid brown');
        // Remove previous goals
        $(this).parent().remove();
        if($('button.removegoal') == 3){
            alert('max limit of 3 goals reached. REQUIRED: delete some')
        }
    });
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

/*
function alphabetize(){
    $("#list1 .notecard").sort(function(a, b) {
        var aText = $(a).text(), bText = $(b).text();
        return aText < bText ? -1 : aText > bText ? 1 : 0;
    }).appendTo('h4');
}
alphabetize();
*/

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