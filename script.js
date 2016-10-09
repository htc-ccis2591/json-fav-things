$(function () {

    //    //--Creates page, adding content.
    //    var createPage = function () {
    //        $("h1").append("<h2>Click to Reveal a List of Secrets </h2>");
    //        $("#intro").append("<h3>Click on each heading to display information.</h3>");
    //        $("#intro").append("<div id='game'><h2 id='gameh2'>VideoGame</h2></div>");
    //        $("#intro").append("<div id='movie'><h2 id='movieh2'>Movie</h2></div>");
    //        $("#intro").append("<div id='food'><h2 id='foodh2'>Food</h2></div>");
    //
    //        $("#game").append("<p id='gamep' class = 'hide' > I enjoy playing Role Playing Games(RPG) such as the Final Fantasy series, First Person Shooting / Shooter(FPS) games such as Call of Duty(COD) and Black Ops(BO), arcade games such as Metal Slug.</p>");
    //
    //        $("#movie").append("<p id='moviep' class = 'hide' > I enjoyy watching movies of all genres, action, horror, comedies, documentaries, drama, sci-fi, thrillers, and anime.</p>");
    //
    //        $("#food").append("<p id='foodp' class = 'hide' >I love, LOVE food! I mean, who doesn't!? I enjoy food off all nationalities from Asian, Mexican, Thai, Greek, Italian, and American food..</p>");
    //    };

    var createFavorites = function (title, description) {
        $("#fav").append("<h2>" + title + "</h2>");
        $("#fav").append("<p>" + description + "</p>");
    };

    //createPage();

    $("#intro").removeClass("hide");
    $("#intro").append("<p>Click on heading to display favorites.</p>");
    $("#fav").addClass("hide");
    $("h1").append("<h2>My List of Favorites </h2>");

    $.getJSON("data.json", function (data) {
        console.log(data.favoriteThings);
        $.each(data.favoriteThings, function (index, item) {
            createFavorites(item.title, item.description);
        });
    });



    //--OnClick Events
    $("h1").on("click", (function () {
        $("#fav").toggle();
    }));

    //
    //    $("#gameh2").on("click", (function () {
    //        $("#gamep").toggle();
    //    }));
    //
    //    $("#movie").on("click", (function () {
    //        $("#moviep").toggle();
    //    }));
    //
    //    $("#food").on("click", (function () {
    //        $("#foodp").toggle();
    //    }));
});