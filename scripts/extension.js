document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('status').textContent = "Extension locked & loaded.";
    var button = document.getElementById('button-selector');
    button.addEventListener('click', function(e){
           if($(e.srcElement).attr('id')=='btn1')
           {
               var text = $('#btn1').val();
           }
           else if($(e.srcElement).attr('id')=='btn2')
           {
               var text = $('#btn2').val();
           }
           else if($(e.srcElement).attr('id')=='btn3')
           {
               var text = $('#btn3').val();
           }
           else if($(e.srcElement).attr('id')=='btn4')
           {
               var text = $('#btn4').val();
           }
           else if($(e.srcElement).attr('id')=='btn5')
           {
               var text = $('#btn5').val();
           }
           else if($(e.srcElement).attr('id')=='btn6')
           {
               var text = $('#btn6').val();
           }
        $('#status').html('Clicked an insert button.');
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data: text}, function(response) {
                $('#status').html('Inserted text into NetCool!');
                console.log('success');
            });
        });
    });
});
