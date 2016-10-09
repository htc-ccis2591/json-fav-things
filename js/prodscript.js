//Start of the document
$(document).ready(function () {
    //var addStuffHere = "#addstuff";
    //var subjectHeaders = 'h2'



    var createMyFavThings = function (subject, description, videoID) {
        var favVideoID = "#" + videoID;

        $('#addstuff').append('<div class="row">');
        $('#addstuff').append('<div id= "' + videoID + '" class="col-md-6">');
        $(favVideoID).append('<h2 id= "' + subject + '">' + subject + '</h2>');
        $(favVideoID).append('<p>' + description + '</p>');
        $("#addstuff").append('<div id="video ' + videoID + ' " class="col-md-6">');
        $(favVideoID).append('<iframe src="https://www.youtube.com/embed/' + videoID + '"></iframe>');

        $('p').hide();
        $('iframe').hide();
        $('h2').hide();
        
        $('button').click(function () {
            $(this).remove();
            $('h2').show();
        });
        
        $('<h2 id= "' + subject + '">' + subject + '</h2>').click(function(){
            $('p').show();
            $('iframe').show();
        });

    }




    $('h2').click(function () {
        //$().show(); I need this to be the ID of the div's before H2 We want the ID to be the same name as the subject name as that is what is unique for our project.
    });

    /*var mySubjects = function (subject, description, videoID){
    };*/

    $.getJSON("myThings.json", function (data) {
        var item;
        $.each(data.myThings, function (index, item) {
            createMyFavThings(item.subject, item.description, item.videoID);
        });
    });

    $('#addstuff').append('<button id="favoritethingbutton">Click here to see my favorite things</button>');

});