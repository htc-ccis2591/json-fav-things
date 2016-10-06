//ready function
$(function () {
	"use strict";


	//$("p, img").addClass("hide");
	//create favorites object
	var $secFavs = $('div#favorites');
	$secFavs.hide();

	//create images object
	var $favImg = $('img');
	$favImg.hide();


	$("span#intro, h3").css("color", "#FFD281");

	function introClick() {
		//console.log("you clicked");
		//console.log($liFavs);
		$secFavs.fadeIn(1500);
		var myHeaders = $('h1');
		var secondHeader = myHeaders[1];
		//console.log(myHeaders);
		//console.log(secondHeader);
		$(secondHeader).replaceWith("<h2>Toggle each item to see more</h2>");
		var myPars = $('p');
		var rocksmithPara = myPars[1];
		//console.log(rocksmithPara);
		$('p').addClass("hide");
		$(rocksmithPara).append("<div> <a href=\"http://theriffrepeater.com/\">Here's</a>          my favorite 3rd party site about the game.</div> ")

	};
	$('#intro').on('click', introClick);


	$("section").on('click', function () {
		//var secondarySections = $(this).children();
		//console.log(secondarySections);
		//$(secondarySections).toggle();
		$(this).find("img, p").toggle();
	});
});