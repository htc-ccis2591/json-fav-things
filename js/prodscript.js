//Start of the document
$(document).ready(function () {
    
    var addStuffHere = "#addstuff";
    var subjectHeaders = 'h2';

    var createMyFavThings = function (subject, description, videoID, figText, myClass) {
        
        var favVideoID = "#" + videoID;

        $(addStuffHere).append('<div class="row">');
        $(addStuffHere).append('<div id= "' + videoID + '" class="col-md-6">');
        $(favVideoID).append('<h2 id="' + subject + '">' + subject + '</h2>')
        $(subjectHeaders).hide();

        $(favVideoID).append('<p class="' + myClass + '">' + description + '</p>');
        $('p').hide();

        $(addStuffHere).append('<div id="video ' + videoID + ' " class="col-md-6">');
        $(favVideoID).append('<iframe class="' + myClass + '" src="https://www.youtube.com/embed/' + videoID + '"></iframe>');
        $('iframe').hide();
        $(addStuffHere).append('<figcaption class="' + myClass + '">' + figText + '</figcaption');
        $('figcaption').hide();

        //Click events

        $('#Programming').click(function () {
            $('.softwaredev').show();
            $('.compgaming').hide();
            $('.musiccontent').hide();
            $('.andreasenfamily').hide();
            $('.luxury').hide();
        });

        $('#Gaming').click(function () {
            $('.compgaming').show();
            $('.softwaredev').hide();
            $('.musiccontent').hide();
            $('.andreasenfamily').hide();
            $('.luxury').hide();
        });

        $('#Music').click(function () {
            $('.musiccontent').show();
            $('.compgaming').hide();
            $('.softwaredev').hide();
            $('.andreasenfamily').hide();
            $('.luxury').hide();
        });

        $('#Family').click(function () {
            $('.andreasenfamily').show();
            $('.softwaredev').hide();
            $('.compgaming').hide();
            $('.musiccontent').hide();
            $('.luxury').hide();
        });

        $('#Autos').click(function () {
            $('.luxury').show();
            $('.softwaredev').hide();
            $('.compgaming').hide();
            $('.musiccontent').hide();
            $('.andreasenfamily').hide();
        });
    }

    $.getJSON("myThings.json", function (data) {
        var item;
        $.each(data.myThings, function (index, item) {
            createMyFavThings(item.subject, item.description, item.videoID, item.figText, item.myClass);
        });
    });

    $('#addstuff').append('<button id="favoritethingbutton">Click here to see my favorite things</button>');

    $('button').click(function () {
        $(this).remove();
        $(subjectHeaders).show();
    });


});