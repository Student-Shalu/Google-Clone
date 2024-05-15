$(document).ready(function() {
  var gsearch = function() {
    var url = 'https://www.google.com/search?q=' + document.getElementById('searchme').value;
    window.open(url, 'google');
  };
  var glucky = function() {
    var url = 'https://www.google.com/search?q=' + document.getElementById('searchme').value + '&btnI';
    window.open(url, 'google');
  };
  var gback = function() {
    history.back();
  };

  $(".bx-dots-vertical-rounded").click(function(){
    $(".drop-down").css("display", "block");
  });
  $(".page").click(function(){
    $(".drop-down").css("display", "none");
  });

  $(".bxs-grid").click(function(){
    $(".apps-list").css("display", "flex");
  });
  $(".page").click(function(){
    $(".apps-list").css("display", "none");
  });
  
  var gahead = function() {
    history.forward();
  };

  $(".left").click(gback);
  $(".right").click(gahead);
  $(".button.left").click(gsearch);
  $(".button.right").click(glucky);

  $("#searchme").keypress(function(e) {
    if (e.which == 13) {
      gsearch();
    }
  });


  $("#signInButton").click(function() {
    $("#signInForm").toggle();
  });

  $("#submitSignIn").click(function() {
    var username = $("#username").val();
    var password = $("#password").val();
    
    // Here you can handle sign-in logic, e.g., send data to server for authentication
    // For demonstration, let's just log the username and password
    console.log("Username: " + username);
    console.log("Password: " + password);
  });
});


