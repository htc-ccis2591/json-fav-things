//Start of the document
$(document).ready(function () {
    
    //Start of function scope for my favorite things.
    

    var createMyFavThings = function (subject, description, videoID) {
        
        var favSubject = subject;
        var favDescription = description;
        var favVideo = videoID;
        var idSelector = "#addstuff"
        var headerID = "#" + subject;
        var subjectHeader = "h2"
        var subjectDescription = "p"
        

        $(idSelector).append('<h2 id = " ' + subject + ' ">' + subject + '</h2>');
        $(idSelector).append('<p>' + description + '</p>');
        $(idSelector).append('<iframe src = "https://www.youtube.com/embed/' + videoID + '">' + videoID + '</iframe>');    
        //$(subjectDescription).hide(); //When applied this is providing an in-line display to be overridden.
    }
    
        $('#addstuff').append('<button id="favoritethingbutton">Click here to see my favorite things</button>');
    

        $('button').click(function () {
        $(this).remove();
        $('h2').show();
        //$('iframe').hide();
        //$('p').hide();
        
    });
    
    //JSON 
    
    $.getJSON("myThings.json", function (data){
        var item;
        console.log(data.myThings);
        
        //Start iterating through items to add them to the dom.
        
        $.each (data.myThings, function (index,item){
            
            createMyFavThings(item.subject, item.description, item.videoID);
            
        }); //End of each loop iteration
        
    }); //End of JSON
    
});//end of document.ready function.