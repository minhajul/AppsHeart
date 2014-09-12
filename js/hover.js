var mobile_app = document.getElementById("mobile_app");
var web_app = document.getElementById("web_app");
var hire = document.getElementById("hire");
var open_source = document.getElementById("open_source");
var rich_application = document.getElementById("rich_application");
var multimedia_solution = document.getElementById("multimedia_solution");
var game = document.getElementById("game");
var ecommerce = document.getElementById("ecommerce");

mobile_app.onmouseover = function(){
	document.getElementById("mobileApp").style.display = "block";
	document.getElementById("webApp").style.display = "none";
	document.getElementById("hire-para").style.display = "none";
	document.getElementById("open-para").style.display = "none";
	document.getElementById("rich-para").style.display = "none";
	document.getElementById("multimedia-para").style.display = "none";
	document.getElementById("game-para").style.display = "none";
	document.getElementById("ecommerce-para").style.display = "none";
}
web_app.onmouseover = function(){
	document.getElementById("mobileApp").style.display = "none";
	document.getElementById("webApp").style.display = "block";
	document.getElementById("hire-para").style.display = "none";
	document.getElementById("open-para").style.display = "none";
	document.getElementById("rich-para").style.display = "none";
	document.getElementById("multimedia-para").style.display = "none";
	document.getElementById("game-para").style.display = "none";
	document.getElementById("ecommerce-para").style.display = "none";
}
hire.onmouseover = function(){
	document.getElementById("mobileApp").style.display = "none";
	document.getElementById("webApp").style.display = "none";
	document.getElementById("hire-para").style.display = "block";
	document.getElementById("open-para").style.display = "none";
	document.getElementById("rich-para").style.display = "none";
	document.getElementById("multimedia-para").style.display = "none";
	document.getElementById("game-para").style.display = "none";
	document.getElementById("ecommerce-para").style.display = "none";
}
open_source.onmouseover = function(){
	document.getElementById("mobileApp").style.display = "none";
	document.getElementById("webApp").style.display = "none";
	document.getElementById("hire-para").style.display = "none";
	document.getElementById("open-para").style.display = "block";
	document.getElementById("rich-para").style.display = "none";
	document.getElementById("multimedia-para").style.display = "none";
	document.getElementById("game-para").style.display = "none";
	document.getElementById("ecommerce-para").style.display = "none";
}
rich_application.onmouseover = function(){
	document.getElementById("mobileApp").style.display = "none";
	document.getElementById("webApp").style.display = "none";
	document.getElementById("hire-para").style.display = "none";
	document.getElementById("open-para").style.display = "none";
	document.getElementById("rich-para").style.display = "block";
	document.getElementById("multimedia-para").style.display = "none";
	document.getElementById("game-para").style.display = "none";
	document.getElementById("ecommerce-para").style.display = "none";
}
multimedia_solution.onmouseover = function(){
	document.getElementById("mobileApp").style.display = "none";
	document.getElementById("webApp").style.display = "none";
	document.getElementById("hire-para").style.display = "none";
	document.getElementById("open-para").style.display = "none";
	document.getElementById("rich-para").style.display = "none";
	document.getElementById("multimedia-para").style.display = "block";
	document.getElementById("game-para").style.display = "none";
	document.getElementById("ecommerce-para").style.display = "none";
}
game.onmouseover = function(){
	document.getElementById("mobileApp").style.display = "none";
	document.getElementById("webApp").style.display = "none";
	document.getElementById("hire-para").style.display = "none";
	document.getElementById("open-para").style.display = "none";
	document.getElementById("rich-para").style.display = "none";
	document.getElementById("multimedia-para").style.display = "none";
	document.getElementById("game-para").style.display = "block";
	document.getElementById("ecommerce-para").style.display = "none";
}


ecommerce.onmouseover = function(){
	document.getElementById("mobileApp").style.display = "none";
	document.getElementById("webApp").style.display = "none";
	document.getElementById("hire-para").style.display = "none";
	document.getElementById("open-para").style.display = "none";
	document.getElementById("rich-para").style.display = "none";
	document.getElementById("multimedia-para").style.display = "none";
	document.getElementById("game-para").style.display = "none";
	document.getElementById("ecommerce-para").style.display = "block";
}
