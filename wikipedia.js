$(document).ready(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    var searchTerm = $("#searchterm").val();
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      searchTerm + "&format=json";

    $.ajax({
      url: proxy + url,

      success: function(data) {
        for (var i=0; i < data[1].length; i ++) {
        $(".output").prepend("<li><a href="+data[3][i]+">"+data[1][i] +"</a><p>"+data[2][i]+"</p></li>");
      }
      },


      error: function(request, status, error) {
        console.log(request.responseText);
        console.log(url);
      }
    });
  });
});
