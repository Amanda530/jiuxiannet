$(function(){
	//鼠标经过nright的时候，让yincang xia xian显现
	$(".yincang").css({"display":"none"});
	$(".nright").hover(function(){
		$(".yincang").css({"display":"block"});
		$(".nright a").css({"text-decoration":"none","color":"#ccc"});
	},function(){
		$(".yincang").css({"display":"none"});
	});
	$(".nright a").hover(function(){
		$(this).css({"text-decoration":"underline"});
	},function(){
		$(".nright a").css({"text-decoration":"none"});
	});
//点击时候切换注册页面；
$(".center-tone").click(function(){
	//企业用户注册center22
	$(".center22").css({"display":"block"});
	$(".center").css({"display":"none"});
	//console.log("aa");
});
$(".center-ttwo").click(function(){
	//个人用户注册center
	//console.log("bb");
	$(".center").css({"display":"block"}).next().css({"display":"none"});
});
//$(".plejzm").css({"display":"block"})
//去掉手机号验证,事情焦点是显示什么；错误时显示什么；replace是替换
// .replace(/^\s+$/g)//replaceAll
//$("p").replaceWith("<b>Paragraph. </b>");
$("#txt1").focus(function(){
	$(".plephone").hide();
	$(".plephone2").hide();
	 $(this).parent().css({"border":"1px solid #ed787f"}).end();
});  
var myreg1=/^1\d{10}/;
$("#txt1").focusout(function(){
	
	$(".plenumone").hide();
	 var  teval = $(this).val();
	 //console.log(teval.length);
 	if(teval.length != 11 || myreg1.test(teval) == false){
            $(".plephone").show();
       }
    if(teval.length == 11&&myreg1.test(teval) == true){
        	//console.log("aa");
            $(".plephone").hide();
            $(this).parent().css({"border":"1px solid #ccc"});
            $(".plephone2").show();  
        }
});
$("#txt2").focus(function(){
	var myreg =$(".pleyxian").show().next().hide();
	$(this).parent().css({"border":"1px solid #ed787f"});
});
var myreg2 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
$("#txt2").focusout(function(){
	var teval = $(this).val();
	if(myreg2.test(teval) == false){
		$(".pleyxian").hide().next().show();
		$(this).parent().css({"border":"1px solid #ed787f"});
	}
	if(myreg2.test(teval) == true && teval.length>5){	
		$(".pleyxian").hide().next().hide();
		$(this).parent().css({"border":"1px solid #ccc"});
	}
	
});

$("#txt3").focusout(function(){
	if($("#txt3").val()== ""){
	$(this).parent().css({"border":"1px solid #ed787f"});
	$(".plejzm").show();
							}
});
$("#txt4").focus(function(){
	
	$(".plepass").show().next().hide();
});
var myreg4 =/^[a-z0-9A-Z\d_]{8,18}$/;
$("#txt4").focusout(function(){
	
	var teval = $(this).val();
	if(teval.length < 8 || myreg4.test(teval) == false){
			$(this).parent().css({"border":"1px solid #ed787f"});
			$(".plepass").hide().next().show();
			//console.log($(this));
	}
	if(teval.length < 18 && myreg4.test(teval) == true){
		$(".plepass").hide().next().hide();
		$(this).parent().css({"border":"1px solid #ccc"});
	}
	
});

$("#txt5").focusout(function(){
	if($(this).val() !== $("#txt4").val()){
	$(".passanthor").show();
	$(this).parent().css({"border":"1px solid #ed787f"});
	}
	if($(this).val() == $("#txt4").val()){
	$(".passanthor").hide();
	$(this).parent().css({"border":"1px solid #ccc"});
	}
});


$("#txt6").click(function(){
if ($("#txt6").prop('checked') == true){
     $(".anniuniu").hide();
}
if($("#txt6").prop('checked') == false){
 $(".anniuniu").show();
}
});

/*console.log(myreg1.test($("#txt1").val()));
console.log(myreg2.test($("#txt2").val()));
console.log(myreg4.test($("#txt4").val()));*/
/*console.log(this)
		console.log($("#txt1").val());
		console.log($("#txt2").val());
		console.log($("#txt4").val());*/
		
$(".tijiaoan").on("click",function(){
	console.log(myreg1.test($("#txt1").val()));
	console.log(myreg2.test($("#txt2").val()));
	console.log(myreg4.test($("#txt4").val()));
	
			if(myreg1.test($("#txt1").val()) == true && myreg4.test($("#txt4").val()) == true && myreg2.test($("#txt2").val()) == true){
	console.log("bb");
		
		$.get("http://47.104.244.134:8080/username.do",{username:$("#txt1").val()},function(data){
					console.log(data);
					console.log("cc");
					});
				
		
	$.post("http://47.104.244.134:8080/usersave.do",{"username":$("#txt1").val(),"password":$("#txt4").val(),"email":$("#txt2").val(),"sex":"男"},function(data){
				console.log("aa");
	});
	}		
	});
	

//tijiaoan

/*$.ajax({
		type: "post",
        url:"http://47.104.244.134:8080/usersave.do",   
        data: {"username":username,"password":pwd,"email":"18463587992@163.com","sex":"男"},
//      dataType:"jsonp",
//      jsonpCallback:"person",
//		callback:"success",
        success:function(data){
        	var data= JSON.parse(data);
//          alert(data);
            console.log(data)
        }
   });*/
		


})
