$(function(){
	$(".stonicTt h4").eq(0).addClass("cho"); //h4 클래스 부여

	$(".stonicTt h4").click(function(){ //stonicTVC 슬라이드
		let n = $(this).index();
		$(".stonicTt h4").removeClass("cho");
		$(this).addClass("cho");
		//console.log(n);
		if( n == 0){
			$(".stonicTVC").animate({left:320});
		} else if (n==1) {
			$(".stonicTVC").animate({left:-320});
		}
	});
	
	
		$(".carImg ul").click(function (){ //gallery 이미지 클릭
			$(this).animate({left:"-=560"} , 2000, function(){
				if(parseInt($(this).css("left")) <=-3360){
					$(this).css("left",0);
				}
			});
		});
		
	setInterval(function(){  //gallery 이미지 슬라이드
		$(".carImg ul").animate({left:"-=560"} , 2000, function(){
			if(parseInt($(this).css("left")) <=-3360){
				$(this).css("left",0);
			}
		});
	},4000);

});