/*facebook start_kit*/
window.fbAsyncInit = function() {
    FB.init({
      appId      : '1608556059426766',
      xfbml      : true,
      version    : 'v2.3'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
  
$(document).ready(function(){

   /* $('#quote').flipQuote({
    container: '#container'
    });*/

	//FOR BPOPUP
	/*$("#sun_Intro").ready(function(){
		$('.sun_intro_1').bPopup({
            speed: 650,
            transition: 'slideIn',
	    transitionClose: 'slideBack'
        });
	});
	*/
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	$('#sun_1').click(function(){
		var sun_1_intro="太陽核心被認為是由中心點至0.2太陽半徑的區域，是太陽系內溫度最高的場所。它的密度高達150,000 kg/m³ （是地球上水的密度的150倍），溫度則為15,000,000K（對比於太陽表面的溫度大約是6,000K）。";
    	$(".sun_intro").find("span").animate({opacity:0},function(){
        $(this).text(sun_1_intro)
            .animate({opacity:1});  
    	})
	});
	$('#sun_2').click(function(){
		var sun_2_intro="輻射層是恆星內部經由輻射而不是對流的手段向外傳遞能量的區域，能量以電磁輻射，像是光子，的形式穿越輻射層。在太陽內部，輻射層位於太陽核心和對流層之間，從0.2至0.71太陽半徑的區間。";
    	$(".sun_intro").find("span").animate({opacity:0},function(){
        $(this).text(sun_2_intro)
            .animate({opacity:1});  
    	})
	});
	$('#sun_3').click(function(){
		var sun_3_intro="對流層是在恆星內部以對流為傳輸能量主要方式的半徑區域。在輻射層，能量經由輻射傳遞。恆星的對流包括內部電漿的質量移動，通常是形成熱電漿上升，冷電漿下沉的迴路。";
    	$(".sun_intro").find("span").animate({opacity:0},function(){
        $(this).text(sun_3_intro)
            .animate({opacity:1});  
    	})
	});
	$('#sun_4').click(function(){
		var sun_4_intro="太陽的大氣層是一層低密度的氣體，由可見之表面向外延伸到約五百萬公里的高度。太陽的大氣層並沒有明確的邊界，它的最外層與往外流向各行星的氣體混合。所以我們甚至可以說太陽的大氣層往外延伸很廣，甚至將地球包含在內。";
    	$(".sun_intro").find("span").animate({opacity:0},function(){
        $(this).text(sun_4_intro)
            .animate({opacity:1});  
    	})
	});
//sun pointer
	$('.sun_button div').mouseenter(function(){
		$(this).addClass('pointer');
	});
	$('.sun_button div').mouseleave(function(){
		$(this).removeClass('pointer');
	});

	$('#sun_1').mouseenter(function(){
		$("#Introimg").attr("src","image/sun_1.png");
	});
	$('#sun_1').mouseleave(function(){
		$("#Introimg").attr("src","image/sun_all.png");
	});
	$('#sun_2').mouseenter(function(){
		$("#Introimg").attr("src","image/sun_2.png");
	});
	$('#sun_2').mouseleave(function(){
		$("#Introimg").attr("src","image/sun_all.png");
	});
	$('#sun_3').mouseenter(function(){
		$("#Introimg").attr("src","image/sun_3.png");
	});
	$('#sun_3').mouseleave(function(){
		$("#Introimg").attr("src","image/sun_all.png");
	});
	$('#sun_4').mouseenter(function(){
		$("#Introimg").attr("src","image/sun_4.png");
	});
	$('#sun_4').mouseleave(function(){
		$("#Introimg").attr("src","image/sun_all.png");
	});
	$('#main img').mouseenter(function(){
		$(this).css('opacity', '1'); 
	});
	$('#main img').not( "#sun_season" ).mouseleave(function(){
		$(this).css('opacity', '0.45');
		$("#season_content").html("季節是每年循環出現的地理景觀相差比較大的幾個時間段。不同的地區，其季節的劃分也是不同的。"+"<br/>"+"對溫帶地區而言，一年分為四季，即春季、夏季、秋季、冬季；在這些季節裡又分為四季，即溫季、熱季、涼季、寒季；而對於赤道地區只有旱季和雨季，或無季相之分。"+"<br/>"+"在兩極地區，並非只有冬季，但春秋季不明顯，以北極為例，五月到九月為夏季，十月到隔年四月為冬季。"+"<br/>");
	});

	$("#north").mouseenter(function(){
        $("#season_content").html("夏至，是二十四節氣之一。每年6月21日前後太陽到達黃經90°時開始。是最早被確定的一個節氣。"+"<br/>"+"西元前7世紀，古人用土圭量日影，夏至這一天日影最短，因此把這一天稱作「夏至」。");
    });

    $("#west").mouseenter(function(){
        $("#season_content").text("aaa");
    });
    $("#south").mouseenter(function(){
        $("#season_content").text("bbb");
    });
    $("#east").mouseenter(function(){
        $("#season_content").text("ccc");
    });
});