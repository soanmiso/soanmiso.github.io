AOS.init({
  duration: 1200
});


var $soan = {
	imageUrl : [
		"images/soan/1-2.jpg",
		"images/soan/2-2.jpg",
		"images/soan/3-2.jpg",
		"images/soan/4-2.jpg",
		"images/soan/5-2.jpg",
		"images/soan/6-2.jpg",
		"images/soan/1.jpg",
		"images/soan/2.jpg",
		"images/soan/3.jpg",
		"images/soan/4.jpg",
		"images/soan/5.jpg",
		"images/soan/6.jpg"
	],
	init : function(){
		/*services*/
		$soan.imagePreLoading();

		/*gallery*/
         $(document).on('click','.simplefilter li',function(){
        	$("#gallery-scrollbar").scrollTop(0); 
    	});
        $('.simplefilter li').first().trigger("click");

        /*touch event*/
/*		$(document).on("touchmove", function(){
			event.preventDefault();
			scrollPage();
		});
*/
	},
	imagePreLoading : function(){
		var imageUrls = $soan.imageUrl;
		for (var i = imageUrls.length - 1; i >= 0; i--) {
			var image = new Image();
			image.src = imageUrls[i];
		}
	} 
}

$(document).ready(function(){
	$soan.init();
});