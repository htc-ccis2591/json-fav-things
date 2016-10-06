//ready function
$(function () {
	"use strict";

	var createMyFavorites = function (thing, image, info) {
		var favorites = "#favorites";

		$(favorites).append("<h3>" + thing + "</h3>");
		$(favorites).append('<img src=" ' + image + '">');
		$(favorites).append("<p>" + info + "</p>");
	};


	$.getJSON("favThings.json", function (data) {
		$.each(data.favorites, function (index, item) {
			createMyFavorites(item.thing, item.image, item.info);
			console.log(item);


		});
	});
});