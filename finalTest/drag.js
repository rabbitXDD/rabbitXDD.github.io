function AllowDrop(event){
    event.preventDefault();
}
function Drag(event){
    event.dataTransfer.setData("text",event.currentTarget.id);

}
function Drop(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");

    event.currentTarget.appendChild(document.getElementById(data));

    if(event.currentTarget.id==="Box1"){
    $("#moonResult").attr("src","image/moon6.png");
    $("#mResult").text("下弦月");
    $("#dateResult").html("廿"+"<br/>"+"二");
    }
    if(event.currentTarget.id==="Box2"){
    $("#moonResult").attr("src","image/moon5.png");
    $("#mResult").text("虧凸月");
    $("#dateResult").text("");
    $("#dateResult").html("十"+"<br/>"+"九");
    }
    if(event.currentTarget.id==="Box3"){
    $("#moonResult").attr("src","image/moon4.png");
    $("#mResult").text("望月");
    $("#dateResult").text("");
    $("#dateResult").html("十"+"<br/>"+"五");
    }
    if(event.currentTarget.id==="Box4"){
    $("#moonResult").attr("src","image/moon3.png");
    $("#mResult").text("盈凸月");
    $("#dateResult").text("");
    $("#dateResult").html("十"+"<br/>"+"一");
    }
    if(event.currentTarget.id==="Box5"){
    $("#moonResult").attr("src","image/moon2.png");
    $("#mResult").text("上弦月");
    $("#dateResult").text("");
    $("#dateResult").html("初"+"<br/>"+"八");
    }
    if(event.currentTarget.id==="Box6"){
    $("#moonResult").attr("src","image/moon1.png");
    $("#mResult").text("新月");
    $("#dateResult").text("");
    $("#dateResult").html("初"+"<br/>"+"五");
    }
    if(event.currentTarget.id==="Box7"){
    $("#moonResult").attr("src","image/moon8.png");
    $("#mResult").text("朔月");
    $("#dateResult").text("");
    $("#dateResult").html("初"+"<br/>"+"一");
    } 
    if(event.currentTarget.id==="Box8"){
    $("#moonResult").attr("src","image/moon7.png");
    $("#mResult").text("殘月");
    $("#dateResult").text("");
    $("#dateResult").html("廿"+"<br/>"+"六");
    }
}

