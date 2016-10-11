//ready function
$(function () {
	"use strict";

	var createMyFavorites = function (thing, image, info) {

		var favorites = ("#favorites");
		//$(favorites).before$('<div id ="' + thing + '">');

		$(favorites).append("<h3 id =" / +thing + "> " / +thing + "</h3>");
		$(favorites).append('<img src=" ' + image + '">');
		$(favorites).append("<p>" + info + "</p>");
		//$("img, p").addClass("hide");
		//$(favorites).after("<div>");

	};
	console.log(createMyFavorites);


	$.getJSON("data.json", function (data) {
		$.each(data.favorites, function (index, item) {
			createMyFavorites(item.thing, item.image, item.info);
			var thing = item.thing;
			//$('p').insertBefore('<div id ="' + thing + '">');
		});



		//$("h3[1]").insertBefore("<div id=music>");

		$('h3').on('click', function () {
			$("p, img").fadeToggle();
			console.log("you clicked");
		});
	});



});