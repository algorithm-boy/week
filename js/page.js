var jabinfo = jabinfo || {};
jabinfo.init = function (argument) {
	var list = $("#content img");
	list.click(jabinfo.swrap);
	list.swipe(jabinfo.swrap);
};

jabinfo.swrap = function(index){
	console.log("hello");
};

$(document).ready(function(){
	jabinfo.init();
});