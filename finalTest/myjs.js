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

$( ".myModal" ).dialog({
	modal : true ,
   autoOpen : false ,
    height : 500 ,
    width : 500 
  });

   var canvas = document.getElementById('paper');
   /*var canvas = $("#paper")[0];*/
   var c = canvas.getContext("2d");
   c.lineWidth=3;
   
document.getElementById("moon2").style.display='none';
		document.getElementById("moon4").style.display='none';
		document.getElementById("moon3").style.display='none';
		document.getElementById("moon5").style.display='none';

  /* window.onload = init;*/

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
    $('#sunmoon_1').click(function(){
    	document.getElementById("moon2").style.display='';
		document.getElementById("moon4").style.display='none';
		document.getElementById("moon3").style.display='none';
		document.getElementById("moon5").style.display='none';
    	c.clearRect(0, 0, canvas.width, canvas.height);
		var startX1 = 50;
var startY1 = 50;
var endX1 = 485;
var endY1 = 170;
var amount1 = 0;/*
setInterval(function() {
    amount1 += 0.05; // change to alter duration
    if (amount1 > 1) amount1 = 1;

    
    c.beginPath();
    c.strokeStyle = "yellow";
    c.beginPath();
    c.moveTo(startX1, startY1);
    // lerp : a  + (b - a) * f

    c.lineTo(startX1 + (endX1 - startX1) * amount1, startY1 + (endY1 - startY1) * amount1);
    c.stroke();
    c.closePath();
}, 30);*/
c.strokeStyle = "yellow";
c.beginPath();
c.moveTo(startX1, startY1);
c.lineTo(endX1,endY1);
c.stroke();

c.closePath();
 
var startX2 = 50;
var startY2 = 310;
var endX2 = 485;
var endY2 = 190;
var amount2 = 0;/*
setInterval(function() {
    amount2 += 0.05; // change to alter duration
    if (amount2 > 1) amount2 = 1;
    
    c.strokeStyle = "yellow";
    c.beginPath();
    c.moveTo(startX2, startY2);
    // lerp : a  + (b - a) * f
    
    c.lineTo(startX2 + (endX2 - startX2) * amount2, startY2 + (endY2 - startY2) * amount2);
    
    c.stroke();
    
}, 30);*/
    
  
c.strokeStyle = "yellow";
c.beginPath();
c.moveTo(startX2, startY2);
c.lineTo(endX2,endY2);

c.stroke();
c.restore();
c.closePath();
    c.save();
    
	});

	$('#sunmoon_2').click(function(){
		document.getElementById("moon2").style.display='none';
		document.getElementById("moon4").style.display='';
		document.getElementById("moon3").style.display='none';
		document.getElementById("moon5").style.display='none';
   /*var canvas = $("#paper")[0];*/
   
    	/*c.clearRect(0, 0, canvas.width, canvas.height);*/
		window.clearInterval(null);
		c.stroke();
c.setTransform(1, 0, 0, 1, 0, 0);
// Will always clear the right space
c.clearRect(0, 0, canvas.width, canvas.height);
c.beginPath();
c.restore();
c.strokeStyle = "yellow";
c.beginPath();
c.moveTo(50, 50);
c.lineTo(920,170);
c.stroke();

c.closePath();
c.strokeStyle = "yellow";
c.beginPath();
c.moveTo(50, 310);
c.lineTo(920,190);
c.stroke();
c.closePath();
	});
    $('#sunmoon_3').click(function(){
		document.getElementById("moon2").style.display='none';
		document.getElementById("moon4").style.display='none';
		document.getElementById("moon3").style.display='none';
		document.getElementById("moon5").style.display='';
   /*var canvas = $("#paper")[0];*/
   
    	/*c.clearRect(0, 0, canvas.width, canvas.height);*/
		window.clearInterval(null);
		c.stroke();
c.setTransform(1, 0, 0, 1, 0, 0);
// Will always clear the right space
c.clearRect(0, 0, canvas.width, canvas.height);
c.beginPath();
c.restore();
c.strokeStyle = "yellow";
c.beginPath();
c.moveTo(50, 50);
c.lineTo(650,110);
c.stroke();

c.closePath();
c.strokeStyle = "yellow";
c.beginPath();
c.moveTo(50, 50);
c.lineTo(485,180);
c.stroke();
c.closePath();
	});
	$('#sunmoon_4').click(function(){
		document.getElementById("moon2").style.display='none';
		document.getElementById("moon4").style.display='none';
		document.getElementById("moon3").style.display='';
		document.getElementById("moon5").style.display='none';
   /*var canvas = $("#paper")[0];*/
   
    	/*c.clearRect(0, 0, canvas.width, canvas.height);*/
		window.clearInterval(null);
		c.stroke();
c.setTransform(1, 0, 0, 1, 0, 0);
// Will always clear the right space
c.clearRect(0, 0, canvas.width, canvas.height);
c.beginPath();
c.restore();
c.strokeStyle = "yellow";
c.beginPath();
c.moveTo(50, 50);
c.lineTo(490,210);
c.lineWidth=3;
c.stroke();

c.closePath();
c.strokeStyle = "yellow";
c.beginPath();
c.moveTo(50, 310);
c.lineTo(490,150);
c.lineWidth=3;
c.stroke();
c.closePath();
	});
