$(document).ready(function () {

    var favoriteThings = '#favorite-things';
    var createThings = function (name, description, image) {
        $(favoriteThings).append('<h3>' + name + '</h3>');
        $(favoriteThings).append('<p>' + description + '</p>');
        $(favoriteThings).append('<img src="' + image + '">');
        $(favoriteThings).append('<br>');
    }

    $('h1').html('My Favorite Things!');
    $('h2').html('Click here to see my favorite things.');

    $('h2').on('click', (function () {
        $('h2').remove()
        $('#favorite-things').toggle();
    }));

    $.getJSON('data.json', function (data) {
        var i;
        var item;
        for (i = 0; i < data.favThings.length; i++) {
            item = data.favThings[i];
            createThings(item.name, item.description, item.image);
        }

    });
});