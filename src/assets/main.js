$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/knighthawkbro.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle the response here
      $.each(response.courses.completed, function(course) {
        var badge = $('#badges').append("<div class='course'>"+
        "<h3>"+this.title+"</h3>"+
        "<img src="+this.badge+">"+
        "<a href="+this.url+" target='_blank' class='btn btn-primary'>See Course</a>"+
        "</div>");
      });
    }
  });
});
