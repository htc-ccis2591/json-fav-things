//Start of the document
$(document).ready(function () {

    //Start of function scope for my favorite things.

    $('#addstuff').append('<button id="favoritethingbutton">Click here to see my favorite things</button>');

    var createMyFavThings = function (subject, description, videoID) {
        
        var favSubject = subject;
        var favDescription = description;
        var youTubeID = videoID;
        var headerID = "#" + subject;
        var favButton = "button"
        var idSelector = "#addstuff";
        var subjectHeader = "h2";
        var subjectDescription = "p";
        var favVideo = "iframe";
        
        
        $(idSelector).append('<h2 class = "' + subject + '">' + subject + '</h2>');
        $(idSelector).append('<p class = "' + subject + '">' + subject + '</p>');
        $(idSelector).append('<iframe class = "' + subject + '">' + subject + 'src = "https://www.youtube.com/embed/' + videoID + '"></iframe>');
        
        
        $(subjectDescription).hide();
        $(favVideo).hide();
        $(subjectHeader).hide();
        
        $(favButton).click(function(){
            $(this).remove();
            $(subjectHeader).show();
            
        });
        
        //Troubleshoot more what is happening is that the subject is tied in with headerID with concatenation and is passing through the for each loop which is why it is showing all of the subject descriptions when the h2 is clicked.
        
        //We need to get it seperated so that when the user clicks on each h2 that it only shows content for that specific h2. 
        
        $(subjectHeader).click(function(){
            $(subjectHeader).toggle();
        });
        
        //JSON 
    }

    $.getJSON("myThings.json", function (data) {
        var item;
        console.log(data.myThings);
        $.each(data.myThings, function (index, item) {
            createMyFavThings(item.subject, item.description, item.videoID);
        }); 
    });
    //Goal: I want to add a figcaption element after every iframe.
    //$(subjectDescription).hide(); //When applied this is providing an in-line display to be overridden.
}); //end of document.ready function.