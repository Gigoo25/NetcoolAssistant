chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    console.log("something happening from the extension");
    var data = request.data || {};

    $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val("");
    $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);

    sendResponse({data: data, success: true});
});
