$(function(){

	var number_tmp = "";
    var number_cal = "";
    var operator = "";
    var currentText = $("#display");
    currentText.text("0");
    
    $("#numbers button").on('click',function(){
		if (number_tmp.length < 9) {
			number_tmp += $(this).text();
		}
		else{
			return;
		}
		currentText.text(number_tmp);

    });
    $("#operators button").on('click',function(){
		operator = $(this).text();
		number_cal = number_tmp;
		number_tmp = "";
    });
    $("#equals").on('click',function(){
		var number_result;
		if (operator === "+"){
			number_cal = parseInt(number_cal, 10) + parseInt(number_tmp,10);
			number_result = number_cal.toString();
		} else if (operator === "-"){
			number_cal = parseInt(number_cal, 10) - parseInt(number_tmp,10);
			number_result = number_cal.toString();
		}else if (operator === "*"){
			number_cal = parseInt(number_cal, 10) * parseInt(number_tmp,10);
			number_result = number_cal.toString();
		} else if (operator === "/"){

			var length = number_cal.length 
			var display = length - 9; 
			number_cal = parseInt(number_cal, 10) / parseInt(number_tmp,10);		
			if(number_cal.toString().length - number_tmp.toString().length >= 2){
				number_result = (Math.round(number_cal * Math.pow(10, 8)) / Math.pow(10, 8)).toString();
				number_result = number_result.substr(0,10);
			}else{
				number_result = (Math.round(number_cal * Math.pow(10, 8)) / Math.pow(10, 8)).toString();
			}
			
		} 
		currentText.text(number_result);
		number_tmp = "";
		number_cal = "";
    });
    $("#clear,#allclear").click(function(){
		number_tmp = "";
		currentText.text("0");
		if ($(this).attr("id") === "allclear") {
			number_cal = "";
		}
    });
});