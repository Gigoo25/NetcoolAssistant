chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    console.log("something happening from the extension");
    var data = request.data || {};

    var btn1= $('<input type="button" id="btn1" value="Sent alarm to Tier III."/>');
    var btn2= $('<input type="button" id="btn2" value="Sent alarm to IP Services."/>');
    var btn3= $('<input type="button" id="btn3" value="Sent alarm to Voice Services."/>');
    var btn4= $('<input type="button" id="btn4" value="Sent alarm to Video Services."/>');
    var btn5= $('<input type="button" id="btn5" value="Sent alarm to Tech Ops."/>');
    var btn6= $('<input type="button" id="btn6" value="Monitoring in AlphaXD."/>');
    var btn7= $('<input type="button" id="btn7" value="Verified A/V on STB."/>');
    var btn8= $('<input type="button" id="btn8" value="MT Requested."/>');
    var btn9= $('<input type="button" id="btn9" value="Logged in the RF Watchlist."/>');
    var btn10= $('<input type="button" id="btn10" value="Investigating."/>');

    $('<div>Sent to:</div>').appendTo(".SingleChild");
    $(".SingleChild").append(btn1);
    $(".SingleChild").append(btn2);
    $(".SingleChild").append(btn3);
    $(".SingleChild").append(btn4);
    $(".SingleChild").append(btn5);
    $(".SingleChild").append('<br />');
    $(".SingleChild").append('<br />');
    $(".SingleChild").append('<br />');
    $('<div>SleeplessBoi:</div>').appendTo(".SingleChild");
    $(".SingleChild").append(btn6);
    $(".SingleChild").append(btn7);
    $(".SingleChild").append(btn8);
    $(".SingleChild").append(btn9);
    $(".SingleChild").append('<br />');
    $(".SingleChild").append('<br />');
    $(".SingleChild").append('<br />');
    $('<div>Other:</div>').appendTo(".SingleChild");
    $(".SingleChild").append(btn10);

    $(document).on('click', '#btn1', function(event) {
      var data = $('#btn1').val();
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val("");
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
    });
    $(document).on('click', '#btn2', function(event) {
      var data = $('#btn2').val();
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val("");
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
    });
    $(document).on('click', '#btn3', function(event) {
      var data = $('#btn3').val();
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val("");
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
    });
    $(document).on('click', '#btn4', function(event) {
      var data = $('#btn4').val();
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val("");
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
    });
    $(document).on('click', '#btn5', function(event) {
      var data = $('#btn5').val();
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val("");
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
    });
    $(document).on('click', '#btn6', function(event) {
      var data = $('#btn6').val();
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val("");
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
    });
    $(document).on('click', '#btn7', function(event) {
      var data = $('#btn7').val();
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val("");
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
    });
    $(document).on('click', '#btn8', function(event) {
      var data = $('#btn8').val();
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val("");
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
    });
    $(document).on('click', '#btn9', function(event) {
      var data = $('#btn9').val();
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val("");
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
    });
    $(document).on('click', '#btn10', function(event) {
      var data = $('#btn10').val();
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val("");
      $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
    });

    sendResponse({data: data, success: true});
});
