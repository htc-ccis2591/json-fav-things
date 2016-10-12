$(document).ready(function () {
        var $body = $("body").addClass("body");
        var $message = $('#favthings').addClass("h3");
        $('#favorite-things').append('<p><button>Click me</button></p>');
        var $button = $(':button');
        var $otherH3$ = $('#favorite-things').append('<p id="otherH3">Now click each item to expand</p>').first().addClass("ahhh");
        $('#otherH3').hide();

        var GetData = function (favorite, favoritedescription, image) {
                //after button is clicked add paragraph to list items and change color to white
                $button.on("click", function () {
                        $button.hide();
                        $('#otherH3').show();

                        var display = function () {
                                var $Div = $('<div id="things"> </div>');
                                $('#favorite-things').append($Div);
                                var $H3 = $('<h3>' + favorite + '</h3>').addClass("h3");
                                $('#things').append($H3);
                                var $P = $('<p>' + favoritedescription + '</p>').addClass("p");
                                $('#things').append($P);
                                //$('#items').append('<img src="' + image + '">');
                                var $Img = $('<img src="' + image + '">');
                                $('#things').append($Img);
                                //make sure paragraph hides till heading is clicked
                                $P.hide();
                                $Img.hide();

                                $H3.on("click", function () {
                                        $P.toggle(1000);
                                        $Img.toggle(1000);
                                });
                        };
                        display();
                });
        }
        $.getJSON("things.json", function (data) {

                var i;
                var item;

                for (i = 0; i < data.items.length; i++) {
                        item = data.items[i];
                        GetData(item.favorite, item.favoritedescription, item.image);
                        console.log(item);
                }
        });
});