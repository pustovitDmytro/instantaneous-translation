var working = false;

chrome.runtime.onMessage.addListener(function(mes){
	var text = mes.text;
	var obj = {title: "Item1", message: "668686"};
	obj.message = text;
	var opt = { 
		type: "list",
		iconUrl: "3.png",
		title: "translator",
		message: "text",
		items: [ {title: "Item1", message: "This is item 1."},
		obj
		]
	}
	chrome.notifications.create(opt);
});

chrome.browserAction.onClicked.addListener(function(){
	working =! working;
});
