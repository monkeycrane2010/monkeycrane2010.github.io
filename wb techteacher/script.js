$( document ).ready(function() {
    // Handler for .ready() called.

// Search 
$('#basic-addon1').on('click', function(){
    let str = $('#searchbox').val();
    alert(str);
});

// Clicks on gray buttons
$('input.btn-secondary').on("click", function(){
   
    let datafield = $(this).prev().prev().data('topic');
    let listTemplate = '<tr><td>' + datafield + '</td><td><button class="btn btn-warning remove">Remove</button></td></tr> ';
    let paragraphTemplate = '<p>' + datafield + '</p>'; 
    $('#listitem').append(listTemplate);
    console.log(listTemplate);
    $('#coin1').append(paragraphTemplate); //// ERROR , help please???
    console.log(paragraphTemplate);
    // Remove Selected Items
    $('button.remove').on("click", function(){
        $(this).parent().parent().remove();
    });
  

});
let newvalue = 0;
let newdisplay = $('#display1').css('font-size', '30px').html(newvalue);
$('#testadd').on('click', function(){
    if( newvalue === "0" || newvalue < "15"){
        newvalue +=1;
        newdisplay.html(newvalue);
       
    } else {
        alert('stop for ADD')
    }
});
$('#testminus').on('click', function(){
    if( newvalue > "0" || newvalue === "15"){
        newvalue -=1;
        newdisplay.css('font-color','red').html(newvalue);
    } else{
        alert('stop for minuS')

    };
});





});