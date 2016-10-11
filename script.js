//ready function
$(function () {
	"use strict";

	var myHeading = function () {

		$("#favorites").before("<h1>Click here to see a few of my favorite things</h1>");
		$("#favorites").addClass("hide");
		$('h1').on('click', function () {
			$("#favorites").slideDown(2000);
			console.log("you clicked");
			$("p, img").hide();
		});

	};

	var createMyFavorites = function (thing, image, info) {

		var $favorites = $("#favorites");

		$favorites.append('<section id="' + thing + '">');

		$("#" + thing).append("<h3>" + thing + "</h3>");
		$("#" + thing).append('<img src=" ' + image + '">');
		$("#" + thing).append("<p>" + info + "</p>");
	};

	myHeading();

	$.getJSON("data.json", function (data) {
		$.each(data.favorites, function (index, item) {
			createMyFavorites(item.thing, item.image, item.info);
		});
		$('h3').on('click', function () {
			$(this).siblings().toggle();
			console.log("you clicked");

		});
		$('img').css("display", "block");
		$('img').css("margin", "auto");
		$('p').css("color", "#D4CA6A");

	});

});