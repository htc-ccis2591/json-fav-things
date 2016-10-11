//ready function
$(function () {
	"use strict";


	var myHeading = function () {
		//myFavorites = ('#favorites');
		$("#favorites").before("<h1>Click here to see a few of my favorite things</h1>");
		$("#favorites").addClass("hide");


		$('h1').on('click', function () {
			$("#favorites").slideDown(2000);
			console.log("you clicked");
			$("p, img").hide();
		});

	};
	myHeading();



	var myWrap = function () {
		$('h3[1], p[1], img[1]').wrap('div class="containerDiv"></div>');
	};


	//$("p, img").addClass("hide");
	//create favorites object
	//var $secFavs = $('div#favorites');
	//$secFavs.hide();

	//create images object
	//var $favImg = $('img');
	//$favImg.hide();


	var createMyFavorites = function (thing, image, info) {

		var favorites = ("#favorites");
		//$(favorites).before$('<div id ="' + thing + '">');

		$(favorites).append("<h3>" + thing + "</h3>");
		$(favorites).append('<img src=" ' + image + '">');
		$(favorites).append("<p>" + info + "</p>");

		$('img').css("display", "block");
		$('img').css("margin", "auto");

		$('p').css("color", "#D4CA6A");

	};

	//$("img, p").addClass("hide");
	//$(favorites).after("<div>");
	//console.log(createMyFavorites);


	$.getJSON("data.json", function (data) {
		$.each(data.favorites, function (index, item) {
			createMyFavorites(item.thing, item.image, item.info);
		});
		$('h3').on('click', function () {
			$("p, img").toggle();
			console.log("you clicked");
		});
	});

	/*$('img').each(function () {
		var $img = $(this);
		var filename = $img.attr('src')
		$img.attr('alt', filename.substring(0, filename.lastIndexOf('.')));
	});*/
	//myWrap();



});