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
        alert('stop for MINUS' + "numberInput is: " + "12")

    };
});


// Worksheet
$('#pollsearch').on('click', function(){
    $( "img[data-topic*='poll']" ).css("background-color", "green");
});

$('#classroomsearch').on('click', function(){
    $( "img[data-topic*='classroom']" ).css("background-color", "orange");
});

// ////
let array = [];
$('#wordlist li').each(function(){
    let print = $(this).html();
    array.push(print);
    return array
});
console.log(array);

$('button#alpha').on('click', function(){
    let newArray = array.sort();
    console.log(array)

    let item = array[2]
    $('h2#test').append(item);
    
    $('#wordlist li').each(function(){
        $(this).html(newArray);
    });
    return array
});

console.log(array);




});