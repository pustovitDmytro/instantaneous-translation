document.onkeydown= function(e) {
    if(e.shiftKey){
    	var s = document.getSelection().toString();
    	if(s) chrome.runtime.sendMessage(JSON.stringify({text: s}));
	}
}