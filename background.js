var working = false;
var LangTo = "uk";
var dir = "balls/";

var notify = function(text,data){
	var LangFrom = data.detected.lang;
	var trText = data.text[0];
	var from = {title: LangFrom, message: text };
	var to = {title: LangTo, message: trText};
	way = (avaliable(LangFrom))?("flags/"+dir+LangFrom+".png"):"flags/"+"unknown.png";
	console.log(way);
	var opt = { 
		type: "list",
		iconUrl: way,
		title: "instantaneoustranslator:",
		message: "translation",
		items: [from,to]
	}
	chrome.notifications.create(opt);
}

var avaliable = function(lang){
	pattern = "^"+lang+"$";
	for(var i = 0; i< languages.length; i++)
		if(languages[i].abbr.search(pattern)==0){
			return true;
		}
	return false;
}

var translate = function(text){
	var Url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key="
    + apiKey + "&lang=" + LangTo + "&text=" + text + "&options=1";
    fetch(Url).then(r => r.json())
    			.then(data => notify(text, data))
    			.catch(e => console.log("Error during request to yandex",e));
}

chrome.runtime.onMessage.addListener(function(mes){
	if(working){
		var text = JSON.parse(mes).text;
		console.log("selected text: ",text);
		translate(text);
	}	
});

chrome.browserAction.onClicked.addListener(function(){
	working =! working;
	if(working){
		chrome.browserAction.setIcon({path: "icons/64-a.png"});
		console.log("app is working");
	}else{
		chrome.browserAction.setIcon({path: "icons/64-n.png"});
		console.log("app isn't working");
	}
});