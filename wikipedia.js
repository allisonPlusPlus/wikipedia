$(document).ready(function() {

$("#button").click(function() {
  var searchTerm = $("#searchterm").val();
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
  searchTerm + "&format = json";

  $.ajax( {
    url: proxy + url,

    success: function(response) {
       console.log(response);
    },

    error: function(response){
      console.log(response);
    }

});
});


  });
