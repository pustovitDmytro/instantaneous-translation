document.onkeydown= function(e) {
    if(e.shiftKey){
    	alert(document.getSelection().toString());
	}
}