/*
	document.getElementById('sunmoon_2').addEventListener('click', function() {
        c.clearRect(0, 0, canvas.width, canvas.height);
      }, false);
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
		var sun_1_intro="內核：太陽的核心位於太陽正中心，內部溫度接近1360萬K，自轉速度要其他區域快速許多。核心是太陽內唯一透過核融合產生熱量的區域，熱量透過核心傳到外部其他層，然後化成光波、粒子等動能，散逸到宇宙空間中。";
    	$(".sun_intro").find("span").animate({opacity:0},function(){
        $(this).text(sun_1_intro)
            .animate({opacity:1});  
    	})
	});
	$('#sun_2').click(function(){
		var sun_2_intro="輻射層：熱且稠密的一個區塊，在大約0.25 ~ 0.7的太陽半徑處，在這個區域中沒有熱對流，藉由輻射將核心的熱能（氫、氦的離子發射的光子）向外傳送。";
    	$(".sun_intro").find("span").animate({opacity:0},function(){
        $(this).text(sun_2_intro)
            .animate({opacity:1});  
    	})
	});
	$('#sun_3').click(function(){
		var sun_3_intro="對流層：以不夠稠密不夠熱，存在太陽半徑0.7的區域。不夠透明，所以仰賴熱對流來傳導熱能。另外，對留住使得太陽產生磁北極和磁南極。";
    	$(".sun_intro").find("span").animate({opacity:0},function(){
        $(this).text(sun_3_intro)
            .animate({opacity:1});  
    	})
	});
	$('#sun_4').click(function(){
		var sun_4_intro="光球：溫度約6000K，厚度約數十到數百公里。太陽可見的表面，在此層以下的太陽對可見光是不透明的，光可自由傳播到太空中，能量也可自由地從地球上帶走。";
    	$(".sun_intro").find("span").animate({opacity:0},function(){
        $(this).text(sun_4_intro)
            .animate({opacity:1});  
    	})
	});
	$('#sunmoon_1').click(function(){
		$("#sunmoonResult").attr("src","image/日全蝕1.png");
       var sunmoon_1_intro="日全蝕：此時太陽光球完全被月亮陰影遮住，會發生於地、日、月三者成一直線、月球位於近日點時。也是唯一機會能目測到模糊的日冕。";
    	$(".sunmoon_intro").find("span").animate({opacity:0},function(){
        $(this).text(sunmoon_1_intro)
            .animate({opacity:1});  
    	})	
    });
	$('#sunmoon_2').click(function(){
		$("#sunmoonResult").attr("src","image/月全蝕1.png");
       var sunmoon_2_intro="月全蝕：當日、地、月成一直線，整個月球進入地球的本影內時，在其前後均會發生月偏食與半影月食。發實時間必定為滿月時。";
    	$(".sunmoon_intro").find("span").animate({opacity:0},function(){
        $(this).text(sunmoon_2_intro)
            .animate({opacity:1});  
    	})	
	});
	$('#sunmoon_3').click(function(){
		$("#sunmoonResult").attr("src","image/日偏蝕1.png");
       var sunmoon_3_intro="日偏蝕：造成日偏食的原因是因為觀測者落在月球的半影區中，看見一部分的太陽被月球的陰影遮蓋，但另一部分仍繼續發光。通常伴隨其他日蝕現象發生。";
    	$(".sunmoon_intro").find("span").animate({opacity:0},function(){
        $(this).text(sunmoon_3_intro)
            .animate({opacity:1});  
    	})	
	});
	$('#sunmoon_4').click(function(){
		$("#sunmoonResult").attr("src","image/日環食1.png");
       var sunmoon_4_intro="日環蝕：此時太陽光球不完全被月亮陰影遮住，露出最外圈光球，會發生於地、日、月三者成一直線、月球位於遠日點時。";
    	$(".sunmoon_intro").find("span").animate({opacity:0},function(){
        $(this).text(sunmoon_4_intro)
            .animate({opacity:1});  
    	})	
	});

    $('#headerButton').click(function(){
		$("#myModal1").modal()
	});
	$('#navseason').click(function(){
		$("#myModal2").modal()
	});
	$('#navsun').click(function(){
		$("#myModal1").modal()
	});
	$('#navmoon').click(function(){
		$("#myModal3").modal()
	});
	$('#navmoonevent').click(function(){
		$("#myModal4").modal()
	});
	$('#navsunmoon').click(function(){
		$("#myModal5").modal()
	});
    $('#next1').click(function(){
		$("#myModal2").modal()
		/*location.href = "#season";*/
	});
	$('#next2').click(function(){
		$("#myModal3").modal()
	/*	location.href = "#moonIntro";*/
	});
	$('#next3').click(function(){
		$("#myModal4").modal()
		/*location.href = "#moonevent";*/
	});
    $('#next4').click(function(){
		$("#myModal5").modal()
		/*location.href = "#sunmoonevent";*/
	});
	$('#next5').click(function(){
		$("#myModal6").modal()
		/*location.href = "#page-container";*/
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
		$("#season_content").html("季節主要分春、夏、秋、冬，南北半球有季節互相對調的差異，兩極主要呈現夏、冬季，春秋季不明顯。"+"<br/>"+"<br/>"+"成因："+"<br/>"+"<br/>"+"是地球的自轉軸與其公轉軌道平面(黃道面)不垂直，與公轉軌道平面的垂直線形成夾角23度26分的傾斜。"+"<br/>"+"<br/>"+"隨著地球繞行太陽公轉不同季節直射不同區塊，而使地球不同地區有不同的溫度感受，產生四季的更迭。"+"<br/>");
	});

	$("#north").mouseenter(function(){
        $("#season_content").html("春分"+"<br/>"+"<br/>"+"日期：每年3 / 21日前後"+"<br/>"+"<br/>"+"太陽照射：直射赤道（緯度0度線），減少斜射北半球，增加斜射南半球"+"<br/>"+"<br/>"+"季節：北半球春季，南半球秋季"+"<br/>"+"<br/>"+"特色：全球日夜均等長（除極點）"+"<br/>"+"<br/>");
    });

    $("#west").mouseenter(function(){
        $("#season_content").html("夏至"+"<br/>"+"<br/>"+"日期：每年6 / 21日前後"+"<br/>"+"<br/>"+"太陽照射：直射北回歸線（北緯23.5度），斜射南半球"+"<br/>"+"<br/>"+"季節：北半球夏季，南半球冬季"+"<br/>"+"<br/>"+"特色：北半球當日白晝全年最長，北極圈周圍太陽整日不落。"+"<br/>"+"<br/>"+"相關節慶：端午節");
    });
    $("#south").mouseenter(function(){
        $("#season_content").html("秋分"+"<br/>"+"<br/>"+"日期：每年9 / 23日前後"+"<br/>"+"<br/>"+"太陽照射：直射赤道（緯度0度線），減少直射北半球，增加直射南半球"+"<br/>"+"<br/>"+"季節：北半球秋季，南半球春季"+"<br/>"+"<br/>"+"特色：全球日夜均等長（除極點）"+"<br/>"+"<br/>");
    });
    $("#east").mouseenter(function(){
        $("#season_content").html("冬至"+"<br/>"+"<br/>"+"日期：每年12 / 22日前後"+"<br/>"+"<br/>"+"太陽照射：直射南回歸線（南緯23.5度），斜射北半球"+"<br/>"+"<br/>"+"季節：北半球冬季，南半球夏季"+"<br/>"+"<br/>"+"特色：南半球當日白晝全年最長，南極圈周圍太陽整日不落。"+"<br/>"+"<br/>"+"相關節慶：冬至");
    });

//
	$('#sunmoon_1').mouseenter(function(){
		$(this).addClass('pointer');
	});
	$('#sunmoon_1').mouseleave(function(){
		$(this).removeClass('pointer');
	});
	$('#sunmoon_2').mouseenter(function(){
		$(this).addClass('pointer');
	});
	$('#sunmoon_2').mouseleave(function(){
		$(this).removeClass('pointer');
	});
	$('#sunmoon_3').mouseenter(function(){
		$(this).addClass('pointer');
	});
	$('#sunmoon_3').mouseleave(function(){
		$(this).removeClass('pointer');
	});
	$('#sunmoon_4').mouseenter(function(){
		$(this).addClass('pointer');
	});
	$('#sunmoon_4').mouseleave(function(){
		$(this).removeClass('pointer');
	});
});