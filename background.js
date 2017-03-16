var working = false;

chrome.runtime.onMessage.addListener(function(mes){
	text = mes.text;

});

chrome.browserAction.onClicked.addListener(function(){
	working =! working;
});
