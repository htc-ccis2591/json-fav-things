//ready function
$(function () {
	"use strict";




	var createMyFavorites = function (thing, image, info) {

		var $favorites = "#favorites";
		//$(favorites).prepend('<div id ="' + thing + '">');
		$(favorites).append("<h3>" + thing + "</h3>");
		$(favorites).append('<img src=" ' + image + '">');
		$(favorites).append("<p>" + info + "</p>");
		$("img, p").addClass("hide");
		//$(favorites).append("<div>");
	};
	//console.log(createMyFavorites);

	$.getJSON("data.json", function (data) {
		$.each(data.favorites, function (index, item) {
			createMyFavorites(item.thing, item.image, item.info);
			$("#favorites").find('h3');
			$("h3").on('click', function () {
				//$("#favorites").children();
				console.log("you clicked");
				$("p, img").toggleClass("hide");
				//console.log(item);
				//$(this).find("img, p").toggle();
			});
			//$("img, p").addClass("hide");
		});


	});

	var $headers = $("#favorites").find('h3');
	var $myHeaders = $headers.map(function (arrayCell) {
		console.log($headers);
	});



});