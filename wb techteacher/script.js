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


// Worksheet
$('#pollsearch').on('click', function(){
    $( "img[data-topic*='poll']" ).css("background-color", "green");
});

$('#classroomsearch').on('click', function(){
    $( "img[data-topic*='classroom']" ).css("background-color", "orange");
});

// ////
let array = [];
$('.soundmusicorig li').each(function(){
    let print = $(this).html();
    array.push(print);
    return array
});


$('button#alpha').on('click', function(){
    array.sort();
    console.log(array);
});

$('button#next').on('click', function(){
    $('.outline').children().next().addClass("outline");
    
    console.log($('.outline').next().addClass("outline"));
    
});

$('button#previous').on('click', function(){
    if($('.outline').children().prev().hasClass("outline")){
        $('.outline').children().prev().text();
    }
    
    console.log( $('.outline').prev().hasClass("outline"));
});




});