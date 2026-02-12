document.getElementById("byebye").addEventListener('click', async () => {
    // get standalone video url
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const url = tab.url;
    let list = url.split("&list");
    const newUrl = list[0];

    // redirect to standalone video
    if(list.length == 2) {
        chrome.tabs.update({url: newUrl});
    }
    else {
        return;
    }
});