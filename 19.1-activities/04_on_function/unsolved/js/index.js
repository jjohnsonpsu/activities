// .on event listener documentation - https://api.jquery.com/on/#on-events-selector-data-handler

// Step 1: Hide a div
$("#button1").on("click ", function(){
    $('.hideMe').slideToggle();
});

// Step 2: Change a color
$('#button2').on("click", function(){
    $('.cssChange').css('background-color', 'orange')
});

// Step 3: Append content
$('#button3').on("click", function(){
    $(".appendMe").append('blah blah blah');

});
