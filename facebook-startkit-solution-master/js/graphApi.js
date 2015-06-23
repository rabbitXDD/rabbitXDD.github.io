$(document).ready(function(){
	var current = Parse.User.current();
	console.log(current);
	if(current){
	    var a = setTimeout(function(){
			FB.getLoginStatus(function(response) {
			     if (response.status === 'connected') {
			         uid = response.authResponse.userID;
			         
			         accessToken = response.authResponse.accessToken;
			         FB.api('/me/picture?type=large', function (response) {
					    $('#fbImgView').html("<h5>Here are your profile photo</h5><img src="+response.data.url+" crossorigin=\"anonymous\" id=preview1 />");          
			         });
				 
			         FB.api('/me', function (response) {
						 console.log(response);
						$('#fbImgView').append("<h1>Welcome , "+(response['gender']=="male"?"Mr. ":"Miss ")+" "+response['first_name']+"</h1>");
						$("#name").text(response['first_name']);
			         });
			         	


				     console.log(Parse.User.current());


		      // Practice 2  這裏要補充兩行不見的程式碼
		       var Comment = Parse.Object.extend("Comment") ;
		       var queryComments = new Parse.Query (Comment) ;

		      // Practice 3  要將關聯的資料也一起抓下來
		      queryComments.include("targetUser") ; // 在 query 時必須要 include 該欄位，才會抓取該欄位的資料
		      // Practice 4  只顯示目前使用者的留言
		    
		      // Practice 6  只抓取有圖片的留言
		      //queryComments.exists("img");
		      queryComments.find({
		        success : function(arrayOfQueriedObjects){
		          console.log (arrayOfQueriedObjects);
		    
		          for (var i = 0 ; i < arrayOfQueriedObjects.length ; i++){
		            comment = arrayOfQueriedObjects[i] ;
		    	
		    	FB.api('/me', function (response) {
						$("#comments").append(
		              "<blockquote>"+
		                response['first_name'] + ": " +comment.get("message")+
		                // "<br><img src='"+ comment.get("img").url()+"' height='100px'>"+  // Practice 6
		              "</blockquote>");
			         });
		            
		          }
		        },
		        error : function(errorObject){
		          alert(errorObject.message) ;
		        }
		      });
					 
			  }
		     });   
	    },3000);
		indexView();
		

	}
	else{
		loginView();
	}
});

$(document).on('submit','#commentForm',function(eventObject){
      eventObject.preventDefault();

      var Comment = Parse.Object.extend("Comment") ;
      var comment = new Comment();

      comment.set("message",$("#comment").val());
      // Practice 1 記錄發文的使用者
      comment.set("targetUser", Parse.User.current()) ;
      // Practice 5 儲存圖片
      if ($("#fileInput")[0].files.length > 0) {
       var file = $("#fileInput")[0].files[0];
       var name = "photo";
       var parseImg = new Parse.File(name, file);
       comment.set("img",parseImg);
       parseImg.save({
       success : function (savedImg){
       alert(savedImg.url());
       },
       error : function (saveingImg , errorObject){
       alert(errorObject.message) ;
       }
       });
      }
      comment.save({
        success : function(savedParseObject){
          alert("留言成功");
          window.location.reload();
        },
        error : function (errorObject){
          console.log(errorObject);
          alert(errorObject.message);
        }
      });
    });

$(document).on('click','#loginBtn',function(e){
	e.preventDefault();
	login();
});
$(document).on('click','#signupBtn',function(e){
	e.preventDefault();
	signup();
});
$(document).on('click','#fbloginBtn',function(e){
	e.preventDefault();
	fblogin();
});
$(document).on('click','#logoutBtn',function(e){
	e.preventDefault();
	logout();
});
function loginView(){
	$('#logoutBtn').hide();
	$('#indexView').hide();
	$('#container').hide();
	
	$('#loginView').show();
	$('.notLogin').show();
	$('body').css("background-image","url(img/background.jpg)");
	$('#fbImgView').html('');
	
}
function indexView(){
	$('#loginView').hide();
	$('.notLogin').hide();
	
	$('#indexView').show();
	$('#container').show();
	$('#logoutBtn').show();
	$('body').css("background-image","url(img/index.jpg)");
	
}

function login(){
  Parse.User.logIn($('#username').val(),$('#password').val(),{
	  success:function(data){
	  	  alert("登入成功");
          indexView();
		  $('#fbImgView').append("<p>hello "+data.get("username")+", how about trying FB login ?</p>");
	  },
	  error:function(data,error){
		  alert("登入失敗");
	  }
  });
}
function signup(){
  var user = new Parse.User();
  user.set("username",$('#username').val());
  user.set("password",$('#password').val());
  user.signUp(null,{
	  success: function(user){
		  alert("註冊成功");
		  indexView();
		  $('#fbImgView').append("<p>hello "+data.get("username")+", how about trying FB login ?</p>");
	  },
	  error: function(data,error){
		  alert("註冊失敗");
	  }
  }); 
}
function logout(){
   Parse.User.logOut();
   FB.logout(function(response) {
     // user is now logged out
   });
   loginView();	
}