window.onload = function() {
  var iframe = document.getElementById("_30899058_iframe");
  var iFrameDOM = $("iframe#_30899058_iframe").contents();

  function myFn() {
    if (iframe.contentWindow.document.getElementsByClassName("dijitInputContainer dijitInline dijitInputField").length) {
      // Change height of container
      iFrameDOM.find(".dijitDialogPaneContent.dijitDialogSingleChild").find(".dijitLayoutContainer.dijitContainer").css("height", "520px");
      iFrameDOM.find(".dijitDialogPaneContent.dijitDialogSingleChild").find(".dijitContentPane.dijitLayoutContainer-child.dijitLayoutContainer-dijitContentPane.dijitLayoutContainerPane.dijitAlignCenter.dijitContentPaneSingleChild").css("height", "496px");
      iFrameDOM.find(".dijitDialogPaneContent.dijitDialogSingleChild").find(".dijitDialogPaneActionBar.dijitLayoutContainer-child.dijitLayoutContainer-dijitDialogPaneActionBar.dijitLayoutContainerPane.dijitAlignBottom").css("top", "496px");
      // Hide error icon
      iFrameDOM.find(".dijitValidationIcon").hide();

      // Move window up
      iFrameDOM.find(".dijitDialog").css("top", "200px");

      // Button data
      // Sent to
      var btn1= $('<input type="button" id="btn1" value="Tier III" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn2= $('<input type="button" id="btn2" value="IP Services" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn3= $('<input type="button" id="btn3" value="Voice Services" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn4= $('<input type="button" id="btn4" value="Video Services" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn5= $('<input type="button" id="btn5" value="Tech Ops" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn6= $('<input type="button" id="btn6" value="F&P" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');

      // SleeplessBoi
      var btn7= $('<input type="button" id="btn7" value="Monitoring in AlphaXD" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn8= $('<input type="button" id="btn8" value="MT Requested" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn9= $('<input type="button" id="btn9" value="Logged RF Ticket" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn10= $('<input type="button" id="btn10" value="FEC & SNR Clear" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');

      // IP services
      var btn11= $('<input type="button" id="btn11" value="Pre-MW logon" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');

      // Other
      var btn12= $('<input type="button" id="btn12" value="Verified A/V on STB" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');

      // Clear
      var btn13= $('<input type="button" id="btn13" value="Outage Related" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn14= $('<input type="button" id="btn14" value="Maintenance Related" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn15= $('<input type="button" id="btn15" value="Clear Others" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');
      var btn16= $('<input type="button" id="btn16" value="Clear Tier III" style="margin:2px; padding: 4px 10px 4px; cursor: pointer; outline: none; font-family: Arial, Tahoma, Verdana, sans-serif; color: #000000; text-shadow: 0px 1px 0px #ffffff; font-weight: bold; background-image: -webkit-linear-gradient(top, #f4f4f4 0%,#dbdbdb 100%); border: 1px solid #c3c3c3; line-height: normal; vertical-align: middle; #vertical-align: auto; text-align: center; white-space: nowrap;"/>');

      // Set layout of injection
      iFrameDOM.find(".SingleChild").append('<div style="font-weight: normal; color: #222; font-size: 15px; margin-bottom: 3px;">Sent to:</div>');
      iFrameDOM.find(".SingleChild").append(btn1);
      iFrameDOM.find(".SingleChild").append(btn2);
      iFrameDOM.find(".SingleChild").append(btn3);
      iFrameDOM.find(".SingleChild").append(btn4);
      iFrameDOM.find(".SingleChild").append(btn5);
      iFrameDOM.find(".SingleChild").append(btn6);
      iFrameDOM.find(".SingleChild").append('<br />');
      iFrameDOM.find(".SingleChild").append('<br />');
      iFrameDOM.find(".SingleChild").append('<div style="font-weight: normal; color: #222; font-size: 15px; margin-bottom: 3px;">Cleared:</div>');
      iFrameDOM.find(".SingleChild").append(btn13);
      iFrameDOM.find(".SingleChild").append(btn14);
      iFrameDOM.find(".SingleChild").append(btn15);
      iFrameDOM.find(".SingleChild").append(btn16);
      iFrameDOM.find(".SingleChild").append('<br />');
      iFrameDOM.find(".SingleChild").append('<br />');
      iFrameDOM.find(".SingleChild").append('<div style="font-weight: normal; color: #222; font-size: 15px; margin-bottom: 3px;">SleeplessBoi:</div>');
      iFrameDOM.find(".SingleChild").append(btn7);
      iFrameDOM.find(".SingleChild").append(btn8);
      iFrameDOM.find(".SingleChild").append(btn9);
      iFrameDOM.find(".SingleChild").append(btn10);
      iFrameDOM.find(".SingleChild").append('<br />');
      iFrameDOM.find(".SingleChild").append('<br />');
      iFrameDOM.find(".SingleChild").append('<div style="font-weight: normal; color: #222; font-size: 15px; margin-bottom: 3px;">IP Services:</div>');
      iFrameDOM.find(".SingleChild").append(btn11);
      iFrameDOM.find(".SingleChild").append('<br />');
      iFrameDOM.find(".SingleChild").append('<br />');
      iFrameDOM.find(".SingleChild").append('<div style="font-weight: normal; color: #222; font-size: 15px; margin-bottom: 3px;">Other:</div>');
      iFrameDOM.find(".SingleChild").append(btn12);

      // Logic to allow buttons to function
      $("iframe#_30899058_iframe").contents().on('click', '#btn1', function(event) {
        var data = "Sent alarm to Tier III.";
        iFrameDOM.find(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $("iframe#_30899058_iframe").contents().on('click', '#btn2', function(event) {
        var data = "Sent alarm to IP Services.";
        iFrameDOM.find(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $("iframe#_30899058_iframe").contents().on('click', '#btn3', function(event) {
        var data = "Sent alarm to Voice Services.";
        iFrameDOM.find(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $("iframe#_30899058_iframe").contents().on('click', '#btn4', function(event) {
        var data = "Sent alarm to Video Services.";
        iFrameDOM.find(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $("iframe#_30899058_iframe").contents().on('click', '#btn5', function(event) {
        var data = "Sent alarm to Tech Ops.";
        iFrameDOM.find(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $("iframe#_30899058_iframe").contents().on('click', '#btn6', function(event) {
        var data = "Sent alarm to F&P.";
        iFrameDOM.find(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $("iframe#_30899058_iframe").contents().on('click', '#btn7', function(event) {
        var data = "Monitoring in AlphaXD.";
        iFrameDOM.find(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $("iframe#_30899058_iframe").contents().on('click', '#btn8', function(event) {
        var data = "Requested maintenance ticket NOC-";
        iFrameDOM.find(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $("iframe#_30899058_iframe").contents().on('click', '#btn9', function(event) {
        var data = "Logged in RF Ticket NOC-";
        iFrameDOM.find(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $("iframe#_30899058_iframe").contents().on('click', '#btn10', function(event) {
        var data = "Documented.";
        iFrameDOM.find(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $("iframe#_30899058_iframe").contents().on('click', '#btn11', function(event) {
        var data = "IP Services Pre-MW logon.";
        iFrameDOM.find(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $("iframe#_30899058_iframe").contents().on('click', '#btn12', function(event) {
        var data = "Verified A/V on STB.";
        iFrameDOM.find(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $("iframe#_30899058_iframe").contents().on('click', '#btn13', function(event) {
        var data = "Outage Related NOC-";
        iFrameDOM.find(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $("iframe#_30899058_iframe").contents().on('click', '#btn14', function(event) {
        var data = "Maintenance Related NOC-";
        iFrameDOM.find(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $("iframe#_30899058_iframe").contents().on('click', '#btn15', function(event) {
        var data = "Clear - ";
        iFrameDOM.find(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });
      $("iframe#_30899058_iframe").contents().on('click', '#btn16', function(event) {
        var data = "Clear -  - Ticket#";
        iFrameDOM.find(".dijitInputContainer.dijitInline.dijitInputField:first-child, textarea").val(data);
      });

      // Set to only run once
      clearInterval(singleLoop);
      
      iFrameDOM.find(".dijitReset.dijitInline.dijitButtonNode").click(function(){
        singleLoop = setInterval(myFn, 100);
      });
    }
  }
  var singleLoop = setInterval(myFn, 100);
}
