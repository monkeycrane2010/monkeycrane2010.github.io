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
    $('#listitem').append(listTemplate);
    // Remove Selected Items
    $('button.remove').on("click", function(){
        $(this).parent().parent().css("border", "red solid 4px").remove();
    });

});








});