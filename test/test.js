document.addEventListener("selectionchange", function() {
    console.log('selectionchange', e.originalEvent);
    alert("selectionchange");
});