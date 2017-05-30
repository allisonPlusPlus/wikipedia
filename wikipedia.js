$(document).ready(function() {

$("#button").click(function() {
  var searchTerm = $("#searchterm").val();
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
  searchTerm + "&format = json";

  $.ajax( {
    type: "GET",
    url: proxy + url,
    // async: false,
    dataType: 'json',
    success: function(data) {
       console.log(data);
    },

    error: function(errorMessage){
      console.log("error");
    }

});
});


  });
