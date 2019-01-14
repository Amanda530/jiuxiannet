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
	console.log("aa");
});
$(".center-ttwo").click(function(){
	//个人用户注册center
	console.log("bb");
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
$("#txt1").focusout(function(){
	$(".plenumone").hide();
	 var myreg=/^1\d{10}/;
	 var  teval = $(this).val();
	 console.log(teval.length);
 	if(teval.length != 11 || myreg.test(teval) == false){
            $(".plephone").show();
       }
    if(teval.length == 11&&myreg.test(teval) == true){
        	console.log("aa");
            $(".plephone").hide();
            $(this).parent().css({"border":"1px solid #ccc"});
            $(".plephone2").show();  
        }
});
$("#txt2").focusout(function(){
	$(".pleyzm").show();
$(this).parent().css({"border":"1px solid #ed787f"});
});
$("#txt3").focusout(function(){
	if($("#txt3").val()== ""){
	$(this).parent().css({"border":"1px solid #ed787f"});
	$(".plejzm").show();
							}
});
$("#txt4").focus(function(){
	$(".plepass").show();
});
$("#txt4").focusout(function(){
	var myreg =/^[a-z0-9_-]{8,18}$/ ;
	var teval = $(this).val();
	if(teval.length < 8 || myreg.test(teval) == false){
			$(this).parent().css({"border":"1px solid #ed787f"});
			$(".plepass").hide().next().show();
			console.log($(this));
	}
	if(teval.length < 18 && myreg.test(teval) == true){
		$(".plepass").next().hide();
		$(this).parent().css({"border":"1px solid #ccc"});
	}
	
});


})
