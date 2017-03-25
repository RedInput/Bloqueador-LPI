chrome.webRequest.onBeforeRequest.addListener(function(details) {
    var delay = 5 * 60 * 1000;
    var time = localStorage.getItem("time");
    var now = Date.now();

    if ((now-time)>delay) {
        var white_list = localStorage.getItem("white_list");
        if (white_list===null) {
            localStorage.removeItem("time");
            localStorage.setItem("url", details.url);
            return {
                redirectUrl : chrome.extension.getURL("blocked_url.html")
            };

        } else if (white_list.indexOf(details.url)<0) {
            localStorage.removeItem("time");
            localStorage.setItem("url", details.url);
            return {
                redirectUrl : chrome.extension.getURL("blocked_url.html")
            };
        }
    }
},
// filters
{
    urls : arrayUrls
},
// extraInfoSpec
[ "blocking" ]);
