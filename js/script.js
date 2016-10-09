$(document).ready(function () {
    //alert('The DOM is ready sir!');

    //Hide my three things
    $('.header').hide();
    $('.softwaredev').hide();
    $('.compgaming').hide();
    $('.music').hide();
                     
    // Start click events for my favorite things.
    
    //This click function removes the favorite thing button from the HTML DOM and then it hides the compgaming and music class which is associated with all of the fields for the other two parts.
    
    $('#favoritethingbutton').click(function () {
        $(this).remove();
        $('.softwaredev').hide();
        $('#softwaredevheader').show();
        $('#compgamingheader').show();
        $('#musicheader').show();
        $('.compgaming').hide();
        
    });
    
    //This click function progresses through the site by now only showing the competitive gaming section and hiding the rest of the content.
    
    $('#softwaredevheader').click(function (){
        $('.softwaredev').show();
        $('.compgaming').hide();
        $('#compgamingheader').show();
        $('#musicheader').show();
        $('.music').hide();

    });
    
    //This click event brings you to the last part of my favorite things.
    
    $('#compgamingheader').click(function () {
        $('.compgaming').show();
        $('#musicheader').show();
        $('.softwaredev').hide();
        $('.music').hide();
        
    }); 
    
    $('#musicheader').click(function () {
        $('#musicheader').show();
        $('#compgamingheader').show();
        $('#softwaredevheader').show();
        $('.music').show();
        $('.softwaredev').hide();
        $('.compgaming').hide();
    
    });
    
    //Needs parameters....
    //End of click events for favorite things.
                                   
    
    
});