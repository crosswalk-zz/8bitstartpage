var searchFocusListener = function() {
  document.getElementById("search").addEventListener("focus", function(event) {
    document.getElementById("search").value = "";
  });
  document.getElementById("search").addEventListener("blur", function(event) {
    document.getElementById("search").value = "Search..."
  });
}

var searchSubmitListener = function() {
  document.getElementById("search").addEventListener("keydown", function(e) {
    var searchString = document.getElementById("search").value.split(" ");
    var provider = searchString.shift();
    var searchQuery = searchString.join("+");
    const keyName = e.key;

    if (keyName === "Enter") {
      switch (provider) {
        case "g:":
          window.open("https://www.google.com/#q=" + searchQuery);
          break;
        case "gi:":
          window.open("https://www.google.com/search?site=imghp&tbm=isch&source=hp&biw=1920&bih=1014&q=" + searchQuery);
          break;
        case "y:":
          window.open("https://www.youtube.com/results?search_query=" + searchQuery);
          break;
        case "ddg:":
          window.open("https://duckduckgo.com/?q=" + searchQuery);
          break;
        case "so:":
          window.open("http://stackoverflow.com/search?q=" + searchQuery);
          break;
        case "w:":
          window.open("https://en.wikipedia.org/wiki/Special:Search?search=" + searchQuery);
          break;
        case "d:":
          window.open("http://www.merriam-webster.com/dictionary/" + searchQuery);
        default:
          window.open("video/taylor_swift_shake_it_off.mp4");
          break;
      }
    }
  });
}
