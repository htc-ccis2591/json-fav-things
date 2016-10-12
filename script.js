$(document).ready(function() {


//change Text
$('p').text("Click Here for My Favorite Food!!");
$('p').css('cursor', 'pointer');
//text on click
$('p').on("click", function() {
    $(this).remove();
    $('ul').show();
});
//change title
$('title').text("My Favorite Food!");
//add div
$('body').append('<ul>');
$('ul').hide();
//append question
var createQuestion = function (question, answer) {
    $('ul').append('<li><h3>' + question +'</h3>' + answer +'</li>');
    $('h3').next().hide();
    $('h3').css('cursor', 'pointer');
    $('h3').on("click", function() {
        $(this).next().toggle();
    });
};

//background image
$('body').css('background-image', 'url("image/pho_beef_5.jpg")');

//connect JSON
$.getJSON("jsdata.json", function (data) {
    var i;
    var item;
    
    $.each(data.questions, function (index, item) {
        createQuestion(item.question, item.answer);
    });
}); 


//end tag    
});
/////////
