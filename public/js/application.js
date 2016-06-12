$(document).ready(function() {

//When add a new student link is clicked, the form appears and link is hidden
  $('.container').on('click', '#new-student', function(event){
    event.preventDefault();

    var url =  $(this).attr('href')
    self = $(this)

    $.ajax({
      url: url
    })
    .done(function(response){
      $('.container').append(response);
      $(self).hide();
    });
  });

//When a form is submitted, add student directly on page through ajax

  $('.container').on('submit', '#new-student-form', function(event){
    event.preventDefault();

    var url = $(this).attr('action')
    var data = $(this).serialize()
    var self = $(this)

    $.ajax({
      url: url,
      method: "POST",
      data: data,
      data_type: "JSON"
    })
    .done(function(response){
      console.log(response)
      $('#all-students').append("<div class = 'student-info'>" +  "<a href = '/student/" + response.id + "'>" + response.first_name + " " + response.last_name  +  "</a>" + "<br>" + response.email + "</div>");
      $('#new-student-form').find("input[type=text]").val("");
      $('#new-student-form').find("input[type=text]").focus();
    });
  });

});
