$( document ).ready(function() {
    // Handler for .ready() called.

// Search 
$('#basic-addon1').on('click', function(){
    let str = $('#searchbox').val();
    alert(str);
});

// Clicks on gray buttons
$('input.btn-secondary').on("click", function(){
    let test = $(this).prev().css({"border": "2px solid green"});
    let datafield = $(this).prev().data('topic');
    console.log('you clicked ' + test );
    console.log('DATA: ' + datafield );
    datafield.append()

});









});