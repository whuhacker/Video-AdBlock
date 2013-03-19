chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: chrome.extension.getURL("offline/empty.json")};
    }, {
        urls: ['http://valf.atm.youku.com/*']
    },
    ["blocking"]
);
