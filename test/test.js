languages = [
	{ abbr: "de", full: "German" },
	{ abbr: "en", full: "English" },
	{ abbr: "es", full: "Spanish" },
	{ abbr: "it", full: "Italian" },
	{ abbr: "ja", full: "Japanese" },
	{ abbr: "pl", full: "Polish" },
	{ abbr: "ru", full: "Russian" },
	{ abbr: "tr", full: "Turkish"},
	{ abbr: "uk", full: "Ukrainian" },
	{ abbr: "zh", full: "Chinese" },
	];

var avaliable = function(lang){
	pattern = "^"+lang+"$";
	console.log(pattern);
	for(var i = 0; i< languages.length; i++)
		if(languages[i].abbr.search(pattern)==0){
			return true;
		}
	return false;
}


document.onkeydown= function(e) {
    if(e.shiftKey){
    	//alert(document.getSelection().toString());
    	var text = "aaa";
    	var obj = {
    		pil: text,
    		attr: "text"
    	};
    console.log(avaliable("uk"));
    console.log(avaliable("try"));
    console.log(avaliable("t"));
	}
}