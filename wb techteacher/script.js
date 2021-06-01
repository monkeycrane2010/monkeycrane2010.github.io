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
    let listTemplate = '<p><span class="p-2">'+ datafield +'</span> <button class="btn btn-warning">Remove</button></p>';
    $('#listitem').append(listTemplate);

});

// Remove Selected Items






});