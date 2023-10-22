function loadhtmlwithajax () {
    $("#subject").load("data.html test1");
}

function loadxmlwithajax () {
    $.ajax({
      url: "data.xml",
      dataType: "xml",
      success: function(xml) {
        var output = "";
        $(xml).find("item").each(function() {
          var title = $(this).find("title").text();
          var artist = $(this).find("artist").text();
          output += "<p>Title: " + title + "</p>";
          output += "<p>Artist: " + artist + "</p>";
        });
        $("#subject").html(output);
      }
    });
}