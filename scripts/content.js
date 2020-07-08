chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    if ($(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea")[0]){
      var data = request.data || {};

      // Change height of container
      $(".dijitDialogPaneContent.dijitDialogSingleChild").find(".dijitLayoutContainer.dijitContainer").css("height", "520px");
      $(".dijitDialogPaneContent.dijitDialogSingleChild").find(".dijitContentPane.dijitLayoutContainer-child.dijitLayoutContainer-dijitContentPane.dijitLayoutContainerPane.dijitAlignCenter.dijitContentPaneSingleChild").css("height", "496px");
      $(".dijitDialogPaneContent.dijitDialogSingleChild").find(".dijitDialogPaneActionBar.dijitLayoutContainer-child.dijitLayoutContainer-dijitDialogPaneActionBar.dijitLayoutContainerPane.dijitAlignBottom").css("top", "496px");
      // Hide error icon
      $(".dijitValidationIcon").hide();
      // Move window up
      if ($(window).height() < 960) {
        $(".oneui .dijitDialog").css("top", "5px");
      }
      else {
        $(".oneui .dijitDialog").css("top", "571px");
      }

      // Button data
      // Sent to
      var btn1= $('<input type="button" id="btn1" value="Tier III" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn2= $('<input type="button" id="btn2" value="IP Services" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn3= $('<input type="button" id="btn3" value="Voice Services" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn4= $('<input type="button" id="btn4" value="Video Services" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn5= $('<input type="button" id="btn5" value="Tech Ops" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');

      // SleeplessBoi
      var btn6= $('<input type="button" id="btn6" value="Monitoring in AlphaXD" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn7= $('<input type="button" id="btn7" value="MT Requested" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn8= $('<input type="button" id="btn8" value="Logged RF Watchlist" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');

      // IP services
      var btn9= $('<input type="button" id="btn9" value="Incog cleared" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn10= $('<input type="button" id="btn10" value="Pre-MW logon" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');

      // Other
      var btn11= $('<input type="button" id="btn11" value="Verified A/V on STB" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn12= $('<input type="button" id="btn12" value="Outage/Maintenance Related" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn13= $('<input type="button" id="btn13" value="Tom Spoor acknowledged. Monitoring" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');

      // Clear
      var btn14= $('<input type="button" id="btn14" value="Clear Others" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn15= $('<input type="button" id="btn15" value="Clear Tier III" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');

      // Set layout of injection
      $('<div style="font-weight: normal; color: #222; font-size: 15px; margin-bottom: 3px;">Sent to:</div>').appendTo(".SingleChild");
      $(".SingleChild").append(btn1);
      $(".SingleChild").append(btn2);
      $(".SingleChild").append(btn3);
      $(".SingleChild").append(btn4);
      $(".SingleChild").append(btn5);
      $(".SingleChild").append('<br />');
      $(".SingleChild").append('<br />');
      $('<div style="font-weight: normal; color: #222; font-size: 15px; margin-bottom: 3px;">Cleared:</div>').appendTo(".SingleChild");
      $(".SingleChild").append(btn14);
      $(".SingleChild").append(btn15);
      $(".SingleChild").append('<br />');
      $(".SingleChild").append('<br />');
      $('<div style="font-weight: normal; color: #222; font-size: 15px; margin-bottom: 3px;">SleeplessBoi:</div>').appendTo(".SingleChild");
      $(".SingleChild").append(btn6);
      $(".SingleChild").append(btn7);
      $(".SingleChild").append(btn8);
      $(".SingleChild").append('<br />');
      $(".SingleChild").append('<br />');
      $('<div style="font-weight: normal; color: #222; font-size: 15px; margin-bottom: 3px;">IP Services:</div>').appendTo(".SingleChild");
      $(".SingleChild").append(btn9);
      $(".SingleChild").append(btn10);
      $(".SingleChild").append('<br />');
      $(".SingleChild").append('<br />');
      $('<div style="font-weight: normal; color: #222; font-size: 15px; margin-bottom: 3px;">Other:</div>').appendTo(".SingleChild");
      $(".SingleChild").append(btn11);
      $(".SingleChild").append(btn12);
      $(".SingleChild").append(btn13);

      // Logic to allow buttons to function
      $(document).on('click', '#btn1', function(event) {
        var data = "Sent alarm to Tier III.";
        $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $(document).on('click', '#btn2', function(event) {
        var data = "Sent alarm to IP Services.";
        $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $(document).on('click', '#btn3', function(event) {
        var data = "Sent alarm to Voice Services.";
        $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $(document).on('click', '#btn4', function(event) {
        var data = "Sent alarm to Video Services.";
        $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $(document).on('click', '#btn5', function(event) {
        var data = "Sent alarm to Tech Ops.";
        $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $(document).on('click', '#btn6', function(event) {
        var data = "Monitoring in AlphaXD.";
        $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $(document).on('click', '#btn7', function(event) {
        var data = "Requested maintenance ticket.";
        $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $(document).on('click', '#btn8', function(event) {
        var data = "Logged in the RF Watchlist.";
        $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $(document).on('click', '#btn9', function(event) {
        var data = "Per IP: After sending the alarm and an associated rejoin to the cluster has been alerted. The alarm can be cleared. (Adam Holowacz).";
        $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $(document).on('click', '#btn10', function(event) {
        var data = "IP Services Pre-MW logon.";
        $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $(document).on('click', '#btn11', function(event) {
        var data = "Verified A/V on STB.";
        $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $(document).on('click', '#btn12', function(event) {
        var data = "NOC- Outage/Maintenance Related.";
        $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $(document).on('click', '#btn13', function(event) {
        var data = "Reocurring alarm known and acknowledged from Tom Spoor. Monitoring.";
        $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $(document).on('click', '#btn14', function(event) {
        var data = "Clear - ";
        $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $(document).on('click', '#btn15', function(event) {
        var data = "Clear -  - Ticket#";
        $(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });

      // Send response
      sendResponse({data: data, success: true});
    };
});
