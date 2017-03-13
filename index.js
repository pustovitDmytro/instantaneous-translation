start = function(){
	console.log("starting app");
	var opt = {
  type: "list",
  title: "Primary Title",
  message: "Primary message to display",
  iconUrl: "3.png",
  items: [{ title: "Item1", message: "This is item 1."},
          { title: "Item3", message: "This is item 3."}]
}
var s="3";
chrome.notifications.create(s, opt, function(){
});

}
chrome.browserAction.onClicked.addListener(start);

