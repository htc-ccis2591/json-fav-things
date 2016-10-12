$(document).ready(function(){
    $("p").after("<div class='span13'><button id='startviewing'>Click here to see my favorite things</button></div>");
    $("p").remove();
 
    $("#startviewing").click(function(){
    	//* read in the data from the json file
            var $infopanel = $("<div class='panel-body'</div>");
        
            $("#startviewing").remove();
            $(".span13").remove();    	
            $.getJSON("data.json", function (data) {
 			var count = Object.keys(data.favoriteThings).length
			//alert(count);
            $("body").append("<h1 class='text-center'>My Favorite Things</h1>");
            $("body").append("<ul id='favoriteList' ></ul>");			
            for (var i=0;i<count;i++){
			  //console.log(jsonObj.myObject[i]);
			   var obj= data.favoriteThings[i];
			   var $newListItem = $("<li class='favorite-item text-center'>"+obj.thing+"</li>");
               if (i==0){
                    $("ul").append($newListItem);
                    $("li:eq("+i+")").last().after("<div class='panel-body hide'></div>");
                    }
               else {
                   $("ul").append($newListItem);
                   $("li:eq("+i+")").after("<div class='panel-body hide'></div>");			}
            }
            $("li").css("list-style", "none");
            i=0;
            for ( i=0;i<count;i++){
                var obj= data.favoriteThings[i];
                $( "div:eq("+i+")" ).append("<p>"+obj.description+"</p>")
                $( "div:eq("+i+")" ).append("<img id='image' class='img-responsive center-block' src='"+obj.imageURL+"' alt='' />");
                //$( "div:eq("+i+")" ).hide();
		        }
                
                //// install the click method of each favorite thing 
            $("li").on("click", function(){
               //alert( "Index: " + $(this).index( "li" ) );
                var showindex = $(this).index( "li" );
                var isVisible = $( "div:eq("+showindex+")" ).is(':visible');
                if (isVisible)
                    {
                        $( "div:eq("+showindex+")" ).addClass("hide");
                    } else {
                        $( "div:eq("+showindex+")" ).removeClass("hide");
                    }
                
                });
       });
        
        
   });
   
});