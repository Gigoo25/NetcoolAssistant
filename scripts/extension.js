document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('status').textContent = "Extension locked & loaded.";
    var text = "null";
        $('#status').html('Clicked an insert button.');
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data: text}, function(response) {
                $('#status').html('Inserted text into NetCool!');
                console.log('success');
            });
        });
    });
