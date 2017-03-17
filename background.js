var working = false;

var createMessage = function(text){
	var LangTo = "uk";
	var Url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key="
    + apiKey + "&lang=" + LangTo + "&text=" + text + "&options=1";
    fetch(Url).then(r => r.json())
    			.then(data => console.log(data))
    			.catch(e => console.log("Error during request to yandex"));
}

chrome.runtime.onMessage.addListener(function(mes){
	var text = mes.text;
	var obj = {title: "Item1", message: "668686"};
	obj.message = text;
	console.log(createMessage(text));
	var opt = { 
		type: "list",
		iconUrl: "3.png",
		title: "translator",
		message: "text",
		items: [ 
			{title: "Item1", message: "This is item 1."}
		]
	}
	chrome.notifications.create(opt);
});

chrome.browserAction.onClicked.addListener(function(){
	working =! working;
});
