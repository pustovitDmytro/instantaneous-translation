document.onkeydown= function(e) {
    if(e.shiftKey){
    	alert(window.getSelection().toString());
	}
}