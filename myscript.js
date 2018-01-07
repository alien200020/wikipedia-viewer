$('document').ready(function() {
  $('#search').click(function() {
    var searchTerm = $('#searchTerm').val();
    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&format=json&callback=?';
    console.log(url);
   $.ajax({
     type: "GET",
     url: url,
     async: false,
     dataType: "json",
     success: function(response) {
       
       $('#output').css('background-color', 'white');
       $('#output').html('');
       for (var i = 0; i < response[1].length; i++) {
         $('#output').append("<li><a href= "+ response[3][i] + " target='_blank'>" + response[1][i]
  	                   + "</a><br />" + response[2][i] + "<br /></li>")
       }
     },
     error: function(errorMessage) {
       alert('Sorry, there is something wrong.')
     }
   });
    
  })
});