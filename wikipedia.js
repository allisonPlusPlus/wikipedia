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
        console.log(data[1][0]);
        console.log(data[2][0]);
        console.log(data[3][0]);
        $(".title").append(data[1][0]);
        $(".article").append(data[2][0]);
      },


      error: function(request, status, error) {
        console.log(request.responseText);
        console.log(url);
      }
    });
  });
});
