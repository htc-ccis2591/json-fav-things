//ready function
$(function () {
	"use strict";

	var myHeading = function () {

		$("#favorites").before("<header><h1>Click here to see a few of my favorite things</h1></header>");
		$("#favorites").addClass("hide");
		$('h1').on('click', function () {
			$("#favorites").slideDown(4000);
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
			$(this).siblings().toggle(500);
		});
		$('img').css("display", "block");
		$('img').css("margin", "auto");
		$('p').css("color", "#D4CA6A");

		//$("#Literature:nth-child(3)").replaceWith("<h3>Classic Literature</h3>");

	});

});