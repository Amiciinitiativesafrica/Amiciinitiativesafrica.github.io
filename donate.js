document.addEventListener('DOMContentLoaded', function() {
  var openBtn = document.getElementById('donate');
  openBtn.addEventListener('click', function() {
    // Replace 'external.html#section-id' with the path to your external HTML file and the specific section ID
    window.location.href = 'donate.html';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var openBtn = document.getElementById('activities');
  openBtn.addEventListener('click', function() {
    // Replace 'external.html#section-id' with the path to your external HTML file and the specific section ID
    window.location.href = 'index.html#what-we-do';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var openBtn = document.getElementById('about');
  openBtn.addEventListener('click', function() {
    // Replace 'external.html#section-id' with the path to your external HTML file and the specific section ID
    window.location.href = 'index.html#who-are-we';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var openBtn = document.getElementById('fight');
  openBtn.addEventListener('click', function() {
    // Replace 'external.html#section-id' with the path to your external HTML file and the specific section ID
    window.location.href = 'act.html';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var openBtn = document.getElementById('update');
  openBtn.addEventListener('click', function() {
    // Replace 'external.html#section-id' with the path to your external HTML file and the specific section ID
    window.location.href = 'act.html';
  });
});

$(document).ready(function() {
  $("#button--submit").click(function() {
    var email = $("#emailInput").val();

    // Validate the email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Send the email to the server for processing (replace the URL with your backend endpoint)
    var request = $.ajax({
      url: "https://your-backend.com/subscribe",
      method: "POST",
      data: { email: email },
      dataType: "json"
    });

    request.done(function(response) {
      alert("Thank you for subscribing to our newsletter!");
      $("#emailInput").val("");
    });

    request.fail(function(jqXHR, textStatus) {
      alert("Subscription failed: " + textStatus);
    });
  });
});

